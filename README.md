# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID |
| --- | --- | --- |
| roblox_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |
| roblox_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |
| match_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |
| uber_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |
| snapchat_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |
| x_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 |

## How it works
- **Schedule:** Runs every 30 minutes via GitHub Actions.
- **Tracking:** Extracts the internal semantic version and build ID from the JS file.
- **Persistence:** Updates `versions.json` and saves the updated script to the `data/` folder.

## Files
- `versions.json`: JSON database of all detected versions and timestamps.
- `data/latest.js`: The most recently fetched `api.js`.
- `data/api_X_X_X.js`: Versioned archive of the SDK.

---
*Automatically updated by [GitHub Actions](.github/workflows/update-api.yml)*
