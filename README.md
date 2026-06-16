# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| roblox_login | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| match_login | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| uber_login | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| snapchat_register | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| x_register | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| roblox_join | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| roblox_recovery | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |
| adobe_register | 4.2.2 | 91cd70be-71bd-4764-8862-fb9665750eb9 | 784afd70727e1b4c3c14a078953c41cc |

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
