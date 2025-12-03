---
icon: lucide/boxes
---

# mkdocstrings

As of [0.0.11], Zensical provides preliminary support for [mkdocstrings],
which allows rendering API reference documentation from source code. We'll be
rethinking [API reference documentation] from the ground up in the coming
months, making it much more flexible and powerful.

!!! warning "Preliminary support"

    The mkdocstrings integration is preliminary, which means some features are
    not yet supported, specifically cross-references and backlinks. We're
    working on bringing these features into Zensical.

  [mkdocstrings]: https://mkdocstrings.github.io
  [0.0.11]: https://github.com/zensical/zensical/releases/tag/0.0.11
  [API reference documentation]: https://zensical.org/about/roadmap/#api-documentation

## Installation

[mkdocstrings] is not included with Zensical by default, so it needs to be
installed separately:

=== "with `pip`"

    ```
    pip install mkdocstrings-python
    ```

=== "with `uv`"

    ```
    uv add mkdocstrings-python
    ```

## Configuration

Configure mkdocstrings as a plugin:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.mkdocstrings.handlers.python]
    inventories = ["https://docs.python.org/3/objects.inv"]
    paths = ["src"]

    [project.plugins.mkdocstrings.handlers.python.options]
    docstring_style = "google"
    inherited_members = true
    show_source = false
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - mkdocstrings:
          handlers:
            python:
              paths: [src]
              inventories:
                - https://docs.python.org/3/objects.inv
              options:
                docstring_style: google
                inherited_members: true
                show_source: false
    ```

The complete list of options can be found here:

- [mkdocstrings documentation]
- [mkdocstrings Python handler documentation].

  [mkdocstrings documentation]: https://mkdocstrings.github.io/usage/
  [mkdocstrings Python handler documentation]: https://mkdocstrings.github.io/python/usage/
