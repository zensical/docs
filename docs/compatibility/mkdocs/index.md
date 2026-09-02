---
tags:
  - Compatibility
  - MkDocs
  - Material for MkDocs
---

# MkDocs

Zensical is built by the team behind [Material for MkDocs]. Compatibility is a
core priority.

Zensical can build existing MkDocs projects without requiring changes: It
supports `mkdocs.yml`, preserves the standard project layout, renders Python
Markdown content, and recognizes the configuration of supported MkDocs plugins.

## Compatibility

- [x] **Configuration and structure:** your existing `mkdocs.yml` configuration
  and [almost all settings], including `nav`, `theme`, `extra`, `plugins`, are
  supported without changes.
- [x] **Markdown:** [Python Markdown], [Python Markdown Extensions], and the most
  popular third-party Markdown extensions can be used without changes.
- [x] **Material for MkDocs:** Zensical supports the complete settings surface and
  provides a [`classic` theme][classic theme] variant that preserves the look
  of Material for MkDocs.
- [x] **Customization:** [additional CSS] and [JavaScript] work without changes when using the `classic` theme. Template overrides [rarely need changes].
- [x] **MkDocs plugins:** The Zensical team works on providing a growing list of
  [plugin replacements] for the most popular MkDocs and Material for MkDocs plugins.
- [x] **Commands:** Zensical uses the same shape as MkDocs with its
  [`build`][build] and [`serve`][serve] commands, with a small number of differences.

## Try Zensical

Moving an existing MkDocs project generally requires little or no configuration
changes. Use these guides to check compatibility and verify your site before
switching to Zensical:

<div class="grid cards" markdown>

-   :lucide-route: &nbsp; [Migrate from MkDocs]

    ---

    Review the configuration, command-line, theme, and template differences
    that matter when moving an existing project.

-   :lucide-blocks: &nbsp; [MkDocs plugin support][MkDocs plugins]

    ---

    Find supported plugin replacements, installation requirements, and
    Zensical-specific caveats.

-   :lucide-package: &nbsp; [Python Markdown][Python Markdown]

    ---

    Consult the complete Python Markdown reference to learn about the supported syntax, extensions, and settings.

-   :lucide-hammer: &nbsp; [Build your site][build]

    ---

    Build and review a prototype or copy of your site before switching to Zensical in production.

</div>

[additional CSS]: ../../customization.md#additional-css
[almost all settings]: migration.md#unsupported-settings
[build]: ../../usage/build.md
[classic theme]: migration.md#theme-variant
[JavaScript]: ../../customization.md#additional-javascript
[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/
[Migrate from MkDocs]: migration.md
[MkDocs plugins]: plugins.md
[plugin replacements]: plugins.md
[Python Markdown]: ../markdown/python-markdown.md
[Python Markdown Extensions]: ../markdown/python-markdown-extensions.md
[rarely need changes]: migration.md#templates-and-overrides
[serve]: ../../usage/preview.md
