---
icon: lucide/squirrel
tags:
  - Authoring
---

# Icons, Emojis

One of the best features of Zensical is the possibility to use more than 10,000
icons and thousands of emojis in your project documentation with practically
zero additional effort. Moreover, [custom icons can be added] and used in your
configuration, documents and templates.

## Configuration

This configuration enables the use of icons and emojis by using simple
shortcodes. Add the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    attr_list = {}
    pymdownx.emoji.emoji_generator = "zensical.extensions.emoji.to_svg"
    pymdownx.emoji.emoji_index = "zensical.extensions.emoji.twemoji"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - attr_list
      - pymdownx.emoji:
          emoji_generator: !!python/name:zensical.extensions.emoji.to_svg
          emoji_index: !!python/name:zensical.extensions.emoji.twemoji
    ```

See additional configuration options:

- [Attribute Lists]
- [Emoji]
- [Emoji with custom icons]

## Included icon sets

The following icon sets are bundled with Zensical (links lead to search page for
each):

- :simple-lucide: - [Lucide]
- :material-material-design: – [Material Design]
- :fontawesome-brands-font-awesome: – [FontAwesome]
- :octicons-mark-github-16: – [Octicons]
- :simple-simpleicons: – [Simple Icons]

Note that you are not limited to these icons as you can [add your own icons].

## Usage

### Use emojis

Emojis can be integrated in Markdown by putting the shortcode of the emoji
between two colons. If you're using [Twemoji] (recommended), you can look up
the shortcodes at [Emojipedia]:

``` title="Emoji"
:smile:
```

<div class="result" markdown>

:smile:

</div>

### Use icons

When [Emoji] is enabled, icons can be used similar to emojis, by referencing
a valid path to any icon bundled with the theme, which are located in the
[`.icons`][custom icons] directory, and replacing `/` with `-`:

``` title="Icon"
:fontawesome-regular-face-laugh-wink:
```

<div class="result" markdown>

:fontawesome-regular-face-laugh-wink:

</div>

#### with colors

When [Attribute Lists] is enabled, custom CSS classes can be added to icons.
While HTML allows inline styles, it's always recommended to add an
[additional style sheet] and move declarations into dedicated CSS classes:

<style>
  .youtube {
    color: #EE0F0F;
  }
</style>

=== "`docs/stylesheets/extra.css`"

    ``` css
    .youtube {
      color: #EE0F0F;
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_css = [
      "stylesheets/extra.css",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

After applying the customization, add the CSS class to the icon shortcode:

``` markdown title="Icon with color"
:fontawesome-brands-youtube:{ .youtube }
```

<div class="result" markdown>

:fontawesome-brands-youtube:{ .youtube }

</div>

#### with animations

Similar to adding [colors], it's just as easy to add [animations] to icons by
using an [additional style sheet], defining a `@keyframes` rule and adding a
dedicated CSS class to the icon:

=== "`docs/stylesheets/extra.css`"

    ``` css
    @keyframes heart {
      0%, 40%, 80%, 100% {
        transform: scale(1);
      }
      20%, 60% {
        transform: scale(1.15);
      }
    }
    .heart {
      animation: heart 1000ms infinite;
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_css = [
      "stylesheets/extra.css",
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

After applying the customization, add the CSS class to the icon shortcode:

``` markdown title="Icon with animation"
:octicons-heart-fill-24:{ .heart }
```

<div class="result" markdown>

:octicons-heart-fill-24:{ .mdx-heart }

</div>

## Customization

### Use icons in templates

When you're [extending the theme] with partials or blocks, you can simply
reference any [available icon] with Jinja's [`include`][include] function and
wrap it with the `.twemoji` CSS class:

``` html
<span class="twemoji">
  {% include ".icons/fontawesome/brands/youtube.svg" %}
</span>
```

This is exactly what Zensical does in its templates.

[add your own icons]: ../setup/logo-and-icons.md#additional-icons
[additional style sheet]: ../customization.md#additional-css
[animations]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
[Attribute Lists]: ../compatibility/markdown/python-markdown.md#attribute-lists
[available icon]: #included-icon-sets
[colors]: #with-colors
[custom icons]: https://github.com/squidfunk/mkdocs-material/tree/master/material/templates/.icons
[custom icons can be added]: ../setup/logo-and-icons.md#additional-icons
[Emoji]: ../compatibility/markdown/python-markdown-extensions.md#emoji
[Emoji with custom icons]: ../compatibility/markdown/python-markdown-extensions.md#custom_icons
[Emojipedia]: https://emojipedia.org/twitter/
[extending the theme]: ../customization.md#extending-the-theme
[FontAwesome]: https://fontawesome.com/search?m=free
[include]: https://jinja.palletsprojects.com/en/2.11.x/templates/#include
[Lucide]: https://lucide.dev/
[Material Design]: https://pictogrammers.com/library/mdi/
[Octicons]: https://octicons.github.com/
[Simple Icons]: https://simpleicons.org/
[Twemoji]: https://github.com/jdecked/twemoji
