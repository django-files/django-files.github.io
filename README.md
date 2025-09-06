[![GitHub Deployments](https://img.shields.io/github/deployments/django-files/django-files.github.io/github-pages?logo=github&label=deploy)](https://github.com/django-files/django-files.github.io/deployments)
[![Pages](https://img.shields.io/github/actions/workflow/status/django-files/django-files.github.io/pages.yaml?logo=cachet&label=pages)](https://github.com/django-files/django-files.github.io/actions/workflows/pages.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/django-files/django-files.github.io/lint.yaml?logo=cachet&label=lint)](https://github.com/django-files/django-files.github.io/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/django-files/django-files.github.io?logo=vitepress&logoColor=white&label=updated)](https://github.com/django-files/django-files.github.io/pulse)
[![GitHub Contributors](https://img.shields.io/github/contributors/django-files/django-files.github.io?logo=github)](https://github.com/django-files/django-files.github.io/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/django-files/django-files.github.io?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/django-files/django-files.github.io)
[![GitHub Discussions](https://img.shields.io/github/discussions/django-files/django-files?logo=github)](https://github.com/django-files/django-files/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/django-files/django-files?style=flat&logo=github)](https://github.com/django-files/django-files/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/django-files?style=flat&logo=github&label=org%20stars)](https://github.com/django-files)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Django Files Documentation

Website and Documentation for the [Django Files](https://github.com/django-files/django-files) Application.

- https://django-files.github.io/

These [docs](docs) are **written in plain text** using Markdown and built with [VitePress](https://vitepress.dev/).

| Location                                       | Description                                                                             |
| ---------------------------------------------- | --------------------------------------------------------------------------------------- |
| [docs](docs)                                   | Documentation Root (Markdown files).                                                    |
| [docs/index.md](docs/index.md)                 | Special [VitePress Home Page](https://vitepress.dev/reference/default-theme-home-page). |
| [docs/team.md](docs/team.md)                   | Special [VitePress Team Page](https://vitepress.dev/reference/default-theme-team-page). |
| [docs/public](docs/public)                     | Static Root (copied to docs root).                                                      |
| [.vitepress](.vitepress)                       | VitePress Configuration Root.                                                           |
| [.vitepress/config.mts](.vitepress/config.mts) | VitePress Configuration File.                                                           |

## Development

To get started, clone the repository and run `npm i` then `npm run dev`.

```shell
npm install
npm run dev
```

The site should now be available at: http://localhost:5173/

- [VitePress CLI Reference](https://vitepress.dev/reference/cli)
- [VitePress Markdown Reference](https://vitepress.dev/guide/markdown)
