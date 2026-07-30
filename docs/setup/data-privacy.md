---
icon: lucide/shield-check
tags:
  - Setup
  - Privacy
---

# Data privacy

Zensical offers features to comply with data privacy regulations, as it offers
a native [cookie consent] solution to seek explicit consent from users before
setting up [site analytics].

## Configuration

### Cookie consent

Zensical ships a native and extensible cookie consent form which
asks the user for consent prior to sending requests to third parties. Add the
following to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.extra.consent]
    title = "Cookie consent"
    description = """
        We use cookies to recognize your repeated visits and preferences, as well
        as to measure the effectiveness of our documentation and whether users
        find what they're searching for. With your consent, you're helping us to
        make our documentation better.
    """ # (1)!
    ```

    1. You can add arbitrary HTML tags in the `description`, e.g. to link to your
       terms of service or other parts of the site.

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      consent:
        title: Cookie consent
        description: >- # (1)!
          We use cookies to recognize your repeated visits and preferences, as well
          as to measure the effectiveness of our documentation and whether users
          find what they're searching for. With your consent, you're helping us to
          make our documentation better.
    ```

    1. You can add arbitrary HTML tags in the `description`, e.g. to link to your
       terms of service or other parts of the site.

The following properties are available:

`consent.title`

:   This required property sets the title of the cookie consent, which is
    rendered at the top of the form and must be set to a non-empty string.

`consent.description`

:   This required property sets the description of the cookie consent, is
    rendered below the title, and may include raw HTML (e.g. a links to the
    terms of service).

`consent.cookies`

:   This property allows to add custom cookies or change the initial `checked`
    state and name of built-in cookies. Currently, the following cookies are
    built-in:

    - **Google Analytics** – `analytics` (enabled by default)
    - **GitHub** – `github` (enabled by default)

    Each cookie must receive a unique identifier which is used as a key in the
    `cookies` map, and can be either set to a string, or to a map defining
    `name` and `checked` state:

    Custom cookie name:

    === "`zensical.toml`"

        ``` toml
        [project.extra.consent.cookies]
        analytics = "Custom name"
        ```

    === "`mkdocs.yml`"

        ``` yaml
        extra:
          consent:
            cookies:
              analytics: Custom name
        ```

    Custom initial state:

    === "`zensical.toml`"

        ``` toml
        [project.extra.consent.cookies]
        analytics.name = "Google Analytics"
        checked = false
        ```

    === "`mkdocs.yml`"

        ``` yaml
        extra:
          consent:
            cookies:
              analytics:
                name: Google Analytics
                checked: false
        ```

    Custom cookie:

    === "`zensical.toml`"

        ``` toml
        [project.extra.consent.cookies]
        analytics.name = "Google Analytics" # (1)!
        custom = "Custom cookie"
        ```

        1. If you define a custom cookie as part of the `cookies` property,
           the `analytics` cookie must be added back explicitly, or analytics
           won't be triggered.

    === "`mkdocs.yml`"

        ``` yaml
        extra:
          consent:
            cookies:
              analytics: Google Analytics # (1)!
              custom: Custom cookie
        ```

        1. If you define a custom cookie as part of the `cookies` property,
           the `analytics` cookie must be added back explicitly, or analytics
           won't be triggered.

    If Google Analytics was configured, the cookie consent will
    automatically include a setting for the user to disable it. [Custom cookies]
    can be used from JavaScript.

`consent.actions`

:   This property defines which buttons are shown and in which order, e.g., to
    allow the user to accept cookies and manage settings:

    === "`zensical.toml`"

        ``` toml
        [project.extra.consent]
        actions = [
            "accept",
            "manage" # (1)!
        ]
        ```

        1. If the `manage` settings button is omitted from the `actions` property,
           the settings are always shown.

    === "`mkdocs.yml`"

        ``` yaml
        extra:
          consent:
            actions:
              - accept
              - manage # (1)!
        ```

        1. If the `manage` settings button is omitted from the `actions` property,
           the settings are always shown.

    The cookie consent form includes three types of buttons:

    - `accept` – Button to accept selected cookies
    - `reject` – Button to reject all cookies
    - `manage` – Button to manage settings

When a user first visits your site, a cookie consent form is rendered:

![Cookie consent enabled]
![Cookie consent enabled dark]

#### Change cookie settings

In order to comply with GDPR, users must be able to change their cookie settings
at any time. This can be done by adding a simple link to your [copyright notice]
in the footer below the copyright message:

=== "`zensical.toml`"

    ``` toml
    [project]
    copyright = """
      Copyright &copy; Zensical LLC –
      <a href="#__consent">Change cookie settings</a>
    """
    ```

=== "`mkdocs.yml`"

    ``` yaml
    copyright: >
      Copyright &copy; Zensical LLC –
      <a href="#__consent">Change cookie settings</a>
    ```

## Customization

### Custom cookies

If you've customized the [cookie consent] and added a `custom` cookie, the user
will be prompted to accept or reject your custom cookie. Once the user accepts
or rejects the cookie consent, or [changes the settings], the page reloads[^1].
Use [additional JavaScript] to query the result:

=== "`docs/javascripts/consent.js`"

    ``` js
    var consent = __md_get("__consent")
    if (consent && consent.custom) {
      /* The user accepted the cookie */
    } else {
      /* The user rejected the cookie */
    }
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_javascript = ["javascripts/consent.js"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_javascript:
      - javascripts/consent.js
    ```

[^1]: We reload the page to make interop with custom cookies simpler. If Zensical was to implement a callback-based approach, the author would need to make sure to correctly update all scripts that use cookies. Additionally, the cookie consent is only answered initially, which is why we consider this to be a good trade-off of DX and UX.

[additional JavaScript]: ../customization.md#additional-javascript
[changes the settings]: #change-cookie-settings
[cookie consent]: #cookie-consent
[Cookie consent enabled]: ../assets/screenshots/consent.png#gh-light-mode-only
[Cookie consent enabled dark]: ../assets/screenshots/consent-dark.png#gh-dark-mode-only
[copyright notice]: footer.md#copyright-notice
[Custom cookies]: #custom-cookies
[site analytics]: analytics.md
