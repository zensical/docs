---
title: Modules
icon: lucide/blocks
tags:
  - Modules
---

# Modules

Modules add syntax and functionality to Zensical. We use this term for
its built-in functionality and its compatibility implementations. Zensical
includes these modules, but you must configure them before you can use them.

The [Feature parity] page provides the complete overview of the MkDocs plugins
that Zensical modules replace.

Zensical also installs [Python Markdown] and [Python Markdown Extensions] as
dependencies. They provide widely used collections of Markdown extensions.

## Compatibility

Zensical is designed to let existing MkDocs and Material for MkDocs projects
continue working while providing a faster, more resource-efficient build
system. Compatibility is therefore important when deciding whether Zensical
meets a project's requirements.

The compatibility modules independently implement the supported plugin behavior
without executing, embedding, or depending on the original plugin code. They
preserve supported MkDocs behavior while using Zensical's differential
architecture.

Zensical preserves the following parts of the MkDocs and Material for MkDocs
environment:

- **Build configuration**. Existing `mkdocs.yml` files can be used, and
  Zensical also supports native configuration in `zensical.toml`.
- **Content and front matter**. Existing Markdown content and page metadata can
  be used without changes.
- **Project structure and URLs**. Files remain in the same locations, and
  generated URLs and anchors remain compatible.
- **Template overrides**. Existing template overrides are supported, subject to
  the template language documented in [Customization].
- **Custom CSS and JavaScript**. Existing customizations remain compatible with
  Zensical's generated HTML and CSS variables.
- **Markdown extensions**. Python Markdown and Python Markdown Extensions are
  supported.

[Customization]: ../../customization.md
[Feature parity]: features.md
[Python Markdown]: python-markdown.md
[Python Markdown Extensions]: python-markdown-extensions.md
