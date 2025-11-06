---
icon: lucide/panel-bottom
tags:
  - Setup
  - Information architecture
---

# Footer

The footer of your documentation hosts the copyright notice, links to the
previous and next page, as well as links to your social media profiles, all of
which can be enable via configuration.

## Configuration

### Navigation

The footer can include links to the previous and next page of the current page.
If you wish to enable this behavior, add the following lines to your
configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = [
        "navigation.footer"
    ]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - navigation.footer
    ```

### Social links

Social links are rendered next to the copyright notice as part of the
footer of your project documentation. Add a list of social links in your
configuration with:

=== "`zensical.toml`"

    ``` toml
    [[project.extra.social]]
    icon = "fontawesome/brands/x-twitter"
    link = "https://x.com/zensical"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      social:
        - icon: fontawesome/brands/x-twitter
          link: https://x.com/zensical
    ```

The following properties are available for each link:

`social.icon`
:   This property must contain a valid path to any [icon bundled with the theme],
    or the build will not succeed. Some popular choices:

    * :fontawesome-brands-github: – `fontawesome/brands/github`
    * :fontawesome-brands-gitlab: – `fontawesome/brands/gitlab`
    * :fontawesome-brands-x-twitter: – `fontawesome/brands/x-twitter`
    * :fontawesome-brands-mastodon: – `fontawesome/brands/mastodon`
      <small>automatically adds [`rel=me`][rel=me]</small>
    * :fontawesome-brands-docker: – `fontawesome/brands/docker`
    * :fontawesome-brands-facebook: – `fontawesome/brands/facebook`
    * :fontawesome-brands-instagram: – `fontawesome/brands/instagram`
    * :fontawesome-brands-linkedin: – `fontawesome/brands/linkedin`
    * :fontawesome-brands-slack: – `fontawesome/brands/slack`
    * :fontawesome-brands-discord: – `fontawesome/brands/discord`

[icon bundled with the theme]: ../authoring/icons-emojis.md

`social.link`

:   This property must be set to a relative or absolute URL including the URI
    scheme. All URI schemes are supported, including `mailto` and `bitcoin`.
    An example for adding a Mastodon link was given above. To add an Email link,
    add this:

    === "`zensical.toml`"
        ``` toml
        [[project.extra.social]]
        icon = "fontawesome/solid/paper-plane"
        link = "mailto:<email-address>"
        ```

    === "`mkdocs.yml`"
        ``` yaml
        extra:
          social:
            - icon: fontawesome/solid/paper-plane
              link: mailto:<email-address>
        ```

`social.name`

:   This property is used as the link's `title` attribute and can be set to a
    discernable name to improve accessibility. The default title is the domain
    name from the link, if available.

    === "`zensical.toml`"
        ``` toml
        [[project.extra.social]]
        icon = "fontawesome/brands/x"
        link = "https://x.com/zensical"
        name = "Zensical on X"
        ```

    === "`mkdocs.yml`"
        ``` yaml
        extra:
          social:
            - icon: fontawesome/brands/mastodon
              link: https://fosstodon.org/@squidfunk
              name: Zensical on Mastodon
        ```

  [rel=me]: https://docs.joinmastodon.org/user/profile/#verification

### Copyright notice

A custom copyright banner can be rendered as part of the footer, which is
displayed next to the social links. It can be defined as part of your
configuration file:

=== "`zensical.toml`"

    ``` toml
    [project]
    copyright: "Copyright &copy; <year> <name>"
    ```

=== "`mkdocs.yml`"

    ``` yaml
    copyright: "Copyright &copy; <year> <name>"
    ```

### Generator notice

The footer displays a _Made with Zensical_ notice to denote how the site was
generated. The notice can be removed with the following option:

=== "`zensical.toml`"

    ``` toml
    [project.extra]
    generator = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra:
      generator: false
    ```

!!! info "Please read this before removing the generator notice"

    The subtle __Made with Zensical__ hint in the footer is a great way to
    spread the word about Zensical. We offer Zensical as Free and Open Source
    software under the permissive MIT license. This is one of the ways you can
    help ensure that the Zensical community grows and thrives, ultimately
    helping to make it a sustainable project.

## Usage

### Hiding prev/next links

The footer navigation showing links to the previous and next page can be hidden
with the front matter `hide` property. Use this when the content of the page
that is adjacent to the current page is not really related. Add the following
lines at the top of a Markdown file:


``` yaml
---
hide:
  - footer
---

# Page title
...
```
