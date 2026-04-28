<!-- SPONSOR-START -->
---

<div align="center">

### 🌐 Need Proxies? Check out my services

<a href="https://vaultproxies.com" target="_blank" rel="noopener noreferrer">
  <img src="https://i.imgur.com/TF165pP.gif" alt="VaultProxies">
</a>
<p></p>

<table>
  <tr>
    <th>Service</th>
    <th>Pricing</th>
    <th>Features</th>
  </tr>
  <tr>
    <td><b><a href="https://vaultproxies.com" target="_blank" rel="noopener noreferrer">🔮 VaultProxies</a></b></td>
    <td><code>$1.00/GB</code> residential</td>
    <td>Residential · IPv6 · Residential Unlimited · Datacenter</td>
  </tr>
  <tr>
    <td><b><a href="https://nullproxies.com" target="_blank" rel="noopener noreferrer">🌑 NullProxies</a></b></td>
    <td><code>$0.75/GB</code> residential</td>
    <td>Residential · Residential Unlimited · DC Unlimited · Mobile Proxies</td>
  </tr>
  <tr>
    <td><b><a href="https://strikeproxy.net" target="_blank" rel="noopener noreferrer">⚡ StrikeProxy</a></b></td>
    <td><code>$0.75/GB</code> residential</td>
    <td>Residential · Residential Unlimited · DC Unlimited · Mobile Proxies</td>
  </tr>
</table>
</div>

<!-- SPONSOR-END -->

# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| roblox_login | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| match_login | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| uber_login | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| snapchat_register | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| x_register | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| roblox_join | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| roblox_recovery | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| adobe_register | 4.2.0 | 01063517-02a3-4241-90e8-57bcfa6eb344 | 24bcfbb16c8559cbe6d75aad3cf33f0a |

## How it works
- **Schedule:** Runs every 30 minutes via GitHub Actions.
- **Tracking:** Extracts the internal semantic version, build ID, and enforcement hash from the JS file.
- **Persistence:** Updates `versions.json` and saves the updated script to the `data/` folder.

## Files
- `versions.json`: JSON database of all detected versions and timestamps.
- `data/latest.js`: The most recently fetched `api.js`.
- `data/api_X_X_X.js`: Versioned archive of the SDK.

---
*Automatically updated by [GitHub Actions](.github/workflows/update-api.yml)*
