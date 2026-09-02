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

[Awesome-nav]: awesome-nav.md
[404 pages]: ../../customization.md#custom-error-pages
[Abbreviations]: ../../authoring/tooltips.md#add-abbreviations
[Admonitions]: ../../authoring/admonitions.md
[Annotations]: ../../authoring/code-blocks.md#add-annotations
[Attribute lists]: python-markdown.md#attribute-lists
[Backlog #1]: https://github.com/zensical/backlog/issues/1
[Backlog #4]: https://github.com/zensical/backlog/issues/4
[Backlog #5]: https://github.com/zensical/backlog/issues/5
[Backlog #8]: https://github.com/zensical/backlog/issues/8
[Backlog #12]: https://github.com/zensical/backlog/issues/12
[Backlog #13]: https://github.com/zensical/backlog/issues/13
[Backlog #14]: https://github.com/zensical/backlog/issues/14
[Backlog #15]: https://github.com/zensical/backlog/issues/15
[Backlog #16]: https://github.com/zensical/backlog/issues/16
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
[Backlog #89]: https://github.com/zensical/backlog/issues/89
[Backlog #102]: https://github.com/zensical/backlog/issues/102
[Backlog #134]: https://github.com/zensical/backlog/issues/134
[GLightbox]: glightbox.md
[Buttons]: ../../authoring/buttons.md
[Caption]: ../../authoring/images.md#image-captions
[Caret, Mark, and Tilde]: python-markdown-extensions.md#caret-mark-tilde
[Code blocks, highlighting, and copying]: ../../authoring/code-blocks.md
[Content tabs]: ../../authoring/content-tabs.md
[Critic]: python-markdown-extensions.md#other-extensions
[Data tables]: ../../authoring/data-tables.md
[Definition lists]: ../../authoring/lists.md#use-definition-lists
[Details]: python-markdown-extensions.md#details
[Diagrams with Mermaid]: ../../authoring/diagrams.md
[Directory URLs]: ../basics.md#use_directory_urls
[explicit-navigation]: ../navigation.md
[Extra CSS, JavaScript, and templates]: ../../customization.md#adding-assets
[Fonts]: ../fonts.md
[Header and footer]: ../header.md
[Hiding the sidebars]: ../navigation.md#hide-the-sidebars
[Icons, emojis, and favicon]: ../logo-and-icons.md
[Images]: ../../authoring/images.md
[Inline highlighting]: python-markdown-extensions.md#inlinehilite
[Instant loading and prefetching]: ../navigation.md#instant-navigation
[Instant previews]: ../navigation.md#instant-previews
[Jinja templates]: ../../customization.md#custom-templates
[Keys]: ../../authoring/formatting.md#add-keyboard-keys
[Link validation]: ../validation.md
[Markdown in HTML]: python-markdown.md#markdown-in-html
[Math with MathJax and KaTeX]: ../../authoring/math.md
[Navigation expansion]: ../navigation.md#navigation-expansion
[Navigation paths and breadcrumbs]: ../navigation.md#navigation-path
[Navigation pruning]: ../navigation.md#navigation-pruning
[Navigation sections]: ../navigation.md#navigation-sections
[Navigation tabs and sticky tabs]: ../navigation.md#navigation-tabs
[Page metadata]: ../../authoring/frontmatter.md
[Progress indicator]: ../navigation.md#progress-indicator
[Repository icon and link in the header]: ../repository.md
[Repository integration]: ../repository.md
[Search engine optimization]: ../basics.md#site_url
[Site analytics and feedback widget]: ../analytics.md
[Site language selector]: ../language.md#site-language-selector
[Social cards]: ../social-cards.md
[Social links]: ../footer.md#social-links
[Strict mode]: ../validation.md#strict-mode
[SuperFences]: python-markdown-extensions.md#superfences
[Table of contents and anchor following]: ../navigation.md#table-of-contents
[Table of contents integration]: ../navigation.md#table-of-contents
[Tabbed content]: ../../authoring/content-tabs.md
[Task lists]: ../../authoring/lists.md#use-task-lists
[Template overrides]: ../../customization.md#template-overrides
[Tooltips]: ../../authoring/tooltips.md
[Versioning]: ../versioning.md
[YAML page metadata]: ../../authoring/frontmatter.md
[Anchor tracking]: ../navigation.md#anchor-tracking
[Automatic light and dark mode]: ../colors.md
[Automatic navigation]: ../navigation.md
[Automatic previews]: ../navigation.md
[Assets and customization]: ../../customization.md
[Back-to-top button]: ../navigation.md#back-to-top-button
[BetterEm]: python-markdown-extensions.md#other-extensions
[build-from-mkdocs]: ../basics.md#transition-from-mkdocs
[Built-in preview server]: ../../usage/preview.md
[Classic Material theme]: ../basics.md#theme-variant
[Colors and palette toggle]: ../colors.md#color-palette-toggle
[Comment system]: ../comment-system.md
[Compatible with the MkDocs file layout]: ../basics.md#docs_dir
[Cookie consent]: ../data-privacy.md#cookie-consent
[Content area width]: ../navigation.md#content-area-width
[Create a new site]: ../../create-your-site.md
[Custom colors and color schemes]: ../colors.md#custom-colors
[Custom cookies]: ../data-privacy.md#custom-cookies
[Data privacy]: ../data-privacy.md
[install-with-pip]: ../../get-started.md
[Keyboard shortcuts]: ../navigation.md
[Search]: ../search.md
[Tags]: tags.md
[Tag listings]: tags.md
[Tags in search]: ../search.md#search-exclusion
[Offline usage]: ../offline.md
[Table reader]: macros.md#reading-tabular-data
[Announcement bar]: ../header.md#announcement-bar
[Footnotes]: ../../authoring/footnotes.md
[Grids]: ../../authoring/grids.md
[Highlight]: python-markdown-extensions.md#highlight
[Icons and emojis]: ../logo-and-icons.md
[Python Markdown dialect]: python-markdown.md
[Snippets]: python-markdown-extensions.md#snippets
[Smart symbols]: python-markdown-extensions.md#smartsymbols
[Table of contents]: python-markdown.md#table-of-contents
[Tables]: python-markdown.md#tables
[Literate-nav]: literate-nav.md
[Macros]: macros.md
[Markdown Exec]: markdown-exec.md
[Meta]: meta.md
[Minify]: minify.md
[mike]: ../versioning.md
[mkdocstrings]: mkdocstrings.md
[Offline]: ../offline.md
[Redirects]: redirects.md
[Section index]: ../navigation.md#section-index-pages
[Section index pages]: ../navigation.md#section-index-pages
