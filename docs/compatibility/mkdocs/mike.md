---
icon: lucide/layers-plus
---

# Versioning with mike

If your MkDocs project already uses [mike], you can keep its versioned
deployment workflow while adopting Zensical. [Our fork] keeps the existing
configuration and `mike` commands working, so you don't need to redesign your
versioning setup as part of the transition.

This integration is transitional. We will maintain the fork until Zensical
provides [native versioning support], which will support more deployment targets
and versioning strategies.

## Installation

Install the Zensical-compatible fork with `pip`:

``` sh
pip install git+https://github.com/squidfunk/mike.git
```

This provides the same `mike` command as the original package.

!!! info "Transitional compatibility"

    The fork is installed directly from GitHub and requires `git`. It is based
    on mike 2.2.0 and receives compatibility fixes, but no new features.

## Configuration

Keep your existing `mkdocs.yml`. To enable the version selector, continue using
the same configuration as with Material for MkDocs:

``` yaml
extra:
  version:
    provider: mike
```

Existing settings for the default version and visible aliases, as well as
customizations of the outdated-version warning, continue to work.

Please refer to the [Material for MkDocs versioning guide] for those settings.

## Usage

You can keep the current MkDocs deployment in place while testing the same
versioning setup with Zensical. Switch the build environment and deployment
workflow only after you have verified the generated versions, aliases, and
redirects.

[Material for MkDocs versioning guide]: https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/
[mike]: https://github.com/jimporter/mike
[native versioning support]: https://zensical.org/about/roadmap/#versioning
[Our fork]: https://github.com/squidfunk/mike
