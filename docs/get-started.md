---
icon: lucide/package-open
tags:
  - Get started
  - Setup
---

# Get started

Zensical is a modern static site generator designed to simplify building and maintaining project documentation. It's built by the creators of [Material for
MkDocs] and shares the same core design principles and philosophy – batteries included, easy to use, with powerful customization options.

_You can learn more about how both projects interconnect with each other [here]._

[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/
[here]: https://zensical.org/about

## Installation

Zensical is written in Rust and Python, and is published as a [Python package].
We  recommend to use a Python _virtual environment_ when installing [with
`pip`][with-pip] or [with `uv`][with-uv]. Both options automatically install all
necessary dependencies alongside Zensical.

[Python package]: https://pypi.org/project/zensical

!!! note "Prerequisites"
    You need to have Python and a Python package manager installed on your
    system before you install Zensical. We recommend you follow the [Python
    Setup and Usage] instructions for your operating system provided on the
    [Python website].  Modern Python distributions include the `pip` package
    manager, so unless you are developing Python software and use `uv`, this is
    the simplest option to install Zensical on your system.

  [with-pip]: #install-with-pip
  [with-uv]: #install-with-uv
  [Python Setup and Usage]: https://docs.python.org/3/using
  [Python website]: https://www.python.org/
  [virtual environment]: https://realpython.com/what-is-pip

### Install with pip { data-toc-label="with pip" }

Zensical can be installed into a virtual environment with `pip`.

=== ":material-apple: macOS"
    Open up a terminal window and install Zensical by first setting up a virtual
    environment and then using `pip` to install the Zensical package into it:

    ``` sh
    python3 -m venv .venv
    source .venv/bin/activate
    pip install zensical
    ```

=== ":fontawesome-brands-windows: Windows"
    Open up a Command Window and install Zensical by first setting up a virtual
    environment and then using `pip` to install the Zensical package into it:

    ```
    python3 -m venv .venv
    .venv\Scripts\activate
    pip install zensical
    ```

=== ":material-linux: Linux"
    Open up a terminal window and install Zensical by first setting up a virtual
    environment and then using `pip` to install the Zensical package into it:

    ``` sh
    python3 -m venv .venv
    source .venv/bin/activate
    pip install zensical
    ```

  [upgrade to the next major version]: upgrade.md
  [Python Markdown]: https://python-markdown.github.io/
  [Pygments]: https://pygments.org/
  [Python Markdown Extensions]: https://facelessuser.github.io/pymdown-extensions/
  [Using Python's pip to Manage Your Projects' Dependencies]: https://realpython.com/what-is-pip/

### Install with uv { data-toc-label="with uv" }

If you are developing software using Python, chances are you're already using
[`uv`][uv] as a package manager, which has become popular in recent years. To
install Zensical with `uv`, use:

[uv]: https://docs.astral.sh/uv/

=== ":material-apple: macOS"

    ```
    uv init
    uv add zensical
    ```

=== ":fontawesome-brands-windows: Windows"

    ```
    uv init
    uv add zensical
    ```

=== ":material-linux: Linux"

    ```
    uv init
    uv add zensical
    ```

