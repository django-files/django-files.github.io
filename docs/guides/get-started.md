---
prev:
  text: 'Clients'
  link: '/clients/'
---

# Getting Started

Get started by [running](#running) the server on your host and [accessing](#accessing) the site.

You can also view the 🛠️ [Features](features.md) and 📸 [Screenshots](features.md#screenshots).

## Running

The fastest way to get up and running is with [Docker](https://www.docker.com/).

::: code-group

```shell [Docker Compose]
version: '3'

services:
  django-files:
    image: ghcr.io/django-files/django-files:latest
    environment:
      USERNAME: "myadminuser"
      PASSWORD: "pleasechangeme"
    volumes:
      - media_dir:/data/media
    ports:
      - "80:80"
      - "1935:1935"   # RTMP – remove if not using live streaming

volumes:
  media_dir:
```

```shell [Docker CLI]
docker run --name "django-files" -d --restart unless-stopped  \
  -p 80:80 -p 1935:1935 \
  -v /data/django-files:/data/media  \
  -e USERNAME=myadminuser  \
  -e PASSWORD=pleasechangeme  \
    ghcr.io/django-files/django-files:latest
```

:::

> [!NOTE]
> **Live streaming requires port 1935 (RTMP) to be reachable by your streaming client.**
> The container always listens on `1935` internally — you can publish it on any available host port (e.g. `1936:1935`).
> If your server is behind a router or firewall you must forward that port to the host.
> Cloud VMs (AWS, GCP, etc.) also need an inbound rule in their security group / firewall policy.
> See the [Live Streaming guide](streaming.md) for full setup details including the `RTMP_HOST` variable.

_Note: you can run from source; however, this is currently not documented or supported._

## Accessing

Once the server is up and running you can access the site from a web browser.

If running on your localhost with default port mapping, you can access it here:

- http://localhost/

If you set a `USERNAME` or `PASSWORD` environment variable, use those values.

Otherwise, the default credentials are.

| Default      | Value          |
| ------------ | -------------- |
| **username** | `admin` <CB /> |
| **password** | `12345` <CB /> |

Next you can review the [server setup](setup.md) and start [uploading](upload.md) or check out the [features](features.md).
