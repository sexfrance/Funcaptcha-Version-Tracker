const fs = require("fs");
const path = require("path");
const https = require("https");

const SERVICES = {
    "roblox_register": "https://arkoselabs.roblox.com/v2/A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F/api.js",
    "roblox_login": "https://arkoselabs.roblox.com/v2/476068BF-9607-4799-B53D-966BE98E2B81/api.js",
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
        
        if (!versionMatch) {
            console.error(`❌ Version not found for ${name}`);
            return;
        }
        
        const version = versionMatch[1];
        
        if (!versionsData[name]) {
            versionsData[name] = { latest: null, history: [] };
        }
        
        const serviceData = versionsData[name];
        
        if (serviceData.latest === version) {
            console.log(`✅ ${name} is up to date (${version})`);
            return;
        }

        console.log(`🚀 Update for ${name}: ${serviceData.latest || 'none'} -> ${version}`);
        
        const timestamp = new Date().toISOString();
        serviceData.latest = version;
        serviceData.history.unshift({
            version,
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
    console.log("\n✨ Done tracking all services.");
}

run();
