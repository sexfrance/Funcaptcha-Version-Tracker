const fs = require("fs");
const path = require("path");
const https = require("https");

const SERVICES = {
    "roblox_register": "https://arkoselabs.roblox.com/v2/A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F/api.js",
    "roblox_login": "https://arkoselabs.roblox.com/v2/476068BF-9607-4799-B53D-966BE98E2B81/api.js",
    "roblox_join": "https://arkoselabs.roblox.com/v2/CC30DB96-0C88-4DEB-86E5-6601927ACBB4/api.js",
    "match_login": "https://client-api.arkoselabs.com/v2/85800716-F435-4981-864C-8B90602D10F7/api.js",
    "uber_login": "https://ak04a6qc.uber.com/v2/30000F36-CADF-490C-929A-C6A7DD8B33C4/api.js",
    "snapchat_register": "https://snap-api.arkoselabs.com/v2/EA4B65CB-594A-438E-B4B5-D0DBA28C9334/api.js",
    "x_register": "https://client-api.arkoselabs.com/v2/2CB16598-CB82-4CF7-B332-5990DB66F3AB/api.js"
};

const VERSIONS_FILE = path.join(__dirname, "versions.json");
const DATA_DIR = path.join(__dirname, "data");

async function fetchApi(url) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "referer": "https://www.google.com/"
            }
        }, (res) => {
            let data = "";
            res.on("data", chunk => data += chunk);
            res.on("end", () => resolve(data));
        }).on("error", reject);
    });
}

async function processService(name, url, versionsData) {
    console.log(`🔍 Checking ${name}...`);
    try {
        const content = await fetchApi(url);
        const versionMatch = content.match(/\/api\.js["'`],\s*\w+\s*=\s*["'`](\d+\.\d+\.\d+)["'`]/);
        const buildIdMatch = content.match(/GAME_LIMIT_DEFAULT["'`],\s*\w+\s*=\s*["'`]([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})["'`]/i);
        // Enforcement hash is the 32-char hex value assigned before "script" and "v2/api.js"
        const enforcementMatch = content.match(/["'`]([0-9a-f]{32})["'`],\s*\w+\s*=\s*["'`]script["'`],\s*\w+\s*=\s*["'`]v2\/api\.js["'`]/i);

        if (!versionMatch) {
            console.error(`❌ Version not found for ${name}`);
            return;
        }

        const version = versionMatch[1];
        const buildId = buildIdMatch ? buildIdMatch[1] : "unknown";
        const enforcementHash = enforcementMatch ? enforcementMatch[1] : "unknown";

        if (!versionsData[name]) {
            versionsData[name] = { latest: null, history: [] };
        }

        const serviceData = versionsData[name];

        if (serviceData.latest === version && serviceData.latestBuildId === buildId && serviceData.latestEnforcementHash === enforcementHash) {
            console.log(`✅ ${name} is up to date (${version} | ${buildId} | ${enforcementHash})`);
            return;
        }

        console.log(`🚀 Update for ${name}: ${serviceData.latest || 'none'} -> ${version} (build: ${buildId}, enforcement: ${enforcementHash})`);

        const timestamp = new Date().toISOString();
        serviceData.latest = version;
        serviceData.latestBuildId = buildId;
        serviceData.latestEnforcementHash = enforcementHash;
        serviceData.history.unshift({
            version,
            buildId,
            enforcementHash,
            timestamp,
            url
        });

        // Save file
        const serviceDir = path.join(DATA_DIR, name);
        if (!fs.existsSync(serviceDir)) fs.mkdirSync(serviceDir, { recursive: true });
        
        const filename = `api_${version.replace(/\./g, "_")}.js`;
        fs.writeFileSync(path.join(serviceDir, filename), content);
        fs.writeFileSync(path.join(serviceDir, "latest.js"), content);
        
    } catch (error) {
        console.error(`❌ Error processing ${name}: ${error.message}`);
    }
}

async function run() {
    let versionsData = {};
    if (fs.existsSync(VERSIONS_FILE)) {
        versionsData = JSON.parse(fs.readFileSync(VERSIONS_FILE, "utf-8"));
    }

    for (const [name, url] of Object.entries(SERVICES)) {
        await processService(name, url, versionsData);
    }

    fs.writeFileSync(VERSIONS_FILE, JSON.stringify(versionsData, null, 2));

    // Generate README table
    const readmePath = path.join(__dirname, "README.md");
    let table = "| Service | Version | Build ID | Enforcement Hash |\n| --- | --- | --- | --- |\n";
    for (const [name, data] of Object.entries(versionsData)) {
        table += `| ${name} | ${data.latest || "?"} | ${data.latestBuildId || "?"} | ${data.latestEnforcementHash || "?"} |\n`;
    }

    const readme = `# Arkose Labs API Tracker

Automated tracker for Arkose Labs \`api.js\` (used in Roblox, X, Uber, etc.).

## Current Versions

${table}
## How it works
- **Schedule:** Runs every 30 minutes via GitHub Actions.
- **Tracking:** Extracts the internal semantic version, build ID, and enforcement hash from the JS file.
- **Persistence:** Updates \`versions.json\` and saves the updated script to the \`data/\` folder.

## Files
- \`versions.json\`: JSON database of all detected versions and timestamps.
- \`data/latest.js\`: The most recently fetched \`api.js\`.
- \`data/api_X_X_X.js\`: Versioned archive of the SDK.

---
*Automatically updated by [GitHub Actions](.github/workflows/update-api.yml)*
`;
    fs.writeFileSync(readmePath, readme);

    console.log("\n✨ Done tracking all services.");
}

run();
