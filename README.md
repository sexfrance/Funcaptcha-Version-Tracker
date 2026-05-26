# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| roblox_login | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| match_login | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| uber_login | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| snapchat_register | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| x_register | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| roblox_join | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| roblox_recovery | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |
| adobe_register | 4.2.2 | 5a7f35dd-cdbe-455a-b3c5-c387e2622648 | 7456a189e914d8deb04e91bbcc80b059 |

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
