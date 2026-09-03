---
icon: lucide/package-open
tags:
  - Usage
  - Setup
---

# New project

You can create a new project from the command line using the `zensical new`
command. Provide a path as an argument to create the project in that directory,
or omit it to use the current working directory. If you specify a path that
does not yet exist, it will be created for you.

## Usage

``` sh
zensical new [OPTIONS] [PROJECT_DIRECTORY]
```

The directory structure created within the project directory consists of:

``` sh
.
├─ .github/workflows
│  └─ docs.yml
├─ docs/
│  ├─ index.md
│  └─ markdown.md
└─ zensical.toml
```

- The `zensical.toml` file serves as the project's configuration and can be
  customized following the instructions in the [setup guides].

- The `docs` directory contains your documentation's sources. The provided
  `index.md` and `markdown.md` files are included as starting points. The
  directory can be changed via [`docs_dir`][docs_dir].

- The `.github` folder contains a GitHub Actions workflow that helps to
  automatically build and [publish your documentation] site to [GitHub Pages].
  You can modify the workflow to suit your own CI/CD needs, or remove the folder
  entirely if you use a different platform.

!!! note "Use in existing projects"

    Note that the `zensical new` command will not overwrite existing files.
    It will return with an error if a `zensical.toml` file already exists.
    If other files to be written already exist then the command will simply
    leave them untouched.

## Options

You can run `zensical new --help` to get command-line help for the `new`
command. Apart from this, the `new` command does not have any additional
options at the moment.

[docs_dir]: ../setup/basics.md#docs_dir
[GitHub Pages]: ../publish-your-site.md#github-pages
[publish your documentation]: ../publish-your-site.md
[setup guides]: ../setup/basics.md
