---
icon: lucide/image
tags:
  - Authoring
---

# Images

While images are first-class citizens of Markdown and part of the core syntax,
it can be difficult to work with them. Zensical makes working with images more
comfortable, providing styles for image alignment and image captions.

## Configuration

This configuration adds the ability to align images, add captions to images
(rendering them as figures), and mark large images for lazy-loading. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    attr_list = {}
    md_in_html = {}
    pymdownx.blocks.caption = {}
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - attr_list
      - md_in_html
      - pymdownx.blocks.caption
    ```

See additional configuration options:

- [Attribute Lists]
- [Markdown in HTML]
- [Caption]

## Usage

### Image alignment

When [Attribute Lists] is enabled, images can be aligned by adding the
respective alignment directions via the `align` attribute, i.e. `align=left` or
`align=right`:

=== "Left"

    ``` markdown title="Image, aligned to left"
    ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left }
    ```

    <div class="result" markdown>

    ![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=–%20Image%20–){ align=left width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    </div>

=== "Right"

    ``` markdown title="Image, aligned to right"
    ![Image title](https://dummyimage.com/600x400/eee/aaa){ align=right }
    ```

    <div class="result" markdown>

    ![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=–%20Image%20–){ align=right width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

    </div>

If there's insufficient space to render the text next to the image, the image
will stretch to the full width of the viewport, e.g. on mobile viewports.

??? question "Why is there no centered alignment?"

    The [`align`][align] attribute doesn't allow for centered alignment, which
    is why this option is not supported by Zensical.[^1] Instead,
    the [image captions] syntax can be used, as captions are optional.

### Image captions

Sadly, the Markdown syntax doesn't provide native support for image captions,
but it's always possible to use the [Markdown in HTML] extension with literal
`figure` and `figcaption` tags:

``` html title="Image with caption"
<figure markdown="span">

![Image title](https://dummyimage.com/600x400/){ width="300" }

<figcaption>Image caption</figcaption>

</figure>
```

<div class="result">
  <figure>
    <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=–%20Image%20–" width="300" alt="placeholder image" />
    <figcaption>Image caption</figcaption>
  </figure>
</div>

However, the [Caption] Markdown extension provides an alternative syntax to add
captions to any Markdown block element, including images:

``` markdown title="Image with caption"
![Image title](https://dummyimage.com/600x400/){ width="300" }
/// caption
Image caption
///
```

### Image lazy-loading

Modern browsers provide [native support for lazy-loading images][lazy-loading]
through the `loading=lazy` directive, which degrades to eager-loading in
browsers without support:

``` markdown title="Image, lazy-loaded"
![Image title](https://dummyimage.com/600x400/){ loading=lazy }
```

<div class="result">
  <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa?text=–%20Image%20–" width="300" alt="placeholder image" />
</div>

### Light and dark mode

If you added a [color palette toggle] and want to show different images for
light and dark color schemes, you can append a `#only-light` or `#only-dark`
hash fragment to the image URL:

``` markdown title="Image, different for light and dark mode"
![Image title](https://dummyimage.com/600x400/f5f5f5/aaaaaa#only-light)
![Image title](https://dummyimage.com/600x400/21222c/d5d7e2#only-dark)
```

<div class="result" markdown>

![Zelda light world]{ width="300" }
![Zelda dark world]{ width="300" }

</div>

!!! warning "Requirements when using [custom color schemes]"

    The built-in [color schemes] define the aforementioned hash fragments, but
    if you're using [custom color schemes], you'll also have to add the
    following selectors to your scheme, depending on whether it's a light or
    dark scheme:

    === "Custom light scheme"

        ``` css
        [data-md-color-scheme="custom-light"] img[src$="#only-dark"],
        [data-md-color-scheme="custom-light"] img[src$="#gh-dark-mode-only"] {
          display: none; /* Hide dark images in light mode */
        }
        ```

    === "Custom dark scheme"

        ``` css
        [data-md-color-scheme="custom-dark"] img[src$="#only-light"],
        [data-md-color-scheme="custom-dark"] img[src$="#gh-light-mode-only"] {
          display: none; /* Hide light images in dark mode */
        }
        ```

    Remember to change `#!css "custom-light"` and `#!css "custom-dark"` to the
    name of your scheme.

### Lightbox and zoom

Zensical includes the [GLightbox] extension, which adds lightbox galleries. When enabled, clicking on an image opens it in a full-screen overlay with navigation and zoom controls.

To enable lightbox for your images, see the [GLightbox] setup guide.

[^1]: You might also realize that the [`align`][align] attribute has been deprecated as of HTML5, so why use it anyways? The main reason is portability – it's still supported by all browsers and clients, and is very unlikely to be completely removed, as many older websites still use it. This ensures a consistent appearance when a Markdown file with these attributes is viewed outside of a website generated by Zensical.

[align]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#deprecated_attributes
[Attribute Lists]: ../compatibility/markdown/python-markdown.md#attribute-lists
[Caption]: ../compatibility/markdown/python-markdown-extensions.md#caption
[color palette toggle]: ../setup/colors.md#color-palette-toggle
[color schemes]: ../setup/colors.md#color-scheme
[custom color schemes]: ../setup/colors.md#custom-color-schemes
[GLightbox]: ../compatibility/mkdocs/plugins.md#glightbox
[image captions]: #image-captions
[lazy-loading]: https://caniuse.com/#feat=loading-lazy-attr
[Markdown in HTML]: ../compatibility/markdown/python-markdown.md#markdown-in-html
[Zelda dark world]: ../assets/images/zelda-dark-world.png#only-dark
[Zelda light world]: ../assets/images/zelda-light-world.png#only-light
