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

### `exclude_docs`

Files matched by `exclude_docs` are excluded from both [`zensical build`][build] and [`zensical serve`][preview]. [File pattern syntax](#file-patterns) is supported. The patterns are applied to Markdown pages and other files within [`docs_dir`](#docs_dir), including images and other assets.

=== "`zensical.toml`"

    ``` toml
    [project]
    exclude_docs = """
    /private/
    *.tmp
    """
    ```

=== "`mkdocs.yml`"

    ``` yaml
    exclude_docs: |
      /private/
      *.tmp
    ```

Dotfiles, files inside dot directories, and the top-level `templates/` directory are excluded by default. These default patterns are applied before the configured patterns. Default exclusions can be reversed with `!`:

=== "`zensical.toml`"

    ``` toml
    [project]
    exclude_docs = """
    !.*
    !/templates/
    """
    ```

=== "`mkdocs.yml`"

    ``` yaml
    exclude_docs: |
      !.*
      !/templates/
    ```

Files matched by `exclude_docs` are excluded even when matched by [`draft_docs`](#draft_docs) or [`not_in_nav`](#not_in_nav).

### `draft_docs`

Files matched by `draft_docs` are excluded from [`zensical build`][build] but included during [`zensical serve`][preview]. [File pattern syntax](#file-patterns) is supported. No files are marked as drafts by default.

=== "`zensical.toml`"

    ``` toml
    [project]
    draft_docs = """
    /drafts/
    *.draft.md
    """
    ```

=== "`mkdocs.yml`"

    ``` yaml
    draft_docs: |
      /drafts/
      *.draft.md
    ```

During preview, a draft notice is added to draft pages. Draft pages are omitted from the default, automatically generated navigation, even during preview. They can be opened by URL or added to an explicit [`nav`][explicit navigation] for preview.

Patterns are also applied to assets within `docs_dir`. Assets required only by draft pages can be matched by `draft_docs` to exclude them from builds.

### `not_in_nav`

Pages matched by `not_in_nav` are omitted from the default, automatically generated navigation. These pages are still built and included in search and the sitemap. [File pattern syntax](#file-patterns) is supported. No pages are omitted by this setting by default.

=== "`zensical.toml`"

    ``` toml
    [project]
    not_in_nav = """
    /internal/
    changelog.md
    """
    ```

=== "`mkdocs.yml`"

    ``` yaml
    not_in_nav: |
      /internal/
      changelog.md
    ```

Matched pages can still be included in an explicit [`nav`][explicit navigation]. The setting is not applied to navigation generated by [`awesome-nav`][awesome-nav].

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

!!! warning "Symbolic links"

    Zensical follows symbolic links only when their targets are inside a watched
    directory. This prevents a project from accessing files outside the paths it
    is configured to monitor. To use a target elsewhere, add its containing
    directory to `watch`. Support for [targets outside watched directories] is tracked in our backlog.

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

## File patterns

The [`exclude_docs`](#exclude_docs), [`draft_docs`](#draft_docs), and [`not_in_nav`](#not_in_nav) settings must be configured as strings, with one pattern per line. `.gitignore` syntax is supported, and paths are resolved relative to [`docs_dir`](#docs_dir):

- A leading `/` is used to anchor a pattern to `docs_dir`: only `/private.md` at the root is matched.
- A name without `/` is matched at any depth: `guides/private.md` is also matched by `private.md`.
- A trailing `/` is used to match a directory and its contents: draft directories at any depth are matched by `drafts/`.
- Wildcards are supported: Markdown files are matched by `*.md`, and Markdown files throughout `guides/` are matched by `guides/**/*.md`.
- A leading `!` is used to reverse a previous match: `drafts/keep.md` is restored by `!drafts/keep.md` after `drafts/`.
- Blank lines and lines beginning with `#` are ignored. A literal leading `#` or `!` must be escaped with `\`.

Patterns are evaluated in order, and the last matching pattern is used. Negation is applied only within the same setting. For example, an `exclude_docs` match cannot be reversed by a negated `not_in_nav` pattern.

[awesome-nav]: ../compatibility/mkdocs/plugins.md#awesome-nav
[backlog item]: https://github.com/zensical/backlog/issues/101
[build]: ../usage/build.md
[description in the page metadata]: ../authoring/frontmatter.md
[explicit navigation]: navigation.md#explicit-navigation
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
[symbolic link for `site_dir`]: https://github.com/zensical/backlog/issues/71
[targets outside watched directories]: https://github.com/zensical/backlog/issues/55
