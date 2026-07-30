---
icon: lucide/languages
tags:
  - Setup
  - Internationalization
---

# Language

With the help of contributors, templates are localized into more than 60
languages, making it easy to create documentation sites in your preferred
language.

## Configuration

### Site language

You can set the site language in your configuration file with:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    language = "en"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      language: en
    ```

HTML5 only allows to set a [single language per document], which is why Zensical
only supports setting a canonical language for the entire project.

The following languages are supported:

--8<-- "includes/languages.html"

### Site language selector

If your documentation is available in multiple languages, a language selector
pointing to those languages can be added to the header. Alternate languages
can be defined via configuration:

=== "`zensical.toml`"

    ``` toml
    [project.extra]
    alternate = [
        { name = "English", link = "/en/", lang = "en" },
        { name = "Deutsch", link = "/de/", lang = "de" }
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      alternate:
        - name: English
          link: /en/ # (1)!
          lang: en
        - name: Deutsch
          link: /de/
          lang: de
    ```

The following properties are required for each alternate language:

`alternate.name`

:   This value of this property is used inside the language selector as the
    name of the language and must be set to a non-empty string.

`alternate.link`

:   This property must be set to an absolute link, which might also point to
    another domain or subdomain not necessarily generated with Zensical.
    If it includes a domain part, it's used as defined. Otherwise the domain
    part of the [`site_url`][site_url] as set in your configuration is
    prepended to the link.

`alternate.lang`

:   This property must contain an [ISO 639-1 language code] and is used for
    the `hreflang` attribute of the link, improving discoverability via search
    engines.

### Directionality

While many languages are read `ltr` (left-to-right), Zensical also
supports `rtl` (right-to-left) directionality which is deduced from the
selected language, but can also be set with:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    direction = "ltr"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      direction: ltr
    ```

Click on a tile to change the directionality:

<div class="mdx-switch">
  <button data-md-dir="ltr"><code>ltr</code></button>
  <button data-md-dir="rtl"><code>rtl</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-dir]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-dir")
      document.body.dir = attr
      var name = document.querySelector("#__code_2 code span.l")
      name.textContent = attr
    })
  })
</script>

## Customization

### Custom translations

If you want to customize some of the translations for a language, just follow
the guide on [theme extension] and create a new partial in the `overrides`
folder. Then, import the [translations] of the language as a fallback and only
adjust the ones you want to override:

=== "`overrides/partials/languages/custom.html`"

    ``` html
    <!-- Import translations for language and fallback -->
    {% import "partials/languages/de.html" as language %}
    {% import "partials/languages/en.html" as fallback %} <!-- (1)! -->

    <!-- Define custom translations -->
    {% macro override(key) %}{{ {
      "source.file.date.created": "Erstellt am", <!-- (2)! -->
      "source.file.date.updated": "Aktualisiert am"
    }[key] }}{% endmacro %}

    <!-- Re-export translations -->
    {% macro t(key) %}{{
      override(key) or language.t(key) or fallback.t(key)
    }}{% endmacro %}
    ```

    1. Note that `en` must always be used as a fallback language, as it's the
       default theme language.

    2. Check the [list of available languages], pick the translation you want
       to override for your language and add them here.

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    language = "custom"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      language: custom
    ```

[ISO 639-1 language code]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[list of available languages]: https://github.com/zensical/ui/tree/master/dist/partials/languages
[single language per document]: https://www.w3.org/International/questions/qa-html-language-declarations.en#attributes
[site_url]: https://www.mkdocs.org/user-guide/configuration/#site_url
[theme extension]: ../customization.md#extending-the-theme
[translations]: https://github.com/zensical/ui/tree/master/dist/partials/languages
