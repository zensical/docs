---
icon: lucide/message-square-more
tags:
  - Authoring
  - Information architecture
---

# Tooltips

Technical documentation often incurs the usage of many acronyms, which may
need additional explanation, especially for new user of your project. For these
matters, Zensical uses a combination of Markdown extensions to enable site-wide
glossaries.

## Configuration

This configuration enables abbreviations and allows to build a simple
project-wide glossary, sourcing definitions from a central location. Add the
following line to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    abbr = {}
    attr_list = {}
    pymdownx.snippets = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - abbr
      - attr_list
      - pymdownx.snippets
    ```

See additional configuration options:

- [Abbreviations]
- [Attribute Lists]
- [Snippets]

### Improved tooltips

When improved tooltips are enabled, Zensical replaces the browser's rendering
logic for `title` attribute with beautiful little tooltips.  Add the following
lines to your configuration::

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
      "content.tooltips",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - content.tooltips
    ```

Now, tooltips will be rendered for the following elements:

- **Content** – elements with a `title`, permalinks and code copy button
- **Header** – home button, header title, color palette switch and repository link
- **Navigation** – links that are shortened with ellipsis, i.e. `...`

## Usage

### Add a tooltip

The [Markdown syntax] allows to specify a `title` for each link, which will
render as a beautiful tooltip when [improved tooltips] are enabled. Add a
tooltip to a link with the following lines:

``` markdown title="Link with tooltip, inline syntax"
[Hover me](https://example.com "I'm a tooltip!")
```

<div class="result" markdown>

[Hover me](https://example.com "I'm a tooltip!")

</div>

Tooltips can also be added to link references:

``` markdown title="Link with tooltip, reference syntax"
[Hover me][example]

[example]: https://example.com "I'm a tooltip!"
```

<div class="result" markdown>

[Hover me](https://example.com "I'm a tooltip!")

</div>

For all other elements, a `title` can be added by using the [Attribute Lists]
extension:

``` markdown title="Icon with tooltip"
:material-information-outline:{ title="Important information" }
```

<div class="result" markdown>

:material-information-outline:{ title="Important information" }

</div>

### Add abbreviations

Abbreviations can be defined by using a special syntax similar to URLs and
[footnotes], starting with a `*` and immediately followed by the term or
acronym to be associated in square brackets:

``` markdown title="Text with abbreviations"
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```

<div class="result" markdown>

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

</div>

### Add a glossary

The [Snippets] extension can be used to implement a simple glossary by moving
all abbreviations in a dedicated file[^1], and [auto-append] this file to all
pages with the following configuration:

=== "`includes/abbreviations.md`"

    ``` markdown
    *[HTML]: Hyper Text Markup Language
    *[W3C]: World Wide Web Consortium
    ```

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    pymdownx.snippets.auto_append = [
      "includes/abbreviations.md",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.snippets:
          auto_append:
            - includes/abbreviations.md
    ```

[^1]: It's highly recommended to put the Markdown file containing the abbreviations outside of the `docs` folder (here, a folder with the name `includes` is used), as Zensical might otherwise complain about a file that is not referenced.

[Abbreviations]: ../compatibility/markdown/python-markdown.md#abbreviations
[Attribute Lists]: ../compatibility/markdown/python-markdown.md#attribute-lists
[auto-append]: https://facelessuser.github.io/pymdown-extensions/extensions/snippets/#auto-append-snippets
[footnotes]: footnotes.md
[improved tooltips]: #improved-tooltips
[Markdown syntax]: https://daringfireball.net/projects/markdown/syntax#link
[Snippets]: ../compatibility/markdown/python-markdown-extensions.md#snippets
