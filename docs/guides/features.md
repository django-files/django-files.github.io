# Features

Django Files is packed with features for seamless file management and sharing.  
More features are in progress!

[[toc]]

> [!INFO]  
> Missing a feature? Submit a [Feature Request](https://github.com/django-files/django-files/discussions/categories/feature-requests)!

## Screenshots

<VPSwiper
base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs"
:number-of-slides="18"
:pagination="{ type: 'fraction' }"
/>

## Core Features

- Local or S3 storage support
- One-click integration with ShareX, Flameshot
- [iOS Client](../clients/ios.md)
- [Android Client](../clients/android.md)
- Customizable UI with light/dark mode
- OAuth support (Discord, GitHub, Google) & two-factor authentication (Duo)
- [Web Extensions](../clients/browser.md) for Chrome and Firefox
- Public upload support (optional)

## Authentication & Security

- Multi-user support with local & OAuth authentication options
- Invite system for user onboarding
- OAuth configuration via Django Admin (no restart required)

## UI & File Management

- Drag & Drop file uploads
- Short URLs with vanity support
- Private & password-protected files
- Configurable EXIF metadata removal on upload
- Bulk file actions
- Albums & galleries for organizing files

## Stats & Insights

- Dashboard with user-friendly overview & stats
- Graph-based analytics (work in progress)
- File expiration & view counting

## Live Streaming

- RTMP ingest with HLS playback via Video.js
- Live/offline status badge and real-time viewer count
- Push notification subscriber count
- Stream title and description — editable in-place by the stream owner
- Discord webhook notifications on stream start/end
- See the [Live Streaming guide](streaming.md) for setup details

### Live Chat

- Real-time WebSocket chat with message history on join
- Viewer list with avatars
- Color-coded usernames; stream owner messages highlighted distinctly
- Notification sound toggle (persisted per browser)
- Owner controls: enable/disable live chat and anonymous chat without stopping the stream
- Ban system to remove disruptive viewers

### Chat Slash Commands

Type `/` in the chat input to see available commands with autocomplete (Tab and arrow key navigation).

**All viewers:**

| Command | Description |
| --- | --- |
| `/set-name <name>` | Set a custom display name (max 32 characters) |
| `/leave` | Disconnect from chat |
| `/join` | Rejoin chat after leaving |
| `/notify` | Toggle notification sound on/off |

**Stream owner only:**

| Command | Description |
| --- | --- |
| `/title <title>` | Update the stream title live |
| `/description <text>` | Update the stream description live |
| `/ban <display_name>` | Ban a viewer from chat |
| `/ban-message-cleanup <display_name>` | Ban a viewer and remove their messages |
