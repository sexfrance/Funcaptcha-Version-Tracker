# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| roblox_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| match_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| uber_login | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| snapchat_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| x_register | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| roblox_join | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |
| roblox_recovery | 4.0.16 | 09493a0d-3295-4bae-879b-6c81044a46a1 | 201af2db450fecb8242d98ec4dac983a |

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
