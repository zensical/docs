---
icon: lucide/forward
tags:
  - Modules
  - Redirects
status: new
---

# Redirects

This page documents Zensical's native replacement for [`mkdocs-redirects`][mkdocs-redirects].
The plugin was originally developed by [DataRobot], transferred to
the MkDocs organization in 2019, and has since been primarily maintained by
Dustin Burke ([`@burkestar`][burkestar]).

The redirects plugin keeps old documentation links working after you move or
rename a page.

## How it works

For each valid mapping, Zensical generates a static HTML page at the old
location. The page redirects the browser with JavaScript and provides a
`<meta http-equiv="refresh">` fallback. The JavaScript also preserves URL
fragments, such as `#installation`, when sending visitors to the new location.
Because the redirect is a static file, it works on static hosting without
server-side redirect configuration.

## Configuration

Add source-to-target mappings to `redirect_maps`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.redirects]

    [project.plugins.redirects.redirect_maps]
    "old.md" = "new.md"
    "legacy/topic.md" = "guide/topic.md#details"
    "external.md" = "https://example.com/new"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - redirects:
          redirect_maps:
            old.md: new.md
            legacy/topic.md: guide/topic.md#details
            external.md: https://example.com/new
    ```

The source key must be the old Markdown source path relative to `docs_dir`. The
corresponding source file must no longer be present: use the path it had before
it was moved or renamed, not its generated HTML path. The following Markdown
suffixes are recognized: `.md`, `.markdown`, `.mdown`, `.mkdn`, and `.mkd`.

The source must be a safe relative path. Empty, absolute, parent-traversing,
backslash-containing, and invalid paths cause a configuration error. A source
with another suffix produces a warning; during a strict build, that warning
fails the build.

Targets beginning with `http://` or `https://` are treated as external URLs.
All other targets are treated as Markdown source paths relative to `docs_dir`.
Zensical resolves internal targets to the generated site URL and preserves
fragments.

Set `enabled` to `false` to keep redirect mappings in the configuration without
generating redirect files:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.redirects]
    enabled = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - redirects:
          enabled: false
    ```

### Directory URLs

The plugin follows [`use_directory_urls`][use_directory_urls]. With directory
URLs enabled, a mapping such as:

```yaml
old.md: new.md
```

generates `old/index.html` and redirects to `../new/`. Other Markdown paths
follow the same rule: index pages use `index.html` in their directory, while
other pages use a directory named after the page.

With directory URLs disabled, regular pages use `.html` output paths instead.
The same mapping generates `old.html` and redirects to `new.html`. Index pages
still use `index.html` in their directory.

[use_directory_urls]: ../basics.md#use_directory_urls
[mkdocs-redirects]: https://github.com/mkdocs/mkdocs-redirects
[DataRobot]: https://github.com/datarobot
[burkestar]: https://github.com/burkestar

### Validation

Zensical warns when an internal target does not exist and does not write that
redirect. During a strict build, the warning fails the build. Duplicate
redirect outputs and redirect outputs that collide with a page, asset, or
template cause a configuration error.
