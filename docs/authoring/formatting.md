---
icon: lucide/letter-text
tags:
  - Authoring
---

# Formatting

Zensical provides support for several HTML elements that can be used to
highlight sections of a document or apply specific formatting.

## Configuration

This configuration enables support for keyboard keys, defining sub- and
superscript and highlighting text. Add the following lines to your
configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    pymdownx.caret = {}
    pymdownx.keys = {}
    pymdownx.mark = {}
    pymdownx.tilde = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.caret
      - pymdownx.keys
      - pymdownx.mark
      - pymdownx.tilde
    ```

See additional configuration options:

- [Caret, Mark & Tilde]
- [Keys]

## Usage

### Highlight text

When [Caret, Mark & Tilde] are enabled, text can be highlighted with a simple
syntax, which is more convenient that directly using the corresponding
[`mark`][mark], [`ins`][ins] and [`del`][del] HTML tags:

``` title="Text with highlighting"
- ==This was marked (highlight)==
- ^^This was inserted (underline)^^
- ~~This was deleted (strikethrough)~~
```

<div class="result" markdown>

- ==This was marked (highlight)==
- ^^This was inserted (underline)^^
- ~~This was deleted (strikethrough)~~

</div>

### Sub- and superscripts { #sub-and-superscripts }

When [Caret & Tilde][Caret, Mark & Tilde] are enabled, text can be sub- and
superscripted with a simple syntax, which is more convenient than directly
using the corresponding [`sub`][sub] and [`sup`][sup] HTML tags:

``` markdown title="Text with sub- and superscripts"
- H~2~O
- A^T^A
```

<div class="result" markdown>

- H~2~O
- A^T^A

</div>

### Add keyboard keys

When [Keys] is enabled, keyboard keys can be rendered with a simple syntax.
Consult the [Python Markdown Extensions] documentation to learn about all
available shortcodes:

``` markdown title="Keyboard keys"
++ctrl+alt+del++
```

<div class="result" markdown>

++ctrl+alt+del++

</div>

---

[Caret, Mark & Tilde]: ../compatibility/markdown/python-markdown-extensions.md#caret-mark-tilde
[del]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
[ins]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
[Keys]: ../compatibility/markdown/python-markdown-extensions.md#keys
[mark]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
[Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/extensions/keys/#extendingmodifying-key-map-index
[sub]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
[sup]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
