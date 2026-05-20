# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| roblox_login | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| match_login | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| uber_login | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| snapchat_register | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| x_register | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| roblox_join | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| roblox_recovery | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |
| adobe_register | 4.2.2 | 3599826e-0e83-4310-857a-76590a8cf96d | aa7c59e710093b8a0016360fee0739d0 |

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
