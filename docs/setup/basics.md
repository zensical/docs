---
icon: lucide/file-sliders
tags:
  - Setup
---

# Basics

A Zensical project is configured via a `zensical.toml` file. If you create your
project using the [`new` command][new], this file will be automatically created
for you, and include an example configuration with comments describing the
available settings.

## The `project` scope

A `zensical.toml` configuration begins with a line declaring a scope for the
project:

``` toml
[project]
```

As of now, all settings are contained within this scope. As we evolve Zensical,
we will introduce additional scopes and move settings out of the `project`
scope where appropriate. Of course, we'll provide automatic refactorings, so
there's no need for manual migration.

## Settings

### `site_name`

The `site_name` is a required setting that provides the name of the site to be
included in the HTML head and in the page headers.

=== "`zensical.toml`"

    ``` toml
    [project]
    site_name = "My Zensical project"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_name: My Zensical project
    ```

### `site_url`

The `site_url` specifies the canonical URL for the site, which appears in the
HTML header and should be set unless you're building for [offline usage].

=== "`zensical.toml`"

    ``` toml
    [project]
    site_url = "https://example.com"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_url: https://example.com
    ```

### `site_description`

A `site_description` is used in the HTML head if the page itself does not
specify a [description in the page metadata]. Some search engines use this
to describe the page content.

=== "`zensical.toml`"

    ``` toml
    [project]
    site_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    ```

### `site_author`

The `site_author` setting is used in the HTML `head` element  to indicate the
author of a website.

=== "`zensical.toml`"

    ``` toml
    [project]
    site_author = "John Doe"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_author: John Doe
    ```

### `copyright`

The `copyright` setting allows you to specify a copyright notice that will be
inserted into the footer of your pages. You can specify an HTML fragment here or
just plain text.

=== "`zensical.toml`"

    ``` toml
    [project]
    copyright = "&copy; 2025 Jane Doe"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    copyright: "&copy; 2025 Jane Doe"
    ```

### `docs_dir`

The `docs_dir` setting specifies the path to the directory that contains your
source files. This must be a relative path, which is resolved relative to the
configuration file.

=== "`zensical.toml`"

    ``` toml
    [project]
    docs_dir = "docs"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    docs_dir: docs
    ```

!!! warning "`docs_dir` can't be set to `.`"

    This is a temporary limitation. We're working on increasing flexibility. As a workaround, please set `docs_dir` to a subdirectory, such as `docs`, and move your source files there. You can subscribe to the [backlog item] for this feature if you want to be notified when it's available.

### `site_dir`

The `site_dir` specifies the path to the directory your site will be written to.
This must be a relative path, which is resolved relative to the configuration
file.

=== "`zensical.toml`"

    ``` toml
    [project]
    site_dir = "site"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    site_dir: site
    ```

### `extra`

The `extra` configuration option serves as a way to store arbitrary key-value
pairs that are used by templates. If you override templates, you can use these
values to customize behavior.

=== "`zensical.toml`"

    ``` toml
    [project.extra]
    key = "value"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      key: value
    ```

### `use_directory_urls`

The `use_directory_urls` setting controls the directory structure of your
documentation site, and thereby the URL format used for linking to pages.

=== "`zensical.toml`"

    ``` toml
    [project]
    use_directory_urls = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    use_directory_urls: false
    ```

Note that this is automatically set to `false` when building for [offline usage],
so your documentation can be browsed from a local filesystem without a web
server. The default value is `true`.

=== "`true`"

    | Source file      | Generated File     | URL Format      |
    | ---------------- | ------------------ | --------------- |
    | index.md         | index.html         | /               |
    | usage.md         | usage.html         | /usage/         |
    | about/license.md | about/license.html | /about/license/ |

=== "`false`"

    | Source file      | Generated File     | URL Format          |
    | ---------------- | ------------------ | ------------------- |
    | index.md         | index.html         | /index.html         |
    | usage.md         | usage.html         | /usage.html         |
    | about/license.md | about/license.html | /about/license.html |

### `dev_addr`

When running `zensical serve`, the built-in web server binds to this address
to serve your documentation site locally. Note that you need to specify an IP
address and a port.

=== "`zensical.toml`"

    ``` toml
    [project]
    dev_addr = "localhost:3000"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    dev_addr: localhost:3000
    ```

The default `dev_addr` is `localhost:8000`.

### `watch`

Additional file or directory paths to be monitored for changes during
[preview]. Each entry is a string resolved relative to the directory containing
the configuration file. When a watched path is modified, a **full rebuild** is
triggered.

The following paths are already watched automatically, without explicit
configuration:

- All files within [`docs_dir`](#docs_dir)
- Theme files (installed themes and custom themes)
- Files from the `base_path` and `auto_append` options of the [Snippets]
  extension (`pymdownx.snippets`)
- Files from the [`module`][macros-module], [`modules`][macros-modules],
  [`include_yaml`][macros-include_yaml], [`include_dir`][macros-include_dir]
  options of the [Macros] extension (`zensical.extensions.macros`)
- Files from the `paths` option of the [mkdocstrings] compatibility extension

=== "`zensical.toml`"

    ``` toml
    [project]
    watch = [
      "data.csv",
      "fragments",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    watch:
      - data.csv
      - fragments
    ```

[backlog item]: https://github.com/zensical/backlog/issues/101
[description in the page metadata]: ../authoring/frontmatter.md
[Macros]: ../compatibility/mkdocs/plugins.md#macros
[macros-include_dir]: ../compatibility/mkdocs/plugins.md#macros
[macros-include_yaml]: ../compatibility/mkdocs/plugins.md#macros
[macros-module]: ../compatibility/mkdocs/plugins.md#macros
[macros-modules]: ../compatibility/mkdocs/plugins.md#macros
[mkdocstrings]: ../compatibility/mkdocs/plugins.md#mkdocstrings
[new]: ../usage/new.md
[offline usage]: offline.md
[preview]: ../usage/preview.md
[Snippets]: ../compatibility/markdown/python-markdown-extensions.md#snippets
