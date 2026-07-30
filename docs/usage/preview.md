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

## Options

The `serve` command accepts the following options:

| Option                     | Short | Description                                   |
| -------------------------- | ----- | --------------------------------------------- |
| --config-file              | -f    | Path to the config file to use.               |
| --open                     | -o    | Open preview in default browser               |
| --dev-addr &lt;IP:PORT&gt; | -a    | IP address and port (default: localhost:8000) |
| --help                     |       | Show a help message and exit.                 |

[live preview]: http://localhost:8000
