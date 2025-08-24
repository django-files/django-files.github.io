# Getting Started

Get started by [running](#running) the server on your host and [accessing](#accessing) the site.

You can also view the 🛠️ [Features](features.md) and 📸 [Screenshots](features.md#screenshots).

## Running

You can use either [Docker Run](#docker-run) or [Docker Compose](#docker-compose).

### Docker Run

```shell
docker run --name "django-files" -d --restart unless-stopped  \
  -p 80:80  -v /data/django-files:/data/media  \
  -e USERNAME=myadminuser  \
  -e PASSWORD=pleasechangeme  \
    ghcr.io/django-files/django-files:latest
```

### Docker Compose

```shell
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

## Accessing

Once the server is up and running you can access the site from a web browser.

If running on your localhost with default port mapping, you can access it here:

- http://localhost/

### Credentials

If you set a `USERNAME` or `PASSWORD` environment variable, use those values.

Otherwise, the default credentials are.

| Default      | Value   |
| ------------ | ------- |
| **username** | `admin` |
| **password** | `12345` |
