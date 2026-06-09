# Live Streaming (RTMP)

Django Files includes a built-in RTMP server for live streaming via HLS.

[[toc]]

## Prerequisites

The container's RTMP server always listens on port `1935` internally. You must publish it to a host port so your streaming client can reach it. Docker port mappings are `HOST_PORT:CONTAINER_PORT` — you can use any available host port if `1935` is already in use on your machine (e.g. `1936:1935`).

::: code-group

```yaml [Docker Compose]
services:
  django-files:
    image: ghcr.io/django-files/django-files:latest
    ports:
      - "80:80"
      - "1935:1935"   # host port : container port — change the left value if needed
    volumes:
      - media_dir:/data/media
```

```shell [Docker CLI]
docker run --name "django-files" -d --restart unless-stopped \
  -p 80:80 -p 1935:1935 \
  -v /data/django-files:/data/media \
  -e USERNAME=myadminuser \
  -e PASSWORD=pleasechangeme \
    ghcr.io/django-files/django-files:latest
```

:::

> [!WARNING]
> If your server is behind a router, NAT, or cloud firewall (AWS security groups, GCP firewall rules, etc.), you must allow inbound TCP on the host port you chose. RTMP is **not** HTTP — it will not pass through a standard reverse proxy or CDN.
>
> If the auto-detected hostname is wrong (e.g. behind a CDN), set `RTMP_HOST` to a direct hostname so the UI generates correct RTMP URLs for streaming clients. See [Custom RTMP Host](#custom-rtmp-host) below.

## OBS Setup

Navigate to **Streams** in the Django Files UI to find your pre-filled Server URL and Stream Key.

Or build them manually:

| Field      | Value                                              |
| ---------- | -------------------------------------------------- |
| Service    | `Custom...`                                        |
| Server URL | `rtmp://<your-host>/live?token=<your-api-token>`   |
| Stream Key | Any name, e.g. `mystream`                          |

Your **API token** is shown in your user settings page.

## Optional URL Parameters

Append these to the Server URL to set stream metadata without changing them in the UI each time:

| Parameter      | Description                     | Example                    |
| -------------- | ------------------------------- | -------------------------- |
| `title`        | Stream title                    | `title=My+Stream`          |
| `description`  | Short description               | `description=Gaming+night` |
| `public`       | Public visibility (`true`/`false`) | `public=false`          |
| `viewer_limit` | Max concurrent viewers          | `viewer_limit=50`          |

Example full URL:

```
rtmp://example.com/live?token=abc123&title=My+Stream&public=true
```

## Custom RTMP Host

The app auto-detects the hostname for RTMP URLs from the request or `SITE_URL`. Set `RTMP_HOST` to override this — required when the auto-detected value would be wrong, such as when behind a CDN or reverse proxy.

| Variable    | Description                        | Example                      |
| ----------- | ---------------------------------- | ---------------------------- |
| `RTMP_HOST` | Hostname used to generate RTMP URLs | `my-df-server.example.com`  |

## Watching a Stream

Active streams are listed at `/streams/`. Each stream has a public HLS player at `/live/<stream-name>/`.

The HLS endpoint is also available directly:

```
http://<your-host>/hls/<stream-name>/index.m3u8
```

## Discord Webhooks

Stream start/end notifications can be sent to Discord. Configure webhooks per-stream from the stream's settings page in the Django Files UI.
