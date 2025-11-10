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

[new]: ../usage/new.md

??? info "Why Zensical uses TOML"

    The [TOML file format] is specifically designed to be easy to scan and
    understand. We've chosen TOML over YAML, since it avoids a number of
    problems that YAML suffers from:

    * YAML uses indentation to express structure, which makes it particularly
      error prone to indentation mistakes that are hard to locate. In TOML,
      whitespace is mostly a stylistic choice.

    * In YAML, values do not need to be escaped, which can cause ambiguities if
      a value can be interpreted as different types, such as `no`, which could
      the a string or a boolean. TOML requires all strings to be quoted.

[TOML file format]: https://toml.io/

## Transition from MkDocs

To ease transition from [Material for MkDocs], Zensical can natively read
`mkdocs.yml` configuration files. However, we recommend that new projects use
`zensical.toml` files. This documentation lists configuration options for
both configuration file formats in content tabs.

???+ note "Why we support `mkdocs.yml`"

    Since Zensical is built by the creators of Material for MkDocs, we support
    configuration via `mkdocs.yml` files as a transition mechanism to make
    migration to Zensical smooth for users that have existing projects. Support
    for configuration with `mkdocs.yml` will always be supported, but
    eventually move out of the core.

[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/

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

## Theme variant

Zensical comes with two theme variants: `modern` and `classic`, with `modern`
being the default – you're looking at it right now. The `classic` theme exactly
matches the look and feel of Material for MkDocs, while the `modern` theme
provides a fresh new design.

In case you're coming from [Material for MkDocs] and want to keep its look and
feel, or customize your site based on its appearance, you can switch to the
`classic` theme variant:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    variant = "classic"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      variant: classic
    ```

!!! note "Customization"

    The HTML structure of Zensical matches that of Material for MkDocs in both
    theme variants. This means that your existing customizations with CSS and
    JavaScript should work with either theme variant. However, there may be
    circumstances where customizations do not yield the desired results.

    In that case we recommend switching to the `classic` variant.

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

  [offline usage]: offline.md

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

[description in the page metadata]: ../authoring/frontmatter.md

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

    Source file      | Generated File     | URL Format
    ---------------- | ------------------ | -------------------
    index.md         | index.html         | /
    usage.md         | usage.html         | /usage/
    about/license.md | about/license.html | /about/license/

=== "`false`"

    Source file      | Generated File     | URL Format
    ---------------- | ------------------ | -------------------
    index.md         | index.html         | /index.html
    usage.md         | usage.html         | /usage.html
    about/license.md | about/license.html | /about/license.html

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
