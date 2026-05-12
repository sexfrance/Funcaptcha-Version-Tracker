# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| roblox_login | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| match_login | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| uber_login | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| snapchat_register | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| x_register | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| roblox_join | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| roblox_recovery | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |
| adobe_register | 4.2.1 | 7ecbd953-09aa-4047-9b10-febe0ed32f28 | 6478ee8cab28a1b0febab9c23446b0a9 |

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
