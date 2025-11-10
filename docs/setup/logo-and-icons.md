---
icon: lucide/feather
tags:
  - Setup
  - Customization
---

# Logo and icons

When installing Zensical, you immediately get access to _over 10,000 icons_ ready
to be used for customization of specific parts of the theme and when writing
your documentation in Markdown. Not enough? You can also add [additional icons]
with minimal effort.

  [additional icons]: #additional-icons

## Configuration

### Logo

The logo can be changed to a user-provided image (any type, incl. `*.png` and
`*.svg`) located in the `docs` folder, or to any icon bundled with the theme.
Add the following lines to your configuration to set you own logo from an image
file:

=== "`zensical.toml`"
    ``` toml
    [project.theme]
    logo = "assets/logo.png"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      logo: assets/logo.png
    ```

To set the logo to use one of the bundled icons, [find a suitable icon] and add
it to the configuration:

=== "`zensical.toml`"
    ``` toml
    [project.theme.icon]
    logo = "lucide/smile"
    ```

=== "`mkdocs.yml`"
    ``` yaml
    theme:
      icon:
        logo: lucide/smile
    ```


[find a suitable icon]: ../authoring/icons-emojis.md#included-icon-sets

Normally, the logo in the header and sidebar links to the homepage of the
documentation, which is the same as `site_url`. This behavior can be changed
with the following configuration:

=== "`zensical.toml`"
    ``` toml
    [project.extra]
    homepage = "https://example.com"
    ```

=== "`mkdocs.yml`"
    ``` yaml
    extra:
      homepage: https://example.com
    ```

### Favicon

The favicon can be changed to a path pointing to a user-provided image, which
must be located in the `docs` folder. Add the following lines to you
configuration:

=== "`zensical.toml`"
    ``` toml
    [project.theme]
    favicon = "images/favicon.png"
    ```

=== "`mkdocs.yml`"
    ``` yaml
    theme:
      favicon: images/favicon.png
    ```

### Site icons

Most icons you see on your site, such as navigation icons, can also be changed. For example,
to change the navigation arrows in the footer, add the following lines to `mkdocs.yml`:

=== "`zensical.toml`"
    ``` toml
    [project.theme.icon]
    previous = "fontawesome/solid/angle-left"
    next = "fontawesome/solid/angle-right"
    ```

=== "`mkdocs.yml`"
    ``` yaml
    theme:
      icon:
        previous: fontawesome/solid/angle-left
        next: fontawesome/solid/angle-right
    ```

The following is a complete list of customizable icons used by the theme:

| Icon name    | Purpose                                                                       |
|:-------------|:------------------------------------------------------------------------------|
| `logo`       | See [Logo](#logo)                                                             |
| `menu`       | Open drawer                                                                   |
| `alternate`  | Change language                                                               |
| `search`     | Search icon                                                                   |
| `share`      | Share search                                                                  |
| `close`      | Reset search, dismiss announcements                                           |
| `top`        | Back-to-top button                                                            |
| `edit`       | Edit current page                                                             |
| `view`       | View page source                                                              |
| `repo`       | Repository icon                                                               |
| `admonition` | See [Admonition icons](../authoring/admonitions.md#admonition-icons)          |
| `tag`        | See [Tag icons and identifiers](tags.md#tag-icons-and-identifiers) |
| `previous`   | Previous page in footer, hide search on mobile                                |
| `next`       | Next page in footer                                                           |

## Customization

### Additional icons

In order to use custom icons, [extend the theme] and create a new folder named
`.icons` in the [`custom_dir`][custom_dir] you want to use for overrides.
Next, add your `*.svg` icons into a subfolder of the `.icons` folder. Let's say
you downloaded and unpacked the [Bootstrap] icon set, and want to add it to
your project documentation. The structure of your project should look like this:

=== "`zensical.toml`"
    ``` { .sh .no-copy }
    .
    ├─ overrides/
    │  └─ .icons/
    │     └─ bootstrap/
    │        └─ *.svg
    └─ zensical.toml
    ```

    Then, add the following lines to `zensical.toml`:

    ``` toml
    [project.theme]
    custom_dir = "overrides"

    [project.markdown_extensions.pymdownx.emoji]
    emoji_index = "zensical.extensions.emoji.twemoji"
    emoji_generator = "zensical.extensions.emoji.to_svg"
    options.custom_icons = ["overrides/.icons"]
    ```

=== "`mkdocs.yml`"
    ``` { .sh .no-copy }
    .
    ├─ overrides/
    │  └─ .icons/
    │     └─ bootstrap/
    │        └─ *.svg
    └─ mkdocs.yml
    ```

    Then, add the following lines to `mkdocs.yml`:

    ``` yaml
    theme:
      custom_dir: overrides

    markdown_extensions:
      - pymdownx.emoji:
          emoji_index: !!python/name:zensical.extensions.emoji.twemoji
          emoji_generator: !!python/name:zensical.extensions.emoji.to_svg
          options:
            custom_icons:
              - overrides/.icons
    ```

You can now use all :fontawesome-brands-bootstrap: Bootstrap icons anywhere in
Markdown files, as well as everywhere icons can be used in your configuration.
However, note that the syntaxes are slightly different:

- __Use icons in configuration__: take the path of the `*.svg` icon file
  starting at the `.icons` folder and drop the file extension, e.g. for
  `.icons/bootstrap/envelope-paper.svg`, use:

    === "`zensical.toml`"
        ``` toml
        [project.theme.icon]
        logo = "bootstrap/envelope-paper"
        ```

    === "`mkdocs.yml`"
        ``` yaml
        theme:
          icon:
            logo: bootstrap/envelope-paper
        ```

- __Use icons in Markdown files__: additionally to taking the path from the
  `.icons` folder as noted above, replace all `/` with `-` and enclose the icon
  shortcode in two colons:

    ```
    :bootstrap-envelope-paper:
    ```

For further notes on icon usage, please consult the [icon reference].

  [extend the theme]: ../customization.md#extending-the-theme
  [custom_dir]: https://www.mkdocs.org/user-guide/configuration/#custom_dir
  [Bootstrap]: https://icons.getbootstrap.com/
  [icon reference]: ../authoring/icons-emojis.md#use-icons
