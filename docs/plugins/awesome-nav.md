---
icon: lucide/waypoints
tags:
  - Plugins
  - Navigation
---

# Awesome navigation

This page documents Zensical's native replacement for [`awesome-nav`][mkdocs-awesome-nav],
created by [Lukas Geiter].

The plugin lets you adjust the navigation using small `.nav.yml` files placed
in the documentation tree next to your content. It combines automatic
navigation based on the directory structure with individually listed pages,
sections, links, patterns, sorting, and visibility controls.

## How it works

Place a `.nav.yml` file in the documentation tree and use it to describe or
adjust the navigation for that directory. Zensical reads `docs/.nav.yml` for
the root navigation and `.nav.yml` files in child directories for those
directories. A parent directory's settings apply to its children unless a
child configuration overrides them.

When enabled, the plugin takes ownership of navigation and replaces the `nav`
setting from `mkdocs.yml`. If no navigation is specified in a `.nav.yml`, the
plugin builds a navigation from the directory structure, placing index pages
first and grouping pages in directories into sections.

## Configuration

Add the plugin to enable it. The following subsections show the default values
explicitly:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.awesome-nav]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - awesome-nav
    ```

### Enable or disable

The plugin is enabled when it is configured. Set `enabled` to `false` to keep
the configuration without using the plugin. Its default value is
`true`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.awesome-nav]
    enabled = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - awesome-nav:
          enabled: true
    ```

### Navigation file

The default value of `filename` is `.nav.yml`. Zensical looks for this file
inside each directory in the documentation tree:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.awesome-nav]
    filename = ".nav.yml"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - awesome-nav:
          filename: .nav.yml
    ```

Edit the `filename` value in these examples to change the name of the
navigation files.

!!! warning "Limitations"

    Extglob expressions such as `@(one|two).md`, `?(pattern)`, and
    `!(pattern)` are not supported. MkDocs' `not_in_nav` setting is not
    currently supported.

## Custom navigation

Create `docs/.nav.yml` to control the root navigation. The `nav` option uses
the same basic structure as the `nav` setting in a `mkdocs.yml` file:

``` yaml
nav:
  - index.md
  - Guides:
      - guides/installation.md
      - guides/configuration.md
```

### Pages and directories

Paths in `nav` are relative to the directory containing the `.nav.yml` file.
List a path to a Markdown file to add a page. Map a title to the path to give
the page a custom title:

``` yaml
nav:
  - guides/installation.md
  - Setup: guides/configuration.md
```

List a directory to add its contents as a section. A title can override the
directory name. A title in `nav` takes precedence over a `title` set in the
directory's `.nav.yml` file:

``` yaml
nav:
  - guides
  - Reference: reference
```

### Sections and links

Use a mapping with a list as its value to create a section that does not
correspond to a directory:

``` yaml
nav:
  - Resources:
      - changelog.md
      - Website: https://example.com
```

A URL with a scheme, including `https://` and `mailto:`, is treated as an
external link.

You can also use a relative URL, such as `../`, when you need a link outside
the documentation tree. This avoids hard-coding an absolute URL:

``` yaml
nav:
  - Project repository: ../
```

## Patterns

Use a `glob` entry to add all matching pages or directories. Patterns are
relative to the `.nav.yml` file. Use `*` to match items in the current directory
and `**` to include items in nested directories:

``` yaml
nav:
  - glob: "*.md"
  - glob: "guides/**"
```

Patterns do not add an item that is already present in the navigation. This
makes it possible to list important pages explicitly and then use a pattern to
fill in the rest.

A pattern can also set `ignore`, `ignore_no_matches`, `sort`,
`flatten_single_child_sections`, `preserve_directory_names`, and
`append_unmatched`:

``` yaml
nav:
  - glob: "*.md"
    flatten_single_child_sections: true
    preserve_directory_names: true
    ignore:
      - "draft.*.md"
    ignore_no_matches: true
    append_unmatched: true
    sort:
      by: filename
      type: natural
```

Set `ignore_no_matches` to `true` to suppress the diagnostic for a pattern that
matches no pages or directories. Patterns that start with `*` must be quoted
in YAML.

## Directory options

The following options can be set in a `.nav.yml` file. The layout, sorting,
ignore, and unmatched-page options apply to child directories unless overridden.
`title` and `hide` apply only to the current directory:

`title`
: Set the title of a directory section. A title has no effect in the root
  configuration.

`hide`
: Remove a directory and its children from the navigation when a parent pattern
  discovers it. The pages are still built and accessible by URL. It has no
  effect in the root configuration.

`flatten_single_child_sections`
: Remove a section when it contains only one page or section.

`preserve_directory_names`
: Use directory names as section titles without converting them to display
  titles.

`use_index_title`
: Use the metadata title from a directory's `index.md` as its section title.
  Zensical uses this title only when no title is provided by the parent `nav`
  or the current `.nav.yml`, and `preserve_directory_names` is `false`.

`ignore`
: Accept a single pattern or a list of patterns to exclude pages or directories
  during pattern expansion. Ignore patterns use the same glob syntax as
  navigation patterns. A pattern that does not begin with `/` is relative to
  the current directory and matches descendants. Use `$inherit` to retain the
  parent directory's ignore patterns.

`append_unmatched`
: Add pages and directories not otherwise included in `nav` to the end of the
  navigation. Its default is `false`. The setting also applies to child
  directories unless a child `.nav.yml` overrides it.

For example, a child directory's `.nav.yml` file could contain:

``` yaml
preserve_directory_names: true
flatten_single_child_sections: true
ignore:
  - "$inherit"
  - "*.draft.md"
append_unmatched: true
```

For more extensive examples, see the [upstream awesome-nav documentation].

## Sorting

Use `sort` to control the order of pages and sections that are not explicitly
ordered in `nav`. Sorting settings are inherited by child directories.

``` yaml
sort:
  by: title
  direction: asc
  type: natural
  sections: last
  ignore_case: true
```

The available values are:

`by`
: Sort by `path`, `filename`, or `title`. The default is `path`.

`direction`
: Sort in ascending (`asc`, the default) or descending (`desc`) order.

`type`
: Use natural sorting (`natural`, the default) or alphabetical sorting
  (`alphabetical`). Natural sorting places `page2.md` before `page10.md`.

`sections`
: Place sections `first`, `last` (the default), or `mixed` with pages.

`ignore_case`
: Ignore letter case while sorting. The default is `false`.

## Unmatched pages

Pages that are not included by `nav` or a pattern are still built and
accessible by URL, but they do not appear in the navigation. Set
`append_unmatched` to `true` to add them at the end:

``` yaml
append_unmatched: true
nav:
  - index.md
  - guides
```

## Diagnostics

By default, the plugin reports the following conditions as warnings:

- a root `nav` configuration is being replaced;
- `title` or `hide` is set at the root, where it has no effect;
- a pattern matches no files or directories.

Use `logs` to set each diagnostic level to `info`, `warning`, or `error`:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.awesome-nav.logs]
    nav_override = "info"
    root_title = "warning"
    root_hide = "warning"
    no_matches = "error"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - awesome-nav:
          logs:
            nav_override: info
            root_title: warning
            root_hide: warning
            no_matches: error
    ```

In a strict build, warnings cause the build to fail. An `info` diagnostic does
not.

[upstream awesome-nav documentation]: https://lukasgeiter.github.io/mkdocs-awesome-nav/features/nav/
[mkdocs-awesome-nav]: https://github.com/lukasgeiter/mkdocs-awesome-nav
[Lukas Geiter]: https://github.com/lukasgeiter
