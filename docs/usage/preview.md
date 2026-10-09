---
icon: lucide/eye
tags:
  - Usage
  - Authoring
---

# Preview

You can start a local web server to preview your documentation site as you write.
This allows you to view your site in a web browser without deploying it to a
remote server.

!!! warning "Use this command for preview only"

    Note that the web server that is built into Zensical is intended for preview
    purposes only. It is not designed for production deployment. We recommend to
    use a dedicated web server like nginx or Apache.

## Usage

``` sh
zensical serve [OPTIONS]
```

This starts a local web server that serves your documentation site on
[localhost:8000][live preview]. As you make changes to source files, the browser
will automatically reload the page you're on.

Files matched by [`draft_docs`][draft_docs] are included during preview, and a draft notice is added to draft pages. Draft pages are omitted from the default navigation and can be opened by URL. Files matched by [`exclude_docs`][exclude_docs] are excluded from preview.

## Options

The `serve` command accepts the following options:

| Option                    | Short | Description                                   |
| ------------------------- | ----- | --------------------------------------------- |
| `--config-file`           | `-f`  | Path to the config file to use.               |
| `--open`                  | `-o`  | Open preview in default browser               |
| `--dev-addr <IP:PORT>`    | `-a`  | IP address and port (default: localhost:8000) |
| `--help`                  |       | Show a help message and exit.                 |

[draft_docs]: ../setup/basics.md#draft_docs
[exclude_docs]: ../setup/basics.md#exclude_docs
[live preview]: http://localhost:8000
