---
icon: lucide/list-checks
tags:
  - Compatibility
  - Features
---

<style>
  .md-typeset .mdx-columns ul {
      column-count: 2
  }
  @media screen and (max-width: 29.9844em) {
    .md-typeset .mdx-columns ul {
      columns: initial;
    }
  }
</style>

# Feature parity

The following inventory summarizes the functionality that Zensical provides for
projects moving from MkDocs and Material for MkDocs. It covers the main areas
that affect site configuration, content, appearance, navigation, and output.

## Compatibility overview

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

<div class="mdx-columns" markdown>

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

</div>

## Modules

Zensical provides compatibility with selected MkDocs plugins as Zensical
modules. Each module independently implements the supported behavior and
uses Zensical's configuration and build system. Tier 1 has the higher priority.

### Tier 1

<div class="mdx-columns" markdown>

- [x] autorefs ([Backlog #89])
- [x] [Awesome-nav] ([Backlog #12])
- [x] [GLightbox] ([Backlog #21])
- [x] [Literate-nav] ([Backlog #13])
- [x] [Macros] ([Backlog #16])
- [x] [Markdown Exec] ([Backlog #134])
- [x] [Meta] ([Backlog #31]) <span class="md-status md-status--material" title="Material for MkDocs"></span>
- [x] [mike] ([Backlog #14])
- [x] [Minify] ([Backlog #15])
- [x] [mkdocstrings] ([Backlog #4])
- [x] [Offline] ([Backlog #32])
- [x] [Redirects] ([Backlog #23])
- [x] [Search] ([Backlog #34])
- [x] [Section index] ([Backlog #20])
- [x] [Tags] ([Backlog #38]) <span class="md-status md-status--material" title="Material for MkDocs"></span>

</div>

### Tier 2

<div class="mdx-columns" markdown>

- [x] [Table reader] ([Backlog #28])
- [ ] Audio ([Backlog #102])
- [ ] Blog ([Backlog #30])
- [ ] Exclude ([Backlog #24])
- [ ] Gen files ([Backlog #8])
- [ ] Git authors ([Backlog #19])
- [ ] Git committers ([Backlog #17])
- [ ] Git revision date localized ([Backlog #18])
- [ ] Optimize ([Backlog #33])
- [ ] Privacy ([Backlog #35])
- [ ] RSS ([Backlog #27])
- [ ] Social ([Backlog #37])
- [ ] Static i18n ([Backlog #1])
- [ ] Video ([Backlog #5])

</div>

## Core features

<div class="mdx-columns" markdown>

- [x] [Install with pip install][install-with-pip]
- [x] [Create a new site]
- [x] [Build from mkdocs.yml][build-from-mkdocs]
- [x] [Built-in preview server]
- [x] [Compatible with the MkDocs file layout]
- [x] [Python Markdown dialect]
- [x] [Directory URLs]
- [x] [Jinja templates]
- [x] [YAML page metadata]
- [x] [Extra CSS, JavaScript, and templates]
- [x] [Link validation]
- [x] [Strict mode]

</div>

## Site and page structure

<div class="mdx-columns" markdown>

- [x] [Site language selector]
- [x] [Header and footer]
- [x] [Announcement bar]
- [x] [Repository icon and link in the header]
- [x] [Social links]
- [x] Copyright and generator notices
- [x] [404 pages]
- [x] [Tags]
- [x] [Tag listings]
- [x] [Tags in search]

</div>

## Appearance

<div class="mdx-columns" markdown>

- [x] [Classic Material theme]
- [x] [Assets and customization]
- [x] [Template overrides]
- [x] [Colors and palette toggle]
- [x] [Automatic light and dark mode]
- [x] [Custom colors and color schemes]
- [x] [Fonts]
- [x] [Icons, emojis, and favicon]
- [ ] Social cards

</div>

## Markdown extensions

<div class="mdx-columns" markdown>

- [x] [Abbreviations]
- [x] [Admonitions]
- [x] [Annotations]
- [x] [Attribute lists]
- [x] [BetterEm]
- [x] [Buttons]
- [x] [Caption]
- [x] [Caret, Mark, and Tilde]
- [x] [Code blocks, highlighting, and copying]
- [x] [Content tabs]
- [x] [Critic]
- [x] [Data tables]
- [x] [Definition lists]
- [x] [Details]
- [x] [Diagrams with Mermaid]
- [x] [Footnotes]
- [x] [Grids]
- [x] [Highlight]
- [x] [Icons and emojis]
- [x] [Images]
- [x] [Inline highlighting]
- [x] [Keys]
- [x] [Markdown in HTML]
- [x] [Math with MathJax and KaTeX]
- [x] [Smart symbols]
- [x] [Snippets]
- [x] [SuperFences]
- [x] [Tabbed content]
- [x] [Table of contents]
- [x] [Tables]
- [x] [Task lists]
- [x] [Tooltips]

</div>

## Content

<div class="mdx-columns" markdown>

- [x] Comment system
- [x] [Repository integration]
- [x] [Versioning]
- [ ] Blog

</div>

## Navigation

<div class="mdx-columns" markdown>

- [x] Explicit navigation in [`mkdocs.yml`][explicit-navigation]
- [x] [Instant loading and prefetching]
- [x] [Progress indicator]
- [x] [Instant previews]
- [x] [Anchor tracking]
- [x] [Navigation tabs and sticky tabs]
- [x] [Navigation sections]
- [x] [Navigation expansion]
- [x] [Navigation paths and breadcrumbs]
- [x] [Navigation pruning]
- [x] [Section index pages]
- [x] [Table of contents and anchor following]
- [x] [Table of contents integration]
- [x] [Back-to-top button]
- [x] [Hiding the sidebars]
- [x] [Keyboard shortcuts]
- [x] [Content area width]
- [x] [Automatic previews]
- [x] [Automatic navigation]
- [x] [Search]

</div>

## Optimization

<div class="mdx-columns" markdown>

- [x] [Site analytics and feedback widget]
- [x] [Cookie consent]
- [x] [Custom cookies]
- [x] [Search engine optimization]
- [x] [Offline usage]
- [ ] [Data privacy]

</div>

[404 pages]: customization.md#custom-error-pages
[Abbreviations]: authoring/tooltips.md#add-abbreviations
[Admonitions]: authoring/admonitions.md
[Anchor tracking]: setup/navigation.md#anchor-tracking
[Annotations]: authoring/code-blocks.md#add-annotations
[Announcement bar]: setup/header.md#announcement-bar
[Assets and customization]: customization.md
[Attribute lists]: setup/modules/python-markdown.md#attribute-lists
[Automatic light and dark mode]: setup/colors.md
[Automatic navigation]: setup/navigation.md
[Automatic previews]: setup/navigation.md
[Awesome-nav]: setup/modules/awesome-nav.md
[Back-to-top button]: setup/navigation.md#back-to-top-button
[Backlog #1]: https://github.com/zensical/backlog/issues/1
[Backlog #102]: https://github.com/zensical/backlog/issues/102
[Backlog #12]: https://github.com/zensical/backlog/issues/12
[Backlog #13]: https://github.com/zensical/backlog/issues/13
[Backlog #134]: https://github.com/zensical/backlog/issues/134
[Backlog #14]: https://github.com/zensical/backlog/issues/14
[Backlog #15]: https://github.com/zensical/backlog/issues/15
[Backlog #16]: https://github.com/zensical/backlog/issues/16
[Backlog #17]: https://github.com/zensical/backlog/issues/17
[Backlog #18]: https://github.com/zensical/backlog/issues/18
[Backlog #19]: https://github.com/zensical/backlog/issues/19
[Backlog #20]: https://github.com/zensical/backlog/issues/20
[Backlog #21]: https://github.com/zensical/backlog/issues/21
[Backlog #23]: https://github.com/zensical/backlog/issues/23
[Backlog #24]: https://github.com/zensical/backlog/issues/24
[Backlog #27]: https://github.com/zensical/backlog/issues/27
[Backlog #28]: https://github.com/zensical/backlog/issues/28
[Backlog #30]: https://github.com/zensical/backlog/issues/30
[Backlog #31]: https://github.com/zensical/backlog/issues/31
[Backlog #32]: https://github.com/zensical/backlog/issues/32
[Backlog #33]: https://github.com/zensical/backlog/issues/33
[Backlog #34]: https://github.com/zensical/backlog/issues/34
[Backlog #35]: https://github.com/zensical/backlog/issues/35
[Backlog #37]: https://github.com/zensical/backlog/issues/37
[Backlog #38]: https://github.com/zensical/backlog/issues/38
[Backlog #4]: https://github.com/zensical/backlog/issues/4
[Backlog #5]: https://github.com/zensical/backlog/issues/5
[Backlog #8]: https://github.com/zensical/backlog/issues/8
[Backlog #89]: https://github.com/zensical/backlog/issues/89
[BetterEm]: setup/modules/python-markdown-extensions.md#other-extensions
[build-from-mkdocs]: setup/basics.md#transition-from-mkdocs
[Built-in preview server]: usage/preview.md
[Buttons]: authoring/buttons.md
[Caption]: authoring/images.md#image-captions
[Caret, Mark, and Tilde]: setup/modules/python-markdown-extensions.md#caret-mark-tilde
[Classic Material theme]: setup/basics.md#theme-variant
[Code blocks, highlighting, and copying]: authoring/code-blocks.md
[Colors and palette toggle]: setup/colors.md#color-palette-toggle
[Compatible with the MkDocs file layout]: setup/basics.md#docs_dir
[Content area width]: setup/navigation.md#content-area-width
[Content tabs]: authoring/content-tabs.md
[Cookie consent]: setup/data-privacy.md#cookie-consent
[Create a new site]: create-your-site.md
[Critic]: setup/modules/python-markdown-extensions.md#other-extensions
[Custom colors and color schemes]: setup/colors.md#custom-colors
[Custom cookies]: setup/data-privacy.md#custom-cookies
[Customization]: customization.md
[Data privacy]: setup/data-privacy.md
[Data tables]: authoring/data-tables.md
[Definition lists]: authoring/lists.md#use-definition-lists
[Details]: setup/modules/python-markdown-extensions.md#details
[Diagrams with Mermaid]: authoring/diagrams.md
[Directory URLs]: setup/basics.md#use_directory_urls
[explicit-navigation]: setup/navigation.md
[Extra CSS, JavaScript, and templates]: customization.md#adding-assets
[Fonts]: setup/fonts.md
[Footnotes]: authoring/footnotes.md
[GLightbox]: setup/modules/glightbox.md
[Grids]: authoring/grids.md
[Header and footer]: setup/header.md
[Hiding the sidebars]: setup/navigation.md#hide-the-sidebars
[Highlight]: setup/modules/python-markdown-extensions.md#highlight
[Icons and emojis]: setup/logo-and-icons.md
[Icons, emojis, and favicon]: setup/logo-and-icons.md
[Images]: authoring/images.md
[Inline highlighting]: setup/modules/python-markdown-extensions.md#inlinehilite
[install-with-pip]: get-started.md
[Instant loading and prefetching]: setup/navigation.md#instant-navigation
[Instant previews]: setup/navigation.md#instant-previews
[Jinja templates]: customization.md#custom-templates
[Keyboard shortcuts]: setup/navigation.md
[Keys]: authoring/formatting.md#add-keyboard-keys
[Link validation]: setup/validation.md
[Literate-nav]: setup/modules/literate-nav.md
[Macros]: setup/modules/macros.md
[Markdown Exec]: setup/modules/markdown-exec.md
[Markdown in HTML]: setup/modules/python-markdown.md#markdown-in-html
[Math with MathJax and KaTeX]: authoring/math.md
[Meta]: setup/modules/meta.md
[mike]: setup/versioning.md
[Minify]: setup/modules/minify.md
[mkdocstrings]: setup/modules/mkdocstrings.md
[Navigation expansion]: setup/navigation.md#navigation-expansion
[Navigation paths and breadcrumbs]: setup/navigation.md#navigation-path
[Navigation pruning]: setup/navigation.md#navigation-pruning
[Navigation sections]: setup/navigation.md#navigation-sections
[Navigation tabs and sticky tabs]: setup/navigation.md#navigation-tabs
[Offline]: setup/offline.md
[Offline usage]: setup/offline.md
[Progress indicator]: setup/navigation.md#progress-indicator
[Python Markdown dialect]: setup/modules/python-markdown.md
[Redirects]: setup/modules/redirects.md
[Repository icon and link in the header]: setup/repository.md
[Repository integration]: setup/repository.md
[Search]: setup/search.md
[Search engine optimization]: setup/basics.md#site_url
[Section index]: setup/navigation.md#section-index-pages
[Section index pages]: setup/navigation.md#section-index-pages
[Site analytics and feedback widget]: setup/analytics.md
[Site language selector]: setup/language.md#site-language-selector
[Smart symbols]: setup/modules/python-markdown-extensions.md#smartsymbols
[Snippets]: setup/modules/python-markdown-extensions.md#snippets
[Social links]: setup/footer.md#social-links
[Strict mode]: setup/validation.md#strict-mode
[SuperFences]: setup/modules/python-markdown-extensions.md#superfences
[Tabbed content]: authoring/content-tabs.md
[Table of contents]: setup/modules/python-markdown.md#table-of-contents
[Table of contents and anchor following]: setup/navigation.md#table-of-contents
[Table of contents integration]: setup/navigation.md#table-of-contents
[Table reader]: setup/modules/macros.md#reading-tabular-data
[Tables]: setup/modules/python-markdown.md#tables
[Tag listings]: setup/modules/tags.md
[Tags]: setup/modules/tags.md
[Tags in search]: setup/search.md#search-exclusion
[Task lists]: authoring/lists.md#use-task-lists
[Template overrides]: customization.md#template-overrides
[Tooltips]: authoring/tooltips.md
[Versioning]: setup/versioning.md
[YAML page metadata]: authoring/frontmatter.md
