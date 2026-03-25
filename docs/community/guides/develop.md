---
icon: lucide/hammer
---

# Set up a development environment

We are providing instructions below to get you up and running if you want to
build Zensical yourself and if you want to contribute to its development.

!!! warning "Raise an issue before creating a pull request!"

    Zensical is evolving rapidly and while we work hard to keep the user
    experience stable, the implementation is still changing a lot. Since the
    grounds are shifting fast, you must open an issue before you create a pull
    request so that we can discuss what you want to work on. You must also read
    the page on [pull requests], which provides further guidance.

  [pull requests]: ../contribute/pull-requests.md

## Prerequisites

Zensical consists of a number of projects, each with its own repository.
Depending on which component you want to work on, you will need to install
different development tools.

To be able to build Zensical, you need to have the following installed:

- [the `uv` package and project manager][uv]
- a [Rust toolchain]
- [Python]

  [uv]: https://docs.astral.sh/uv/
  [Rust toolchain]: https://rust-lang.org/tools/install/
  [Python]: https://www.python.org/

To build the templates, CSS, and TypeScript from the [UI repository], you will
need these additional dependencies:

- [Node.js]

  [UI repository]: https://github.com/zensical/ui
  [Node.js]: https://nodejs.org

## Development setup

To build Zensical, you need to:

1. Check out the code from the [zensical repository] or from your own fork if
   you are making a [pull request]:

  [zensical repository]: https://github.com/zensical/zensical/
  [pull request]: ../contribute/pull-requests.md

    ```
    git clone https://github.com/zensical/zensical.git
    ```

2. Run `uv sync` in the project directory to download and install the
   dependencies into the project's virtual environment.

3. Install the theme content by cloning the [UI repository] and making sure that
   the contents of the `dist` directory appear under `python/zensical/templates`
   in the Zensical project workspace:


    === ":material-apple: macOS"

        ```
        git clone https://github.com/zensical/ui.git
        ln -s ../../../ui/dist zensical/python/zensical/templates
        ```

    === ":material-linux: Linux"

        ```
        git clone https://github.com/zensical/ui.git
        ln -s ../../../ui/dist zensical/python/zensical/templates
        ```

    === ":fontawesome-brands-windows: Windows (cmd.exe)"

        ```
        git clone https://github.com/zensical/ui.git
        mklink zensical\python\zensical\templates ui\dist
        ```

        __Note:__ You need the permission to create symbolic links to do this on
        Windows.

    === ":fontawesome-brands-windows: Windows (Powershell)"

        ```
        git clone https://github.com/zensical/ui.git
        New-Item -Type SymbolicLink -Path zensical\python\zensical\templates -Target ui\dist
        ```

        __Note:__ You need the permission to create symbolic links to do this on
        Windows.

## Building Zensical

With these preparations out of the way, you can build Zensical by running:

```
uv run maturin develop
```

## Running Zensical

To run Zensical within its own project folder, you can use `uv run zensical`.
Alternatively, activate the project virtual environment so you can just run
`zensical` and run it in other directories.

If you want to install your compiled version of Zensical in another project,
activate its virtual environment and run `pip install -e
/path/to/zensical/project`.

## Building the themes

To build the themes (modern and classic), change into the project directory for
the UI repository and run:

```
npm install
npm run build
```

Since the `dist` directory is symlinked into the Zensical project, the build
artifacts will be immediately picked up by any new runs of Zensical.
