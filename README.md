# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
| roblox_login | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
| match_login | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| uber_login | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
| snapchat_register | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
| x_register | 4.0.16 | 4ac8440d-c69b-4930-aa81-b805f45bb5d6 | d9d8ed97fd0f45a56f664628052bea47 |
| roblox_join | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
| roblox_recovery | 4.0.17 | 6ba988b9-6187-4fcb-9c3d-c8bb759414d4 | 2893ced7f21970c257e618618f41324f |
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
