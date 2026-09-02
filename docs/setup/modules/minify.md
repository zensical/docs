---
icon: lucide/minimize-2
tags:
  - Modules
  - Performance
status: new
---

# Minify

## Objective

### How it works

This page documents Zensical's native replacement for [`mkdocs-minify-plugin`][mkdocs-minify-plugin],
created by [Byrne Reese] and [Lars Wilhelmer].

The Minify plugin reduces the size of output files. It can minify rendered
HTML, inline JavaScript and CSS, and JavaScript and CSS files selected through
configuration. It replaces the MkDocs minify plugin without requiring a
separate Python package.

### When to use it

Use the Minify plugin when you want to reduce the size of your generated
site and deliver HTML, JavaScript, and CSS more efficiently. It is especially
useful for sites hosted on a CDN or serving many pages to users on slower
connections.

Enable cache-safe asset names when you want browsers and CDNs to cache selected
JavaScript and CSS files for longer. Configure your hosting platform to use
long cache lifetimes for those files so that the renamed assets can be reused
until their contents change.

## Configuration

Enable the plugin:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify
    ```

### General

#### `enabled`

The plugin is enabled by default. Set `enabled` to `false` to keep its
configuration without applying any minification or asset renaming:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    enabled = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          enabled: false
    ```

### HTML

#### `minify_html`

The default value of `minify_html` is `false`. Set it to `true` to minify
rendered HTML:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_html = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_html: true
    ```

#### `minify_inline_js`

The default value of `minify_inline_js` is `false`. Set it to `true` to minify
JavaScript embedded in generated HTML:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_inline_js = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_inline_js: true
    ```

#### `minify_inline_css`

The default value of `minify_inline_css` is `false`. Set it to `true` to minify
CSS embedded in generated HTML:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_inline_css = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_inline_css: true
    ```

#### `htmlmin_opts`

Use `htmlmin_opts` to control HTML processing. The plugin preserves script
blocks that do not contain JavaScript, such as JSON-LD blocks, and keeps
content inside `pre` and `textarea` elements intact.

For example, remove ordinary HTML comments while preserving the default
handling of preformatted content:

``` toml
[project.plugins.minify.htmlmin_opts]
remove_comments = true
```

The supported options are:

`remove_comments`
: Remove ordinary HTML comments. Conditional comments and comments beginning
  with `!` remain available for preservation.

`remove_empty_space`
: Remove whitespace-only text that contains a newline. Its default is `false`.

`remove_all_empty_space`
: Remove all whitespace-only text nodes. Its default is `false`.

`reduce_empty_attributes`
: Remove the value from empty attributes, such as `class=""`. Its default is
  `true`.

`reduce_boolean_attributes`
: Remove values from Boolean attributes, such as `disabled="disabled"`. Its
  default is `false`.

`remove_optional_attribute_quotes`
: Remove quotes from attribute values when HTML syntax permits it. Its default
  is `true`.

`convert_charrefs`
: Convert character references in attributes when the result is safe. Its
  default is `true`.

`keep_pre`
: Preserve the configured preservation marker attribute in the output. Its
  default is `false`.

`pre_tags`
: List elements whose contents must remain unchanged. The default is `pre` and
  `textarea`.

`pre_attr`
: Set the attribute that marks an element or attribute value for preservation.
  The default is `pre`.

### JavaScript

#### `minify_js`

The default value of `minify_js` is `false`. Set it to `true` to minify the
JavaScript files selected by [`js_files`][js_files].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_js = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_js: true
    ```

#### `js_files`

Use `js_files` to select JavaScript files with paths or glob patterns. The
paths are relative to `docs_dir`. These can be the files listed in [additional
JavaScript][extra_javascript].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    js_files = ["javascripts/*.js"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          js_files:
            - javascripts/*.js
    ```

Set `minify_js` to `true` to minify the selected files. Minified JavaScript
files use the `.min.js` suffix by convention, and Zensical updates references
in generated HTML to use the emitted filename.

### CSS

#### `minify_css`

The default value of `minify_css` is `false`. Set it to `true` to minify the
CSS files selected by [`css_files`][css_files].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_css = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_css: true
    ```

#### `css_files`

Use `css_files` to select CSS files with paths or glob patterns. The paths are
relative to `docs_dir`. These can be the files listed in [additional CSS][extra_css].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    css_files = ["stylesheets/*.css"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          css_files:
            - stylesheets/*.css
    ```

Set `minify_css` to `true` to minify the selected files. Minified CSS files
use the `.min.css` suffix by convention, and Zensical updates references in
generated HTML to use the emitted filename.

!!! note "Unparseable files"

    If Zensical cannot parse a selected JavaScript or CSS file, it keeps the
    original content instead of emitting a minified version.

### Cache-safe asset names

#### `cache_safe`

The default value of `cache_safe` is `false`. Set it to `true` to add a content
hash to selected JavaScript and CSS asset names:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_js = true
    js_files = ["assets/app.js"]
    cache_safe = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          cache_safe: true
    ```

With `cache_safe` enabled, `app.js` might be emitted as
`app.a1b2c3d4.min.js`, and pages reference the new name. This allows browsers
to cache an asset until its contents change.

!!! note "Configure caching on your host"

    `cache_safe` only changes the asset filename. It does not set the HTTP
    headers that control how long browsers and CDNs cache the file. To make
    effective use of hashed filenames, configure your web server, CDN, or
    hosting platform to assign a long cache lifetime to these assets. Since
    the filename changes when the content changes, long-lived caching is safe.

[extra_css]: ../../customization.md#additional-css
[extra_javascript]: ../../customization.md#additional-javascript
[mkdocs-minify-plugin]: https://github.com/byrnereese/mkdocs-minify-plugin
[Byrne Reese]: https://github.com/byrnereese
[Lars Wilhelmer]: https://github.com/wilhelmer
