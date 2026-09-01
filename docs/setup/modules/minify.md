---
icon: lucide/minimize-2
tags:
  - Modules
  - Performance
status: new
---

# Minification

This page documents Zensical's native replacement for [`mkdocs-minify-plugin`][mkdocs-minify-plugin],
created by [Byrne Reese] and [Lars Wilhelmer].

The minification plugin reduces the size of output files. It can minify rendered
HTML, inline JavaScript and CSS, and JavaScript and CSS files selected through
configuration. It replaces the MkDocs minify plugin without requiring a
separate Python package.

## Configuration

The following configuration shows the default values. Set the switches to
`true` to enable the parts of the plugin that you need:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    enabled = true
    minify_html = false
    minify_inline_js = false
    minify_inline_css = false
    minify_js = false
    minify_css = false
    cache_safe = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          enabled: true
          minify_html: false
          minify_inline_js: false
          minify_inline_css: false
          minify_js: false
          minify_css: false
          cache_safe: false
    ```

Set `enabled` to `false` to keep the configuration without applying any
minification or asset renaming:

``` toml
[project.plugins.minify]
enabled = false
```

## JavaScript files

Set `minify_js` to `true` and use `js_files` to select JavaScript files with
paths or glob patterns. The paths are relative to `docs_dir`. These can be the
files listed in [additional JavaScript][extra_javascript].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_js = true
    js_files = ["javascripts/*.js"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_js: true
          js_files:
            - javascripts/*.js
    ```

Minified JavaScript files use the `.min.js` suffix by convention. Zensical
updates references in the generated HTML to use the emitted filename.

## CSS files

Set `minify_css` to `true` and use `css_files` to select CSS files with paths or
glob patterns. The paths are relative to `docs_dir`. These can be the files
listed in [additional CSS][extra_css].

=== "`zensical.toml`"

    ``` toml
    [project.plugins.minify]
    minify_css = true
    css_files = ["stylesheets/*.css"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - minify:
          minify_css: true
          css_files:
            - stylesheets/*.css
    ```

Minified CSS files use the `.min.css` suffix by convention. Zensical updates
references in the generated HTML to use the emitted filename.

!!! note "Unparseable files"

    If Zensical cannot parse a selected JavaScript or CSS file, it keeps the
    original content instead of emitting a minified version.

## Cache-safe asset names

Set `cache_safe` to add a content hash to the selected asset names:

``` toml
[project.plugins.minify]
minify_js = true
js_files = ["assets/app.js"]
cache_safe = true
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

## HTML options

Use `htmlmin_opts` to control HTML processing. For example, remove ordinary
HTML comments while preserving the default handling of preformatted content:

``` toml
[project.plugins.minify.htmlmin_opts]
remove_comments = true
```

The plugin preserves script blocks that do not contain JavaScript, such as
JSON-LD blocks, and keeps content inside `pre` and `textarea` elements intact.

The supported options are:

`remove_comments`
: Remove ordinary HTML comments. Conditional comments and comments beginning
  with `!` remain available for preservation.

`remove_empty_space`
: Remove whitespace-only text that contains a newline.

`remove_all_empty_space`
: Remove all whitespace-only text nodes.

`reduce_empty_attributes`
: Remove the value from empty attributes, such as `class=""`.

`reduce_boolean_attributes`
: Remove values from Boolean attributes, such as `disabled="disabled"`.

`remove_optional_attribute_quotes`
: Remove quotes from attribute values when HTML syntax permits it.

`convert_charrefs`
: Convert character references in attributes when the result is safe.

`keep_pre`
: Preserve the configured preservation marker attribute in the output.

`pre_tags`
: List elements whose contents must remain unchanged. The default is
  `pre` and `textarea`.

`pre_attr`
: Set the attribute that marks an element or attribute value for preservation.
  The default is `pre`.

[extra_css]: ../../customization.md#additional-css
[extra_javascript]: ../../customization.md#additional-javascript
[mkdocs-minify-plugin]: https://github.com/byrnereese/mkdocs-minify-plugin
[Byrne Reese]: https://github.com/byrnereese
[Lars Wilhelmer]: https://github.com/wilhelmer
