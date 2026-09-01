---
icon: lucide/list-tree
tags:
  - Modules
  - Navigation
status: new
---

# Literate navigation

This page documents Zensical's native replacement for [`mkdocs-literate-nav`][mkdocs-literate-nav],
created by [Oleh Prypin].

The plugin lets you define navigation in Markdown instead of a configuration
file. It is useful when navigation is generated or maintained alongside
documentation.

## How it works

Create the root navigation file at `docs_dir/SUMMARY.md`, the default location,
and write the navigation as nested lists of links. Zensical reads those lists
to build the navigation. When the root navigation file links to a directory
with a trailing slash, that directory can define its navigation in a separate
navigation file. If a directory has no navigation file, the plugin discovers
its pages automatically.

## Configuration

Add the plugin to enable it. The following examples show the default values
explicitly:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.literate-nav]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - literate-nav
    ```

### Enable or disable

The plugin is enabled when it is configured. Set `enabled` to `false` to keep
the configuration without using literate navigation. Its default value is
`true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.literate-nav]
    enabled = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - literate-nav:
          enabled: true
    ```

### Navigation file

The default value of `nav_file` is `SUMMARY.md`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.literate-nav]
    nav_file = "SUMMARY.md"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - literate-nav:
          nav_file: SUMMARY.md
    ```

`nav_file` is resolved relative to the directory whose navigation is being
defined. With the default `docs_dir` and `nav_file`, the root navigation file
is `docs/SUMMARY.md`. If that file includes `guide/`, the plugin looks for a
separate navigation file at `docs/guide/SUMMARY.md`.

### Implicit index

By default, an `index.md` or `README.md` page must be listed explicitly in a
navigation file. The default value of `implicit_index` is `false`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.literate-nav]
    implicit_index = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - literate-nav:
          implicit_index: false
    ```

Set `implicit_index` to `true` to add the directory's preferred index page
automatically: Zensical uses `index.md`, or `README.md` when no `index.md`
exists.

## Usage

### Navigation files

Write ordinary Markdown lists in the navigation file. Links add pages to the
navigation, and nested lists create sections:

``` markdown
- [Home](index.md)
- [Getting started](getting-started.md)
- Guides
    - [Installation](guides/installation.md)
    - [Configuration](guides/configuration.md)
```

Link targets are relative to the navigation file. A link can point to an
external URL as well:

``` markdown
- [Project website](https://example.com)
```

When a section has both a link and a nested list, the linked page becomes the
first page in that section:

``` markdown
- [Guides](guides/index.md)
    - [Installation](guides/installation.md)
```

The `Guides` page is listed first, followed by `Installation`.

#### Nested navigation

To use a navigation file in a subdirectory, include that directory with a
trailing slash, for example:

``` markdown
- [Guides](guides/)
```

The plugin then looks for `guides/SUMMARY.md`. If the file exists, its list
defines the contents of the section. If it does not, the directory's pages are
discovered automatically.

The same mechanism can be used with an explicitly configured `nav`:

=== "`zensical.toml`"

    ``` toml
    [project]
    nav = [
      "index.md",
      { "Guides" = "guides/" },
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    nav:
      - index.md
      - Guides: guides/
    ```

#### Wildcards

Use a bare item containing `*` to include matching pages or directories. The
pattern is relative to the navigation file:

``` markdown
- [Getting started](getting-started.md)
- guides/*.md
- */
```

The explicit page is kept at the position where it appears. Wildcard matches
that have already been included are not added a second time. A wildcard can
also be used inside a section:

``` markdown
- API
    - api/*.md
```

### Controlling list selection

By default, the plugin uses the first suitable list in the navigation file. To
select a particular list, place `<!--nav-->` on a line of its own immediately
before it:

``` markdown
<!--nav-->
- [Home](index.md)
- [Guide](guide.md)
```

This is useful when the file contains introductory content as well as the
navigation list.

[mkdocs-literate-nav]: https://github.com/oprypin/mkdocs-literate-nav
[Oleh Prypin]: https://github.com/oprypin
