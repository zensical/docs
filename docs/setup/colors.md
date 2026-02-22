---
icon: lucide/paintbrush-vertical
tags:
  - Setup
  - Customization
---

# Colors

Zensical allows to change the color palette of your documentation site through
configuration to fit your brand's identity. If you want to go beyond that, you
can also define [custom colors].

  [custom colors]: #custom-colors

## Configuration

### Color palette

#### Color scheme

Zensical supports two color schemes: a __light mode__, which is called `default`,
and a __dark mode__, which is called `slate`. The color scheme can be set via
configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme.palette]
    scheme = "default"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        scheme: default
    ```

Click on a tile to preview the color scheme:

<div class="mdx-switch">
  <button data-md-color-scheme-2="default"><code>default</code></button>
  <button data-md-color-scheme-2="slate"><code>slate</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme-2]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-switching", "")
      var attr = this.getAttribute("data-md-color-scheme-2")
      document.body.setAttribute("data-md-color-scheme", attr)
      setTimeout(function() {
        document.body.removeAttribute("data-md-color-switching")
      })
    })
  })
</script>

#### Primary color

The primary color is used for text links, and in the `classic` theme, for
the header and the sidebar. In order to change the primary color, set the
setting to a valid color name:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    palette.primary = "indigo"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        primary: indigo
    ```

Click on a tile to preview the primary color:

<div class="mdx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
    })
  })
</script>

See our guide below to learn how to set [custom colors].

#### Accent color

The accent color is used to denote elements that can be interacted with, e.g.
hovered links, buttons, and scrollbars. It can be changed in your configuration
by choosing a valid color name:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    palette.accent = "indigo"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        accent: indigo
    ```

Click on a tile to preview the accent color:

<div class="mdx-switch">
  <button data-md-color-accent="red"><code>red</code></button>
  <button data-md-color-accent="pink"><code>pink</code></button>
  <button data-md-color-accent="purple"><code>purple</code></button>
  <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
  <button data-md-color-accent="indigo"><code>indigo</code></button>
  <button data-md-color-accent="blue"><code>blue</code></button>
  <button data-md-color-accent="light-blue"><code>light blue</code></button>
  <button data-md-color-accent="cyan"><code>cyan</code></button>
  <button data-md-color-accent="teal"><code>teal</code></button>
  <button data-md-color-accent="green"><code>green</code></button>
  <button data-md-color-accent="light-green"><code>light green</code></button>
  <button data-md-color-accent="lime"><code>lime</code></button>
  <button data-md-color-accent="yellow"><code>yellow</code></button>
  <button data-md-color-accent="amber"><code>amber</code></button>
  <button data-md-color-accent="orange"><code>orange</code></button>
  <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
    })
  })
</script>

See our guide below to learn how to set [custom colors].

### Color palette toggle

Offering a light and dark color palette makes your documentation pleasant to
read at different times of the day, so the user can choose accordingly. Add the
following lines to allow users to switch between light and dark mode:

=== "`zensical.toml`"

    ``` toml
    [[project.theme.palette]] # (1)!
    scheme = "default"
    toggle.icon = "lucide/sun"
    toggle.name = "Switch to dark mode"

    [[project.theme.palette]]
    scheme = "slate"
    toggle.icon = "lucide/moon"
    toggle.name = "Switch to light mode"
    ```

    1.  Note that the `theme.palette` setting is defined as a list.

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette: # (1)!

        # Palette toggle for light mode
        - scheme: default
          toggle:
            icon: lucide/sun
            name: Switch to dark mode

        # Palette toggle for dark mode
        - scheme: slate
          toggle:
            icon: lucide/moon
            name: Switch to light mode
    ```

    1.  Note that the `theme.palette` setting is now defined as a list.

You can use any icon from an [available icon set] for the toggle icon.

  [available icon set]: ../authoring/icons-emojis.md#included-icon-sets

This configuration will render a color palette toggle next to the search bar.
Note that you can also define separate settings for [`primary`][palette.primary]
and [`accent`][palette.accent] per color palette.

The following properties must be set for each toggle:

`icon`

:    This property must point to a valid icon path referencing any icon
bundled with the theme, or the build will not succeed. Some popular combinations
in addition to the ones above:

    * :lucide-sun: + :lucide-moon: – `lucide/sun` + `lucide/moon`
    * :lucide-toggle-left: + :lucide-toggle-right: – `lucide/toggle-left` + `lucide/toggle-right`

`name`
:   This property is used as the toggle's `title` attribute and should be set to
    a discernable name to improve accessibility. It's rendered as a [tooltip].

  [palette.scheme]: #color-scheme
  [palette.primary]: #primary-color
  [palette.accent]: #accent-color
  [tooltip]: ../authoring/tooltips.md

### System preference

Each color palette can be linked to the user's system preference for light and
dark appearance by using a media query. Simply add a `media` property next to
the `scheme` setting in the configuration:

=== "`zensical.toml`"

    ``` toml
    # Palette toggle for light mode
    [[project.theme.palette]]
    media = "(prefers-color-scheme: light)"
    scheme = "default"
    toggle.icon = "lucide/sun"
    toggle.name = "Switch to dark mode"

    # Palette toggle for dark mode
    [[project.theme.palette]]
    media = "(prefers-color-scheme: dark)"
    scheme = "slate"
    toggle.icon = "lucide/moon"
    toggle.name = "Switch to light mode"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:

        # Palette toggle for light mode
        - media: "(prefers-color-scheme: light)"
          scheme: default
          toggle:
            icon: lucide/sun
            name: Switch to dark mode

        # Palette toggle for dark mode
        - media: "(prefers-color-scheme: dark)"
          scheme: slate
          toggle:
            icon: lucide/moon
            name: Switch to light mode
    ```

When the user first visits your site, the media queries are evaluated in the
order of their definition. The first media query that matches selects the
default color palette.

#### Automatic light / dark mode

Zensical has support for automatic light / dark mode, delegating color palette
selection to the user's operating system. Add the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    # Palette toggle for automatic mode
    [[project.theme.palette]]
    media = "(prefers-color-scheme)"
    toggle.icon = "lucide/sun-moon"
    toggle.name = "Switch to light mode"

    # Palette toggle for light mode
    [[project.theme.palette]]
    media = "(prefers-color-scheme: light)"
    scheme = "default"
    toggle.icon = "lucide/sun"
    toggle.name = "Switch to dark mode"

    # Palette toggle for dark mode
    [[project.theme.palette]]
    media = "(prefers-color-scheme: dark)"
    scheme = "slate"
    toggle.icon = "lucide/moon"
    toggle.name = "Switch to system preference"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:

        # Palette toggle for automatic mode
        - media: "(prefers-color-scheme)"
          toggle:
            icon: lucide/sun-moon
            name: Switch to light mode

        # Palette toggle for light mode
        - media: "(prefers-color-scheme: light)"
          scheme: default # (1)!
          toggle:
            icon: lucide/sun
            name: Switch to dark mode

        # Palette toggle for dark mode
        - media: "(prefers-color-scheme: dark)"
          scheme: slate
          toggle:
            icon: lucide/moon
            name: Switch to system preference
    ```

    1.  You can also define separate settings for [`primary`][palette.primary] and
        [`accent`][palette.accent] per color palette, i.e. different colors for
        light and dark mode.

Zensical will now change the color palette each time the operating
system switches between light and dark appearance, even when the user doesn't
reload the site.

  [Insiders]: ../insiders/index.md

## Customization

### Custom colors

Zensical implements colors using [CSS variables] (custom properties). If you
want to customize the colors beyond the palette (e.g. to use your brand-specific
colors), you can add an [additional style sheet] and tweak the values of the CSS
variables.

  [additional style sheet]: https://zensical.org/docs/customization#additional-css

First, set the [`primary`][palette.primary] or [`accent`][palette.accent] values
in `mkdocs.yml` to `custom`, to signal to the theme that you want to define
custom colors, e.g., when you want to override the `primary` color:

=== "`zensical.toml`"

    ``` toml
    [project.theme.palette]
    primary = "custom"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        primary: custom
    ```

Let's say you're :fontawesome-brands-youtube:{ style="color: #EE0F0F" }
__YouTube__, and want to set the primary color to your brand's palette. Just
add this CSS and make sure that it is included in the `extra_css` setting in
your configuration:

=== "`docs/stylesheets/extra.css`"

    ``` css
    :root  > * {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_css = ["stylesheets/extra.css"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_css:
      - stylesheets/extra.css
    ```

  [CSS variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  [color definitions]: https://github.com/zensical/zensical/blob/master/src/templates/assets/stylesheets/main/_colors.scss

### Custom color schemes

Besides overriding specific colors, you can create your own, named color scheme
by wrapping the definitions in a `[data-md-color-scheme="..."]`
[attribute selector], which you can then set via your configuration as described
in the [color schemes][palette.scheme] section:

=== "`docs/stylesheets/extra.css`"

    ``` css
    [data-md-color-scheme="youtube"] {
      --md-primary-fg-color:        #EE0F0F;
      --md-primary-fg-color--light: #ECB7B7;
      --md-primary-fg-color--dark:  #90030C;
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    theme.palette.scheme = "youtube"
    extra_css = ["stylesheets/extra.css"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      palette:
        scheme: youtube
    extra_css:
      - stylesheets/extra.css
    ```

Additionally, the `slate` color scheme defines all of it's colors via `hsla`
color functions and deduces its colors from the `--md-hue` CSS variable. You
can tune the `slate` theme with:

``` css
[data-md-color-scheme="slate"] {
  --md-hue: 210; /* (1)! */
}
```

1.  The `hue` value must be in the range of `[0, 360]`

  [attribute selector]: https://www.w3.org/TR/selectors-4/#attribute-selectors
