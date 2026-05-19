# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| roblox_login | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| match_login | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| uber_login | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| snapchat_register | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| x_register | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| roblox_join | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| roblox_recovery | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |
| adobe_register | 4.2.1 | 8a156cb2-076a-4ae3-86fd-502bf105f8aa | b8d72ddc5dc039b4de809b85bc25715a |

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
