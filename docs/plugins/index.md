---
tags:
  - Plugins
---

# Plugins

Zensical provides native replacements for selected MkDocs plugins. These
modules independently implement the supported plugin behavior without
executing, embedding, or depending on the original plugin code. Native plugin
replacements preserve supported MkDocs behavior while using Zensical’s
differential architecture for faster, more resource-efficient builds.

These plugins run as part of Zensical's build workflow and do not require
separate Python packages.

Configure plugins in the `[project.plugins]` table in `zensical.toml`.
Zensical also accepts the compatible `plugins` configuration in `mkdocs.yml`.

## Available plugins

The following plugins are available in the current development release:

- [Metadata](meta.md) applies front matter defaults to pages in a directory tree.
- [Tags](tags.md) assigns tags to pages and creates tag listings.
- [Redirects](redirects.md) creates redirect pages for moved content.
- [Minification](minify.md) reduces the size of generated HTML, CSS, and JavaScript.
- [Literate navigation](literate-nav.md) defines navigation in Markdown files.
- [Awesome navigation](awesome-nav.md) customizes navigation with `.nav.yml` files.

These plugins preserve the configuration names used by the corresponding
Material for MkDocs or MkDocs plugins where possible. The pages in this
section describe the supported behavior and configuration.
