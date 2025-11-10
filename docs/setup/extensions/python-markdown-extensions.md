---
icon: lucide/package-plus
---

# Python Markdown Extensions

The [Python Markdown Extensions] package is an excellent collection of
additional extensions perfectly suited for advanced technical writing. Zensical
lists this package as an explicit dependency, so it's automatically installed
with a supported version.

  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/

## Supported extensions

In general, all extensions that are part of [Python Markdown Extensions] should
work with Zensical. The following list includes all extensions that
are natively supported, meaning they work without any further adjustments.

### Arithmatex

The [Arithmatex] extension allows for rendering of block and inline block
equations and integrates seamlessly with [MathJax][^1] – a library for
mathematical typesetting. Enable it via:

[^1]: Other libraries like [KaTeX] are also supported and can be integrated
    with some additional effort. See the [Arithmatex documentation on KaTeX]
    for further guidance, as this is beyond the scope of Zensical.

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.arithmatex]
    generic = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.arithmatex:
          generic: true
    ```

Besides enabling the extension in your configuration, a MathJax configuration and
the JavaScript runtime need to be included, which can be done with a few lines
of [additional JavaScript]:

=== "`docs/javascripts/mathjax.js`"

    ``` js
    window.MathJax = {
      tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
      },
      options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
      }
    };

    document$.subscribe(() => { // (1)!
      MathJax.startup.output.clearCache()
      MathJax.typesetClear()
      MathJax.texReset()
      MathJax.typesetPromise()
    })
    ```

    1. This integrates MathJax with [instant navigation]

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_javascript = [
        "javascripts/mathjax.js",
        "https://unpkg.com/mathjax@3/es5/tex-mml-chtml.j"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_javascript:
      - javascripts/mathjax.js
      - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js
    ```

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use
them at your own risk.

See these authoring guides for usage:

- [Using block syntax]
- [Using inline block syntax]

  [Arithmatex]: https://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/
  [Arithmatex documentation on KaTeX]: https://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/#loading-katex
  [MathJax]: https://www.mathjax.org/
  [KaTeX]: https://github.com/Khan/KaTeX
  [additional JavaScript]: ../../customization.md#additional-javascript
  [instant navigation]: ../navigation.md#instant-navigation
  [Using block syntax]: ../../authoring/math.md#use-block-syntax
  [Using inline block syntax]: ../../authoring/math.md#use-inline-block-syntax

### Caption

The [Caption] extension adds the ability to add captions to any Markdown block,
including images, tables, and code blocks. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.blocks.caption]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.blocks.caption
    ```

The configuration options of this extension are not specific to Zensical as
they only impact the Markdown parsing stage.
See the [Caption documentation][Caption] for more information.

  [Caption]: https://facelessuser.github.io/pymdown-extensions/extensions/blocks/plugins/caption/

### Caret, Mark & Tilde { #caret-mark-tilde }

The [Caret], [Mark] and [Tilde] extensions add the ability to highlight text
and define sub- and superscript using a simple syntax. Enable them together
via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.caret]
    [project.markdown_extensions.pymdownx.mark]
    [project.markdown_extensions.pymdownx.tilde]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.caret
      - pymdownx.mark
      - pymdownx.tilde
    ```

The configuration options of this extension are not specific to Zensical
as they only impact the Markdown parsing stage. See the [Caret], [Mark]
and [Tilde documentation][Tilde] for guidance.

See these authoring guides for usage:

- [Highlighting text]
- [Sub- and superscripts]

  [Caret]: https://facelessuser.github.io/pymdown-extensions/extensions/caret/
  [Mark]: https://facelessuser.github.io/pymdown-extensions/extensions/mark/
  [Tilde]: https://facelessuser.github.io/pymdown-extensions/extensions/tilde/
  [Highlighting text]: ../../authoring/formatting.md#highlight-text
  [Sub- and superscripts]: ../../authoring/formatting.md#sub-and-superscripts

### Details

The [Details] extension supercharges the [Admonition] extension, making the
resulting _call-outs_ collapsible, allowing them to be opened and closed by the
user. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.details]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.details
    ```

No configuration options are available. See this authoring guide for usage:

- [Collapsible blocks]

  [Details]: https://facelessuser.github.io/pymdown-extensions/extensions/details/
  [Admonition]: python-markdown.md#admonition
  [Collapsible blocks]: ../../authoring/admonitions.md#collapsible-blocks

### Emoji

The [Emoji] extension automatically inlines bundled and custom icons and emojis
in `*.svg` file format into the resulting HTML page. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.emoji]
    emoji_index = "zensical.extensions.emoji.twemoji" # (1)!
    emoji_generator = "zensical.extensions.emoji.to_svg"
    ```

    1.  [Python Markdown Extensions] uses the `pymdownx` namespace, but in order to
        support the inlining of icons, the `zensical` namespace must be used, as it
        extends the functionality of `pymdownx`.

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.emoji:
          emoji_index: !!python/name:zensical.extensions.emoji.twemoji # (1)!
          emoji_generator: !!python/name:zensical.extensions.emoji.to_svg
    ```

    1.  [Python Markdown Extensions] uses the `pymdownx` namespace, but in order to
        support the inlining of icons, the `zensical` namespace must be used, as it
        extends the functionality of `pymdownx`.

The following configuration options are supported:

#### `emoji_index`
This option defines which set of emojis is used for rendering. Note that the use of `emojione` is not
recommended due to [restrictions in licensing][Emoji index]:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.emoji]
    emoji_index = "zensical.extensions.emoji.twemoji"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.emoji:
          emoji_index: !!python/name:zensical.extensions.emoji.twemoji
    ```

#### `emoji_generator`

This option defines how the resolved emoji or icon shortcode is render. Note
that icons can only be used together with the `to_svg` configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.emoji]
    emoji_generator = "zensical.extensions.emoji.to_svg"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.emoji:
          emoji_generator: !!python/name:zensical.extensions.emoji.to_svg
    ```

#### `custom_icons`

This option allows to list folders with additional icon sets to be used in
Markdown or the configuration, which is explained in more detail in the
[icon customization guide]:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.emoji]
    emoji_index = "zensical.extensions.emoji.twemoji"
    emoji_generator = "zensical.extensions.emoji.to_svg"
    options.custom_icons = ["overrides/.icons"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.emoji:
          emoji_index: !!python/name:material.extensions.emoji.twemoji
          emoji_generator: !!python/name:material.extensions.emoji.to_svg
          options:
            custom_icons:
              - overrides/.icons
    ```

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use
them at your own risk.

See usage:

- [Using emojis]
- [Using icons]
- [Using icons in templates]

  [Emoji]: https://facelessuser.github.io/pymdown-extensions/extensions/emoji/
  [Emoji index]: https://facelessuser.github.io/pymdown-extensions/extensions/emoji/#default-emoji-indexes
  [icon customization guide]: ../logo-and-icons.md#additional-icons
  [Using emojis]: ../../authoring/icons-emojis.md#use-emojis
  [Using icons]: ../../authoring/icons-emojis.md#use-icons
  [Using icons in templates]: ../../authoring/icons-emojis.md#use-icons-in-templates

### Highlight

The [Highlight] extension adds support for syntax highlighting of code blocks
(with the help of [SuperFences][pymdownx.superfences]) and inline code blocks
(with the help of [InlineHilite][pymdownx.inlinehilite]). Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.highlight]
    anchor_linenums = true
    [project.markdown_extensions.pymdownx.superfences]
    ```

    1.  [Highlight] is used by the [SuperFences][pymdownx.superfences] extension to
        perform syntax highlighting on code blocks, not the other way round, which
        is why this extension also needs to be enabled.

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          anchor_linenums: true
      - pymdownx.superfences # (1)!
    ```

    1.  [Highlight] is used by the [SuperFences][pymdownx.superfences] extension to
        perform syntax highlighting on code blocks, not the other way round, which
        is why this extension also needs to be enabled.

The following configuration options are supported:

#### `pygments_lang_class`

This option instructs [Pygments] to add a CSS class to identify the language
of the code block, which is essential for custom annotation markers to
function. Enable via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    pygments_lang_class = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          pygments_lang_class: true
    ```

#### `auto_title`

This option will automatically add a [title] to all code blocks that shows
the name of the language being used, e.g. `Python` is printed for a `py` block:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    auto_title = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          auto_title: true
    ```

#### `linenums`

This option will add line numbers to _all_ code blocks. If you wish to add
line numbers to _some_, but not all code blocks, consult the section on
[adding line numbers][Adding line numbers] in the code block section,
which also contains some tips on working with line numbers:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    linenums = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          linenums: true
    ```

#### `linenums_style`

The [Highlight] extension provides three ways to add line numbers, two of
which are supported by Zensical. While `table` wraps a code block in a
`<table>` element, `pymdownx-inline` renders line numbers as part of the
line itself:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    linenums_style: pymdownx-inline
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          linenums_style: pymdownx-inline
    ```

!!! note "Avoid including line numbers in copy-and-paste"
    Note that `inline` will put line numbers next to the actual code, which
    means that they will be included when selecting text with the cursor or
    copying a code block to the clipboard. Thus, the usage of either `table`
    or `pymdownx-inline` is recommended.

#### `anchor_linenums`

If a code blocks contains line numbers, enabling this setting will wrap them
with anchor links, so they can be hyperlinked and shared more easily:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    anchor_linenums = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          anchor_linenums: true
    ```

#### `line_spans`

When this option is set, each line of a code block is wrapped in a `span`,
which is essential for features like line highlighting to work correctly:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    line_spans = "__span"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight:
          line_spans: __span
    ```

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use them at your
own risk.

See these authoring guides for usage:

- [Using code blocks]
- [Adding a title]
- [Adding line numbers]
- [Highlighting specific lines]
- [Custom syntax theme]

  [Highlight]: https://facelessuser.github.io/pymdown-extensions/extensions/highlight/
  [CodeHilite]: python-markdown.md#codehilite
  [pymdownx.superfences]: #superfences
  [pymdownx.inlinehilite]: #inlinehilite
  [Pygments]: https://pygments.org
  [additional style sheet]: ../../customization.md#additional-css
  [Highlight.js]: https://highlightjs.org/
  [title]: ../../authoring/code-blocks.md#add-a-title
  [Adding line numbers]: ../../authoring/code-blocks.md#add-line-numbers
  [Using code blocks]: ../../authoring/code-blocks.md#usage
  [Adding a title]: ../../authoring/code-blocks.md#add-a-title
  [Highlighting specific lines]: ../../authoring/code-blocks.md#highlight-specific-lines
  [Custom syntax theme]: ../../authoring/code-blocks.md#custom-syntax-theme

### InlineHilite

The [InlineHilite] extension add support for syntax highlighting of inline code
blocks. It's built on top of the [Highlight][pymdownx.highlight] extension, from
which it sources its configuration. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.highlight]
    [project.markdown_extensions.pymdownx.inlinehilite]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.highlight
      - pymdownx.inlinehilite
    ```

The configuration options of this extension are not specific to Material for
MkDocs, as they only impact the Markdown parsing stage. The only exception is
the [`css_class`][InlineHilite options] option, which must not be changed. See the
[InlineHilite documentation][InlineHilite] for guidance.

See this authoring guide for usage:

- [Highlighting inline code blocks]

  [InlineHilite]: https://facelessuser.github.io/pymdown-extensions/extensions/inlinehilite/
  [InlineHilite options]: https://facelessuser.github.io/pymdown-extensions/extensions/inlinehilite/#options
  [pymdownx.highlight]: #highlight
  [Highlighting inline code blocks]: ../../authoring/code-blocks.md#highlight-inline-code-blocks

### Keys

The [Keys] extension adds a simple syntax to allow for the rendering of keyboard
keys and combinations, e.g. ++ctrl+alt+del++. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.keys]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.keys
    ```

The configuration options of this extension are not specific to Zensical
as they only impact the Markdown parsing stage. The only exception is
the [`class`][Keys options] option, which must not be changed. See the
[Keys documentation][Keys] for more information.

See this authoring guide for usage:

- [Adding keyboard keys]

  [Keys]: https://facelessuser.github.io/pymdown-extensions/extensions/keys/
  [Keys options]: https://facelessuser.github.io/pymdown-extensions/extensions/keys/#options
  [Adding keyboard keys]: ../../authoring/formatting.md#add-keyboard-keys

### SmartSymbols

The [SmartSymbols] extension converts some sequences of characters into their
corresponding symbols, e.g. copyright symbols or fractions. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.smartsymbols]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.smartsymbols
    ```

The configuration options of this extension are not specific to Zensical as they
only impact the Markdown parsing stage. See the [SmartSymbols
documentation][SmartSymbols] for guidance.

  [SmartSymbols]: https://facelessuser.github.io/pymdown-extensions/extensions/smartsymbols/

### Snippets

The [Snippets] extension adds the ability to embed content from arbitrary files
into a document, including other documents or source files, by using a simple
syntax. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.snippets]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.snippets
    ```

The configuration options of this extension are not specific to Zensical
as they only impact the Markdown parsing stage. See the [Snippets
documentation][Snippets] for more information.

See these authoring guides for usage:

- [Adding a glossary]
- [Embedding external files]

  [Snippets]: https://facelessuser.github.io/pymdown-extensions/extensions/snippets/
  [Adding a glossary]: ../../authoring/tooltips.md#add-a-glossary
  [Embedding external files]: ../../authoring/code-blocks.md#embed-external-files

### SuperFences

The [SuperFences] extension allows for arbitrary nesting of code and content
blocks inside each other, including admonitions, tabs, lists and all other
elements. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.superfences]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences
    ```

The following configuration options are supported:

#### `custom_fences`
This option allows to define a handler for custom fences, e.g. to preserve
the definitions of [Mermaid.js] diagrams to be interpreted in the browser:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.superfences.custom_fences]
    name = "mermaid"
    class = "mermaid"
    format = "pymdownx.superfences.fence_code_format"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences:
          custom_fences:
            - name: mermaid
              class: mermaid
              format: !!python/name:pymdownx.superfences.fence_code_format
    ```

Note that this will primarily prevent syntax highlighting from being
applied. See the authoring guide for [diagrams] to learn how Mermaid.js is
integrated with Zensical.

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use
them at your own risk.

See these authoring guides for usage:

- [Using code blocks]
- [Using content tabs]
- [Using flowcharts]
- [Using sequence diagrams]
- [Using state diagrams]
- [Using class diagrams]
- [Using entity-relationship diagrams]

  [SuperFences]: https://facelessuser.github.io/pymdown-extensions/extensions/superfences/
  [Fenced Code Blocks]: python-markdown.md#fenced-code-blocks
  [Mermaid.js]: https://mermaid-js.github.io/mermaid/
  [diagrams]: ../../authoring/diagrams.md
  [Using content tabs]: ../../authoring/content-tabs.md#usage
  [Using flowcharts]: ../../authoring/diagrams.md#use-flowcharts
  [Using sequence diagrams]: ../../authoring/diagrams.md#use-sequence-diagrams
  [Using state diagrams]: ../../authoring/diagrams.md#use-state-diagrams
  [Using class diagrams]: ../../authoring/diagrams.md#use-class-diagrams
  [Using entity-relationship diagrams]: ../../authoring/diagrams.md#use-entity-relationship-diagrams

### Tabbed

The [Tabbed] extension allows the usage of content tabs, a simple way to group
related content and code blocks under accessible tabs. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed]
    alternate_style = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          alternate_style: true
    ```

The following configuration options are supported:

#### `alternate_style`

This option enables the content tabs [alternate style], which has [better
 behavior on mobile viewports], and is the only supported style:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed]
    alternate_style = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          alternate_style: true
    ```

#### `combine_header_slug`

This option enables the content tabs' `combine_header_slug` style flag, which
prepends the id of the header to the `id` of the tab:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed]
    combine_header_slug = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          combine_header_slug: true
    ```

#### `slugify`
This option allows for customization of the slug function. For some
languages, the default may not produce good and readable identifiers –
consider using another slug function like for example those from [Python
Markdown Extensions][Slugs]. To produce all-lowercase slugs:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed.slugify]
    object = "pymdownx.slugs.slugify"
    kwds = { case = "lower" }
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          slugify: !!python/object/apply:pymdownx.slugs.slugify
            kwds:
              case: lower
    ```

In order to retain the case of the input:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed.slugify]
    object = "pymdownx.slugs.slugify"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          slugify: !!python/object/apply:pymdownx.slugs.slugify {}
    ```

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use
them at your own risk.

See these authoring guides for usage:

- [Grouping code blocks]
- [Grouping other content]
- [Embedded content]

  [Tabbed]: https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/
  [alternate style]: https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#alternate-style
  [combine_header_slug style]: https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#tab-ids
  [better behavior on mobile viewports]: https://x.com/squidfunk/status/1424740370596958214
  [Grouping code blocks]: ../../authoring/content-tabs.md#group-code-blocks
  [Grouping other content]: ../../authoring/content-tabs.md#group-other-content
  [Embedded content]: ../../authoring/content-tabs.md#embed-content
  [Slugs]: https://facelessuser.github.io/pymdown-extensions/extras/slugs/

### Tasklist

The [Tasklist] extension allows for the usage of [GitHub Flavored Markdown]
inspired [task lists][Tasklist specification], following the same syntactical
conventions. Enable it via:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tasklist]
    custom_checkbox = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tasklist:
          custom_checkbox: true
    ```

The following configuration options are supported:

#### `checkbox`

This option toggles the rendering style of checkboxes, replacing native
checkbox styles with beautiful icons, and is therefore recommended:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tasklist]
    custom_checkbox = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tasklist:
          custom_checkbox: true
    ```

#### `clickable_checkbox`

This option toggles whether checkboxes are clickable. As the state is not
persisted, the use of this option is _rather discouraged_ from a user
experience perspective:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tasklist]
    clickable_checkbox = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tasklist:
          clickable_checkbox: true
    ```

The other configuration options of this extension are not officially supported
by Zensical, which is why they may yield unexpected results. Use them at your
own risk.

See this authoring guide for usage:

- [Using task lists]

  [Tasklist]: https://facelessuser.github.io/pymdown-extensions/extensions/tasklist/
  [GitHub Flavored Markdown]: https://github.github.com/gfm/
  [Tasklist specification]: https://github.github.com/gfm/#task-list-items-extension-
  [Using task lists]: ../../authoring/lists.md#use-task-lists

## Other extensions

Did not find what you are looking for? The Markdown extensions listed above are
those that we officially support. You can use other extensions and they should
work but we are not advertising their use as we believe there are better
alternatives. The `critic` extension, for example, is quite difficult to use in
projects of any significant size and we would advise users to work with Git
to track changes instead.
