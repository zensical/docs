---
icon: lucide/wifi-off
tags:
  - Setup
  - Offline
---

# Offline usage

In order to build documentation and either offer it as a download or ship it
with your product, Zensical can ensure that [site search] works even when
accessed from the file system.

## Configuration

The offline functionality makes sure that the [site search] works when you
distribute the contents of your [site directory] as a download. Simply add
the following lines to your configuration:

=== "`zensical.toml`"

    ``` toml
    [project.plugins.offline]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
      - offline
    ```

!!! info "Notes on our upcoming module system"

    We're working on a more comprehensive module system to manage functionality
    like this in a more flexible way. The fact that the scope is called
    `plugins` is a carry-over from Material for MkDocs and will be automatically
    replaced in a future version.

  [limitations]: #limitations
  [site search]: search.md
  [site directory]: basics.md#site_dir

The following settings are available:

`config.enabled`
: Use this setting to enable or disable the plugin when building your
  project.

=== "`zensical.toml`"

    ``` toml
    [project.plugins.offline]
    enabled = false
    ```

    There is no way to turn the offline functionality off or on
    based on an environment variable as in a `mkdocs.yml`. We are
    working towards [feature parity] and will be providing a more
    comprehensive system for managing [variants] in due course.

  [feature parity]: https://zensical.org/compatibility/features/
  [variants]: https://zensical.org/about/roadmap/#configuration

=== "`mkdocs.yml`"

    ``` yaml
    plugins:
    - offline:
        enabled: !ENV [OFFLINE, false]
    ```

#### Limitations

Zensical offers many interactive features, some of which will not
work from the file system due to the restrictions of modern browsers: all
features that use the `fetch` API will error.

Thus, when building for offline usage, make sure to disable the following
configuration settings: [instant navigation], [site analytics], [git repository],
and [comment systems].

  [instant navigation]: navigation.md#instant-navigation
  [Site analytics]: analytics.md
  [Git repository]: repository.md
  [Comment systems]: comment-system.md
