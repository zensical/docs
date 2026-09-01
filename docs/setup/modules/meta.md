---
icon: lucide/file-cog
tags:
  - Modules
  - Metadata
status: material
---

# Metadata

The metadata plugin applies front matter from a metadata file to every page in
the same directory and its subdirectories. Use it to define shared tags,
templates, search settings, or other page metadata once. You can use it to:

- [apply tags](#apply-tags-to-a-section) to all pages in a section;
- [use a shared template](#use-a-shared-template) for a section;
- [set page metadata](#set-page-metadata) for a group of pages;
- [hide navigation or the table of contents](#hide-navigation-and-the-table-of-contents)
  for a section;
- [exclude a section from search](#exclude-a-section-from-search); and
- [provide custom data](#provide-custom-data-to-templates), such as authors or
  categories, to your templates.

Using a metadata file avoids repeating the same front matter on every page and
reduces inconsistencies when metadata changes or pages are added.

## How it works

The plugin scans the documentation directory for configured metadata files. It
combines the metadata from each file for pages in the same directory and all
nested directories.

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

## Configuration

Enable the plugin with the default `.meta.yml` file name:

=== "`zensical.toml`"

    ``` toml
    [project.plugins."material/meta"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - material/meta
    ```

To use another file name, set `meta_file`:

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

The plugin looks for this file name in the documentation directory and its
subdirectories.

The default value of `enabled` is `true`, so you normally do not need to set
it.

Set `enabled` to `false` to disable an explicitly configured plugin:

``` toml
[project.plugins."material/meta"]
enabled = false
```

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
