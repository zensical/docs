---
icon: lucide/app-window
tags:
  - Authoring
  - Information architecture
---

# Content tabs

Sometimes, it's desirable to group alternative content under different tabs,
e.g. when describing how to access an API from different languages or
environments. Zensical allows for beautiful and functional tabs, grouping code blocks and other content.


## Configuration

This configuration enables content tabs, and allows to nest arbitrary content
inside content tabs, including code blocks and ... more content tabs! Add the
following lines to your configuration file:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.superfences]
    [project.markdown_extensions.pymdownx.tabbed]
    alternate_style = true
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences
      - pymdownx.tabbed:
          alternate_style: true
    ```

See additional configuration options:

- [SuperFences]
- [Tabbed]

  [SuperFences]: ../setup/extensions/python-markdown-extensions.md#superfences
  [Tabbed]: ../setup/extensions/python-markdown-extensions.md#tabbed

### Anchor links

In order to link to content tabs and share them more easily, an anchor link is
automatically added to each content tab, which you can copy via right click or
open in a new tab:

=== "Open me in a new tab ..."
    First tab!

=== "... or me ..."
    Second tab!

=== "... or even me"
    Third tab!

You can copy the link of the tab and create a link on the same or any other
page. For example, you can jump to the [first], [second] or [third] tab above
this paragraph.

Python Markdown Extensions supports [slugification] of content tabs, which
produces nicer looking and more readable anchor links.  Enable the slugify
function with the following lines:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions.pymdownx.tabbed.slugify]
    object = "pymdownx.slugs.slugify"
    kwds = { case = "lower" }
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.tabbed:
          slugify: !!python/object/apply:pymdownx.slugs.slugify
            kwds:
              case: lower
    ```

    Fore more information, please [see the extension guide][slugification].

  [first]: #anchor-links-open-me-in-a-new-tab-
  [second]: #anchor-links--or-me-
  [third]: #anchor-links--or-even-me
  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/
  [slugification]: ../setup/extensions/python-markdown-extensions.md#slugify

### Linked content tabs

When enabled, all content tabs across the whole documentation site will be
linked and switch to the same label when the user clicks on a tab. Add the
following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.theme]
    features = ["content.tabs.link"]

    ```

=== "`mkdocs.yml`"

    ``` yaml
    theme:
      features:
        - content.tabs.link
    ```

Content tabs are linked based on their label, not offset. This means that all
tabs with the same label will be activated when a user clicks a content tab
regardless of order inside a container. Moreover, this feature is fully
integrated with [instant navigation] and persisted across page loads.

  [instant navigation]: ../setup/navigation.md#instant-navigation

## Usage

### Group code blocks

Code blocks are one of the primary targets to be grouped, and can be considered
a special case of content tabs, as tabs with a single code block are always
rendered without horizontal spacing:

``` title="Content tabs with code blocks"
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```

<div class="result" markdown>

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

</div>

### Group other content

When a content tab contains more than one code block, it is rendered with
horizontal spacing. Vertical spacing is never added, but can be achieved
by nesting tabs in other blocks:

``` title="Content tabs"
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```

<div class="result" markdown>

=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

</div>

### Embed content

When [SuperFences] is enabled, content tabs can contain arbitrary nested
content, including further content tabs, and can be nested in other blocks like
[admonitions] or blockquotes:

``` title="Content tabs in admonition"
!!! example

    === "Unordered List"

        ``` markdown
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci
        ```

    === "Ordered List"

        ``` markdown
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
        ```
```

<div class="result" markdown>

!!! example

    === "Unordered List"

        ``` markdown
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci
        ```

    === "Ordered List"

        ``` markdown
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
        ```

</div>

  [admonitions]: admonitions.md
