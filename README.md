# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| roblox_login | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| match_login | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| uber_login | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| snapchat_register | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| x_register | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| roblox_join | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| roblox_recovery | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |
| adobe_register | 4.2.2 | 37965111-f202-48f7-80e6-5bc6c82d268e | 8e9e949cf2397143cf756d81c443e87d |

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
