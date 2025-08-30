---
prev:
  text: 'Clients'
  link: '/clients'
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

volumes:
  media_dir:
```

```shell [Docker CLI]
docker run --name "django-files" -d --restart unless-stopped  \
  -p 80:80  -v /data/django-files:/data/media  \
  -e USERNAME=myadminuser  \
  -e PASSWORD=pleasechangeme  \
    ghcr.io/django-files/django-files:latest
```

:::

_Note: you can run from source; however, this is currently not documented or supported._

## Accessing

Once the server is up and running you can access the site from a web browser.

If running on your localhost with default port mapping, you can access it here:

- http://localhost/

If you set a `USERNAME` or `PASSWORD` environment variable, use those values.

Otherwise, the default credentials are.

| Default      | Value   |
| ------------ | ------- |
| **username** | `admin` |
| **password** | `12345` |

Next you can review the [server setup](setup.md) and start [uploading](upload.md) or check out the [features](features.md).
