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
    [Python website]. Modern Python distributions include the `pip` package
    manager, so unless you are developing Python software and use `uv`, this is
    the simplest option to install Zensical on your system.

  [with-pip]: #install-with-pip
  [with-uv]: #install-with-uv
  [Python Setup and Usage]: https://docs.python.org/3/using
  [Python website]: https://www.python.org/
  [virtual environment]: https://realpython.com/what-is-pip

!!! tip "Use with Docker"
    If you are familiar with Docker and wish to use Zensical in a container then
    you can use our [official Docker image]. For installation and usage
    instructions, see the documentation on Docker Hub.

[official Docker image]: https://hub.docker.com/r/zensical/zensical

### Install with pip { data-toc-label="with pip" }

Zensical can be installed into a virtual environment[^venv] with `pip`.

[^venv]: A [Python virtual environment] is a folder in your project directory that
    contains its own copy of Python and any Python packages the project needs.
    By installing Zensical and its dependencies into a virtual environment you
    ensure that it does not interfere with other projects on your computer that
    also use Python.

  [Python virtual environment]: https://docs.python.org/3/tutorial/venv.html

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

    ```ps1
    python -m venv .venv  # (1)!
    .venv\Scripts\activate
    pip install zensical
    ```

    1.  Depending on your Python installation, you may need to use a different
        binary name such as `python3` or use `py -3`.

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
[`uv`][uv] as a package and project manager, which has become popular in recent
years.

To install Zensical with `uv` and add it to your development dependencies in
your `pyproject.toml`, use:

  [uv]: https://docs.astral.sh/uv/

```
uv init
uv add --dev zensical
uv run zensical
```

Note that when using Zensical as a project dependency, you need to always either
use `uv run` or activate the project's virtual environment manually.

!!! tip "Running as a `uv` tool"
    We recommend always running Zensical from a project virtual environment to
    make sure the version used is well defined. However, `uv` can also run
    Zensical as a tool with a one-liner. See the [`uv` documentation][uvtool]
    for details.

  [uvtool]: https://docs.astral.sh/uv/concepts/tools/#tool-environments


!!! tip "Other tools using PyPI"
    There are, of course, other dependency managers and build tools in the
    Python ecosystem that use PyPI as the repository. Installing Zensical with
    them should be similar to the process of installing with `uv`. Refer to
    their documentation for details.

## Third-party distributions

There are other distributions that make Zensical available but they may or may
not use the official packages we distribute exclusively through PyPI. You can
use these distributions if you have good reasons to do so but for normal use we
recommend the installation methods above that we officially support.


### Install with Anaconda/Mamba { data-toc-label="Anaconda/Mamba" }

Zensical is available in the [conda-forge] community repository so that it can
be installed using [Anaconda] or [Mamba].

  [conda-forge]: https://conda-forge.org/
  [Anaconda]: https://www.anaconda.com
  [Mamba]: https://mamba.readthedocs.io

!!! warning
    We cannot provide support for distributions we do not control. If you
    experience any issues please contact the maintainers of
    [conda-forge/zensical-feedstock].

  [conda-forge/zensical-feedstock]: https://github.com/conda-forge/zensical-feedstock

=== ":material-apple: macOS"
    ```
    conda create -n zensical python=3.14
    conda activate zensical
    conda install -c conda-forge zensical
    ```

=== ":fontawesome-brands-windows: Windows"

    If you are using Anaconda or Mamaba, make sure that the base environment is
    activated. If you are using Anaconda, you can just open an [Anaconda
    Prompt]. If you installed Mamba as part of [Miniforge], there will be an
    equivalent Miniforge Prompt.

    ```
    conda create -n zensical python=3.14
    conda activate zensical
    conda install -c conda-forge zensical
    ```

=== ":material-linux: Linux"
    ```
    conda create -n zensical python=3.14
    conda activate zensical
    conda install -c conda-forge zensical
    ```

[Anaconda Prompt]: https://www.anaconda.com/docs/reference/glossary#anaconda-prompt
[Miniforge]: https://conda-forge.org/download/
