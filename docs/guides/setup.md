# Server Setup

This section covers server configuration.

[[toc]]

## Storage

The directory mounted to `/data/media` has the following structure.

| Directory | Description                                       |
| --------- | ------------------------------------------------- |
| `db`      | If using SQLite the databse file is stored here.  |
| `files`   | If using file storage, the files are stored here. |
| `redis`   | Redis snapshots are stored here.                  |

## Database

By default `sqlite3` is used and provisioned automatically.

You can choose another database, but you must configure it yourself.

Supported Database Backends:

- sqlite3
- mysql
- postgresql

To configure a database use the following variables.

| Variable      | Description                          |
| ------------- | ------------------------------------ |
| DATABASE_TYPE | `sqlite3` or `mysql` or `postgresql` |
| DATABASE_NAME | Database name                        |
| DATABASE_USER | Database username                    |
| DATABASE_PASS | Database password                    |
| DATABASE_HOST | Database hostname                    |
| DATABASE_PORT | Optional if default                  |

## Variables

> [!WARNING]
> All variables are optional. This is for reference only.

| Variable                  | Description        | Example                                |
| ------------------------- | ------------------ | -------------------------------------- |
| SECRET                    | App Secret         | `JYGTKLztZxVdu5NXuhXGhFJ4AHrJ5YHigQqq` |
| SITE_URL                  | Site URL           | `https://example.com`                  |
| USERNAME                  | Local Username     | `admin`                                |
| PASSWORD                  | Local Password     | `PSZX7TgiSg6aB6sZ`                     |
| SUPER_USERS               | oAuth Sup User IDs | `111150265075298304,11114800698361444` |
| DISCORD_CLIENT_ID         | Discord Client ID  | `1135676900124135484`                  |
| DISCORD_CLIENT_SECRET     | Discord Secret     | `HbSyPWgOBx1U38MqmEEUy75KUe1Pm7dR`     |
| GITHUB_CLIENT_ID          | GitHub Client ID   | `1135676900124135484`                  |
| GITHUB_CLIENT_SECRET      | GitHub Secret      | `HbSyPWgOBx1U38MqmEEUy75KUe1Pm7dR`     |
| GOOGLE_CLIENT_ID          | Google Client ID   | `123-asdf.apps.googleusercontent.com`  |
| GOOGLE_CLIENT_SECRET      | Google Secret      | `GCSDPC-Tskdfix-klsjdf_r32489fj09jfsd` |
| OAUTH_REDIRECT_URL        | Discord Redirect   | `https://example.com/oauth/callback/`  |
| AWS_REGION_NAME           | AWS Region Name    | `us-east-1`                            |
| AWS_ACCESS_KEY_ID         | AWS IAM User Key   | `AKIEAKADFGASDFASGSDAFSDF`             |
| AWS_SECRET_ACCESS_KEY     | AWS IAM Secret     | `eVJsrhftrv2fcwyYcy323Sfhe5svy5436r55` |
| AWS_STORAGE_BUCKET_NAME   | Name of s3 bucket  | `my-s3-bucket`                         |
| STATIC_QUERYSTRING_EXPIRE | static link expire | `300`                                  |
| AWS_S3_CDN_URL            | proxy or cdn url   | `https://examples3cdndomain.com`       |
| DUO_API_HOST              | DUO API Host       | `api-abc123.duosecurity.com`           |
| DUO_CLIENT_ID             | DUO Client ID      | `nmoNmuLM72WB3RsNkwuv`                 |
| DUO_CLIENT_SECRET         | DUO Secret         | `nmoNmuLM72WB3RsNkwuvnmoNuLM72WB3RsNk` |
| SENTRY_URL                | Sentry URL         | `https://abc@123.ingest.sentry.io/123` |
| SENTRY_ENVIRONMENT        | Sentry ENV         | `prod`                                 |
