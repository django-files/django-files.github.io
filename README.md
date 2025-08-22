[![Pages](https://img.shields.io/github/actions/workflow/status/django-files/docs/pages.yaml?logo=github&label=pages)](https://github.com/django-files/docs/actions/workflows/pages.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/django-files/docs/lint.yaml?logo=github&label=lint)](https://github.com/django-files/docs/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/django-files/docs?logo=vitepress&logoColor=white&label=updated)](https://github.com/django-files/docs/pulse)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/django-files/docs?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/django-files/docs)
[![GitHub Discussions](https://img.shields.io/github/discussions/django-files/django-files?logo=github)](https://github.com/django-files/django-files/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/django-files/django-files?style=flat&logo=github)](https://github.com/django-files/django-files/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=Support)](https://ko-fi.com/cssnr)

# Django Files Documentation

Website and Documentation for the [Django Files](https://github.com/django-files/django-files) Application.

- https://django-files.github.io/

These [docs](docs) are **written in plain text** using Markdown and built with [VitePress](https://vitepress.dev/).

| Location                                       | Description                          |
| ---------------------------------------------- | ------------------------------------ |
| [docs](docs)                                   | Documentation Root (Markdown files). |
| [docs/public](docs/public)                     | Static Root (copied to docs root).   |
| [.vitepress](.vitepress)                       | VitePress Configuration Root.        |
| [.vitepress/config.mts](.vitepress/config.mts) | VitePress Configuration File.        |

## Development

To get started, clone the repository and run `npm i` then `npm run dev`.

```shell
npm install
npm run dev
```

The site should now be available at: http://localhost:5173/

- [VitePress CLI Reference](https://vitepress.dev/reference/cli)
- [VitePress Markdown Reference](https://vitepress.dev/guide/markdown)
