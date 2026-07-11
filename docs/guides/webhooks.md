# Webhooks

Django Files can notify other services when things happen on your instance — send rich Discord messages or JSON payloads to any endpoint you control.

[[toc]]

## What You Can Do

- **Discord** — post rich embeds to a channel: image previews, video thumbnails, stream go-live announcements with title/description/duration, all branded with your site name. Add one by pasting a webhook URL, or click **Add Discord Webhook** to pick the channel on Discord itself and finish setup back in Django Files.
- **Custom endpoints** — receive a JSON payload at any HTTP URL. Payloads can be signed with a per-webhook secret (HMAC-SHA256, sent as `X-Webhook-Signature`) so your receiver can verify authenticity.

Webhooks are managed under **Settings → Webhooks**, where you can add, edit, test, and delete them. Each webhook subscribes to exactly the events you choose.

## Events

| Event                             | Fires when                                |
| --------------------------------- | ----------------------------------------- |
| File Uploaded                     | A file finishes uploading                 |
| File Deleted                      | A file is deleted                         |
| Album Created / Updated / Deleted | Albums change                             |
| Short URL Created / Deleted       | Short links change                        |
| Stream Live                       | A live stream starts                      |
| Stream Ended                      | A live stream ends                        |
| User Login                        | A user signs in                           |
| User Created / Deleted            | Accounts change (site-wide webhooks only) |

## Site-Wide Webhooks

Regular webhooks fire for your own activity. Superusers can also create **site-wide webhooks** under **Site Settings → Site Webhooks**, which receive events for every user on the instance — including new account registrations and deletions.

## Payload

Custom webhooks receive a `POST` with a consistent envelope; the `data` object carries the event details:

```json
{
  "event": "file.upload",
  "timestamp": "2026-07-10T14:32:00+00:00",
  "site_url": "https://example.com",
  "data": {
    "id": 42,
    "name": "photo.jpg",
    "url": "https://example.com/u/photo.jpg",
    "raw_url": "https://example.com/raw/photo.jpg",
    "size": 204800,
    "mime": "image/jpeg",
    "user": "username",
    "captured_at": "08/08/2012 16:29:49",
    "location": "Múlaþing, Ísland",
    "camera": "NIKON CORPORATION NIKON D800E",
    "tags": ["travel", "iceland"]
  }
}
```

Every request includes an `X-Webhook-Event` header with the event key, and deliveries are retried automatically on failure. Full request/response schemas are documented in the [API reference](https://github.com/django-files/django-files/blob/master/swagger.yaml).

> [!TIP]
> Use the **Test** button next to any webhook to fire a sample event and confirm your endpoint or Discord channel receives it.
