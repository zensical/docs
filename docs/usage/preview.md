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

## Reverse proxies

To preview a site through a reverse proxy, allow the URL used by the browser:

``` sh
zensical serve --external-origin https://docs.example.com
```

Specify the scheme (`http` or `https`), hostname, and port if needed, without a
path. Repeat `--external-origin` to allow more than one URL. No external URLs are
allowed by default.

The proxy must forward the browser's `Host` and WebSocket `Origin` headers and
support WebSocket upgrades for live reload. It connects to Zensical over HTTP;
HTTPS terminates at the proxy. If the proxy can reach Zensical on loopback, keep
the default `localhost:8000` bind address. For a proxy in another container or
on another machine, bind to an address it can reach:

``` sh
zensical serve --dev-addr 0.0.0.0:8000 \
  --external-origin https://docs.example.com
```

!!! warning "Keep the preview private"

    `--external-origin` checks request hosts and browser WebSocket origins. It
    does not authenticate users or restrict client IP addresses. Restrict
    browser access at the proxy and keep the connection to Zensical private.
    In Docker, put both containers on a private network and do not publish
    Zensical's port.

### Path prefixes

If the browser opens the preview at `https://docs.example.com/preview/`, set
[`site_url`][site_url] in the configuration used for that preview:

=== "`zensical.toml`"

    ``` toml
    [project]
    site_url = "https://docs.example.com/preview/"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_url: https://docs.example.com/preview/
    ```

Pass `--external-origin https://docs.example.com` without `/preview/`. The
proxy must forward the `/preview/` path unchanged, because Zensical uses the
path in `site_url` for serving.

## Options

The `serve` command accepts the following options:

| Option                    | Short | Description                                   |
| ------------------------- | ----- | --------------------------------------------- |
| `--config-file`           | `-f`  | Path to the config file to use.               |
| `--open`                  | `-o`  | Open preview in default browser               |
| `--dev-addr <IP:PORT>`    | `-a`  | IP address and port (default: localhost:8000) |
| `--external-origin`        |       | Allow a proxy URL for preview (repeatable).   |
| `--help`                  |       | Show a help message and exit.                 |

[draft_docs]: ../setup/basics.md#draft_docs
[exclude_docs]: ../setup/basics.md#exclude_docs
[live preview]: http://localhost:8000
[site_url]: ../setup/basics.md#site_url
