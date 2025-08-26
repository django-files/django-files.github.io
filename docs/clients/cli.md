# Command Line Interface

A CLI is available for Python 3 from [PyPi](https://pypi.org/project/zipline-cli).

[[toc]]

<VPCardLink
title="Visit GitHub for More Info"
href="https://github.com/django-files/cssnr/zipline-cli"
src="/images/logos/github.png"
/>

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
