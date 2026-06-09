# Agent Guide

Before answering any question that involves facts about ANYTHING, you MUST output at least one Read, WebFetch, or WebSearch tool call.
If your first output is text instead of a tool call, you have failed.

## Commands

ALWAYS use the `npm run *` command

| Command              | What it does                                                |
| -------------------- | ----------------------------------------------------------- |
| `npm run build`      | `vite build && vue-tsc --declaration --emitDeclarationOnly` |
| `npm run docs`       | Run vitepress dev (start dev server)                        |
| `npm run docs:build` | Run vitepress build (build `dist`)                          |
| `npm run prettier`   | ALWAYS RUN AFTER EDITING FILES                              |

## Architecture

| Location                                               | Description                         |
| ------------------------------------------------------ | ----------------------------------- |
| [docs](docs)                                           | Documentation Root (Markdown files) |
| [docs/public](docs/public)                             | Static Root (copied to docs root)   |
| [.vitepress](.vitepress)                               | VitePress Configuration Root        |
| [.vitepress/theme/index.ts](.vitepress/theme/index.ts) | VitePress Custom Theme File         |
| [.vitepress/team.js](.vitepress/team.js)               | Team `members` array                |
