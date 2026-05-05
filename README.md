# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| roblox_login | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| match_login | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| uber_login | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| snapchat_register | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| x_register | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| roblox_join | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| roblox_recovery | 4.0.17 | 1a6bb265-a5dc-466e-8ce5-01b13fe996cd | 9dc7ae7edc7f3de9ba7082a80d54715a |
| adobe_register | 4.2.0 | 7992e76b-f8f3-4229-bf69-81d38284021c | b14c96fb3da0e91e5087f85fe53e874e |

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
