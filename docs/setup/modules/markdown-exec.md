---
icon: lucide/cog
tags:
  - Modules
---

# Markdown Exec

This page documents Zensical's native replacement for
[`markdown-exec`][markdown-exec], created by [Timothée Mazzucotelli].

## Objective

### How it works

Markdown Exec runs supported fenced code blocks while building the site and
inserts the resulting output into the page. It supports Python, shell commands,
Pyodide, and directory trees, with output rendered as Markdown or raw HTML. The
output comes directly from the code block, so rebuilding the site reruns the
code and updates the displayed result when the example changes.

!!! warning "Executes arbitrary code at build time"

    Markdown Exec runs the code in your fenced code blocks when the site is
    built.  Only enable it for content you trust, and treat it the same way you
    would treat any other build script with access to your project.

### When to use it

Use Markdown Exec when documentation benefits from generated examples, live
command output, or content derived from executable code. It is especially useful
when the output should stay synchronized with the example or source data. Since
code runs during the build, use it only with trusted content.

## Installation

Markdown Exec is not included with Zensical by default, so it needs to be installed separately.

=== "with `pip`"

    ``` sh
    pip install "markdown-exec[ansi]"
    ```

=== "with `uv`"

    ``` sh
    uv add "markdown-exec[ansi]"
    ```

The `ansi` extra adds the pieces needed to render ANSI colors in HTML code blocks, which is useful for shell output.

## Configuration

Markdown Exec relies on the [SuperFences] extension, which is enabled by
default in Zensical. Configure Markdown Exec as a plugin:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.markdown-exec]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - markdown-exec
    ```

Enabling it via the plugin, rather than by hand-listing custom fences under `pymdownx.superfences`, is the recommended path: it registers a fence for every supported language and takes care of adding any extra CSS or JS assets a fence needs, such as the ANSI stylesheet.

## Usage

Add the `exec="on"` option to a fenced code block to run it and render its output instead of the source:

```` markdown
```python exec="on"
print("Hello Markdown!")
```
````

The `exec` option is true for any value except `0`, `no`, `off`, and `false` (case insensitive). To run every code block of a given language without adding `exec="on"` to each one, set the `MARKDOWN_EXEC_AUTO` environment variable before building the site:

``` sh
MARKDOWN_EXEC_AUTO=python,bash
```

By default, printed output is treated as Markdown and rendered accordingly. Set `html="on"` if the code already produces HTML that should be injected as is.

### Showing the source alongside the result

To render both the code and its output, add the `source` option:

```` markdown
```python exec="on" source="above"
print("I'm the result!")
```
````

Accepted values are `above`, `below`, `tabbed-left`, `tabbed-right`, `block`, and `console`. The tabbed and block styles depend on the [Tabbed] and [Markdown in HTML] extensions, both of which are on by default in Zensical.

### Interactive code blocks

Markdown Exec can generate interactive Python code blocks that can be edited and executed by the readers of your documentation. These code blocks are not executed at build time: they run on your reader's devices, client-side. The editing capabilities are provided thanks to the [Ace] editor. The Python code runs on the client device thanks to [Pyodide].

To create such interactive Python code blocks, create `pyodide` fences:

```` md
```pyodide
print("Hello world!")
```
````

This example will generate the following interactive code block. Try editing the code, then running it with ++ctrl+enter++ or by clicking "Run" in the top-right corner.

``` pyodide
print("Hello world!")
```

The first time a code block is executed on a just-loaded page, Pyodide is initialized, taking some time; next executions are faster.

### Further options

Markdown Exec has additional options for naming and prefixing generated HTML ids, persisting state between blocks with `session`, changing the console width or working directory, and more. The full list, with examples, is in the upstream documentation:

- [Options summary](https://pawamoy.github.io/markdown-exec/usage/#options-summary)
- [Pyodide usage](https://pawamoy.github.io/markdown-exec/usage/pyodide/)
- [Python usage](https://pawamoy.github.io/markdown-exec/usage/python/)
- [Shell usage](https://pawamoy.github.io/markdown-exec/usage/shell/)
- [Gallery of examples](https://pawamoy.github.io/markdown-exec/gallery/)

[Ace]: https://ace.c9.io/
[markdown-exec]: https://github.com/pawamoy/markdown-exec
[Markdown in HTML]: python-markdown.md#markdown-in-html
[Timothée Mazzucotelli]: https://github.com/pawamoy
[Pyodide]: https://pyodide.org/en/stable/
[SuperFences]: python-markdown-extensions.md#superfences
[Tabbed]: python-markdown-extensions.md#tabbed
