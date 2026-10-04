# Arkose Labs API Tracker

Automated tracker for Arkose Labs `api.js` (used in Roblox, X, Uber, etc.).

## Current Versions

| Service | Version | Build ID | Enforcement Hash |
| --- | --- | --- | --- |
| roblox_register | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| roblox_login | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| match_login | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| uber_login | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| snapchat_register | 4.4.2 | 719702df-f02c-490a-b25b-636f30148a1c | 9775dee111b6f5b2341a8bdde2d8f28f |
| x_register | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| roblox_join | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| roblox_recovery | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |
| adobe_register | 4.5.0 | 3f93f239-686d-4734-87e4-8ad0c18c55c8 | 6a42ce4b02e195996302a5c519bb8c52 |

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
