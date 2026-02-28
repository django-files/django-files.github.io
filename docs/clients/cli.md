---
next:
  text: 'Documentation'
  link: '/docs/'
---

# Command Line Interface

A CLI is available for Python 3 from [PyPi](https://pypi.org/project/zipline-cli).

[[toc]]

<VPCardLink
title="Visit GitHub for More Info"
href="https://github.com/django-files/cssnr/zipline-cli"
src="/images/logos/github.png"
/>

::: warning :warning: New CLI Available

A new CLI is available and supports any ShareX server.  
For more details visit: <https://cssnr.github.io/sharex-cli/>  
Additionally, this is being re-written in GoLang to remove the Python dependency.

:::

## Install

The easiest way to install is with `pip`.

```shell
python -m pip install zipline-cli
```

Alternatively, you can install from source.

```shell
git clone https://github.com/cssnr/zipline-cli.git
python3 -m pip install -e zipline-cli
```

## Setup

To configure the CLI run the `setup` command.

```shell
zipline-cli setup
```

This will interactively prompt you for server details and store them in your home directory.
