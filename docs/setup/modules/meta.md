---
icon: lucide/file-cog
tags:
  - Modules
  - Meta
status: material
---

# Meta

The meta plugin applies front matter from a metadata file to every page in
the same directory and its subdirectories. Use it to define shared tags,
templates, search settings, or other page metadata once.

## Objective

### How it works

The plugin scans the documentation directory for configured metadata files. It
combines the metadata from each file for pages in the same directory and all
nested directories.

For example, the following `.meta.yml` file adds the `Reference` tag to every
page in the directory where the file is stored and to pages in its
subdirectories:

``` yaml title=".meta.yml"
tags:
  - Reference
```

When a page has its own front matter, Zensical combines it with the metadata
from the `.meta.yml` files. Lists and mappings are merged recursively, so a
page can add to a list or override a value at any level of a mapping.

For example, a metadata file in the `reference` directory applies to the pages
in that directory and its subdirectories:

=== "`zensical.toml`"

    ``` text
    .
    ├── docs/
    │   ├── ...
    │   └── reference/
    │       ├── .meta.yml
    │       ├── overview.md
    │       └── api/
    │           └── endpoints.md
    └── zensical.toml
    ```

=== "`mkdocs.yml`"

    ``` text
    .
    ├── docs/
    │   ├── ...
    │   └── reference/
    │       ├── .meta.yml
    │       ├── overview.md
    │       └── api/
    │           └── endpoints.md
    └── mkdocs.yml
    ```

### When to use it

Use the meta plugin to apply metadata to a group of pages without repeating the
same front matter on every page.

<div class="grid cards" markdown>

-   :lucide-tags: &nbsp; **[Apply tags](#apply-tags-to-a-section)**

    ---

    Add tags to every page in a section so that new pages are categorized
    consistently, without repeating the tag in each page's front matter.
    This keeps section-wide classification in one place.

    ``` yaml title=".meta.yml"
    tags: [Reference]
    ```

-   :lucide-layout-template: &nbsp; **[Use a shared template](#use-a-shared-template)**

    ---

    Apply the same template to every page in a section, such as a group of
    reference pages, without adding the setting to each page individually.
    This keeps presentation settings consistent across the section.

    ``` yaml title=".meta.yml"
    template: section.html
    ```

-   :lucide-file-text: &nbsp; **[Set page metadata](#set-page-metadata)**

    ---

    Set titles, descriptions, icons, status values, or other front matter for
    a group of pages from one location, rather than updating each page.
    This reduces repetitive edits when the metadata changes.

    ``` yaml title=".meta.yml"
    title: Reference
    ```

-   :lucide-panel-left: &nbsp; **[Hide page elements](#hide-navigation-and-the-table-of-contents)**

    ---

    Hide the navigation sidebar or table of contents where those elements are
    not useful, such as on landing pages or pages embedded elsewhere.
    This lets a section use a simpler page layout.

    ``` yaml title=".meta.yml"
    hide: [navigation, toc]
    ```

-   :lucide-search-x: &nbsp; **[Exclude a section from search](#exclude-a-section-from-search)**

    ---

    Keep a section out of the search index when its pages are internal,
    duplicated elsewhere, or not useful in search results. This keeps search
    focused on the content intended for readers.

    ``` yaml title=".meta.yml"
    search: { exclude: true }
    ```

-   :lucide-database: &nbsp; **[Provide custom data](#provide-custom-data-to-templates)**

    ---

    Pass custom data such as authors and categories to templates for consistent
    labels, attribution, or other page-specific information.
    This makes shared template logic easier to maintain.

    ``` yaml title=".meta.yml"
    authors: [Documentation team]
    ```

</div>

Using a metadata file reduces inconsistencies when metadata changes or pages
are added. Pages outside the metadata file's directory tree are unaffected.

## Configuration

Enable the plugin:

=== "`zensical.toml`"

    ``` toml
    [project.plugins."material/meta"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - material/meta
    ```

### General

#### `enabled`

The plugin is enabled by default. Set `enabled` to `false` to disable it while
keeping its configuration:

=== "`zensical.toml`"

    ``` toml
    [project.plugins."material/meta"]
    enabled = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - material/meta:
          enabled: false
    ```

### Meta file

#### `meta_file`

The default value of `meta_file` is `.meta.yml`. Set it to another file name
when you want to use a different metadata file:

=== "`zensical.toml`"

    ``` toml
    [project.plugins."material/meta"]
    meta_file = "defaults.yml"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - material/meta:
          meta_file: defaults.yml
    ```

The plugin looks for this file name under `docs_dir`, including all
subdirectories.

## Usage

Create a metadata file in the directory where the shared values should apply:

``` yaml
tags:
  - Reference
```

If this file is `docs/reference/.meta.yml`, its values apply to pages in
`reference/` and its subdirectories. A page can add values or override an
value from the `.meta.yml` files in its own front matter.

Lists and mappings are merged across the directory hierarchy. Values with
incompatible types produce a configuration error that identifies both sources.

## Examples

Use metadata files to apply common page settings to a directory tree.

### Apply tags to a section

``` yaml
tags:
  - Reference
```

Every page below the directory containing this file receives the `Reference`
tag.

Read more: [Tags plugin].

### Use a shared template

``` yaml
template: section.html
```

Every page below the directory uses `section.html` instead of the default
`main.html` template. The template must be available in the configured
[overrides directory] or be part of a [custom theme].

Read more: [Page template].

### Set page metadata

``` yaml
title: Reference
description: Reference documentation for the project.
icon: lucide/book-open
status: new
```

These values apply to every page below the directory. See [Front matter] for
the available page metadata.

Read more: [Front matter].

### Hide navigation and the table of contents

``` yaml
hide:
  - navigation
  - toc
```

Every page below the directory hides the navigation sidebar and table of
contents. You can override these values in a page's own front matter.

Read more: [Hiding sidebars].

### Exclude a section from search

``` yaml
search:
  exclude: true
```

Pages below the directory are not added to the search index.

Read more: [Search exclusion].

### Provide custom data to templates

``` yaml
authors:
  - Documentation team
categories:
  - Reference
```

Custom metadata such as `authors` and `categories` is available through
`page.meta` in your templates.

Read more: [Using metadata in templates].

[custom theme]: ../../customization.md#packaging-themes
[Front matter]: ../../authoring/frontmatter.md
[Hiding sidebars]: ../navigation.md#hide-the-sidebars
[Page template]: ../../authoring/frontmatter.md#page-template
[overrides directory]: ../../customization.md#configuring-overrides
[Search exclusion]: ../search.md#exclude-a-section
[Tags plugin]: tags.md
[Using metadata in templates]: ../../authoring/frontmatter.md#use-in-templates
