---
icon: lucide/play
tags:
  - Usage
---

# Usage

The general command line syntax for Zensical is:

``` sh
zensical COMMAND [OPTIONS] [ARGS]...
```

## Commands

- [`new`](new.md)
- [`build`](build.md)
- [`serve`](preview.md)

## Help

- General help: `zensical --help`
- Command-specific help: `zensical <command> --help`

## Compatibility with MkDocs

Zensical replaces `mkdocs` on the command line, but some command-line options
and commands are different. Review these differences when updating build and CI
scripts:

- The `build` and `serve` commands do not support `--theme` (`-t`). Zensical
  provides two built-in [theme variants][theme-variants]: `classic` and
  `modern`.
- The `build` and `serve` commands do not support `--use-directory-urls` or
  `--no-directory-urls`. Set [`use_directory_urls`][use-directory-urls] in the
  configuration file instead.
- The `--site-dir` option is not supported. Set [`site_dir`][site-dir] in the
  configuration file instead.
- The `serve` command ignores `--dirty`. Zensical uses caching to avoid
  rebuilding unchanged content.
- Zensical does not provide MkDocs' `gh-deploy` command. Use the relevant
  [publishing guide] for your hosting solution.
- Zensical does not provide the `get-deps` command. Declare explicit
  dependencies in `pyproject.toml` instead.

[publishing guide]: ../publish-your-site.md
[site-dir]: ../setup/basics.md#site_dir
[theme-variants]: ../setup/basics.md#theme-variant
[use-directory-urls]: ../setup/basics.md#use_directory_urls
