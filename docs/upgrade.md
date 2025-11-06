---
icon: lucide/clipboard-clock
tags:
  - Get started
---

# How to upgrade

Check the [changelog] to identify the version you would like to upgrade to.
Remember that Zensical uses [semantic versioning], so if you are upgrading
from one major release version to another, please carefully study the
information provided on [versioning] of Zensical.

[changelog]: https://github.com/zensical/zensical/blob/master/changelog.md
[semantic versioning]: https://semver.org/
[versioning]: #versioning

Once you are ready to proceed, follow the instructions according to how you
installed Zensical:

=== "with `pip`"

    Make sure you have the correct virtual environment activated that
    you want to upgrade, then:

    ```
    pip install --upgrade --force-reinstall zensical
    ```

    To show the currently installed version, use:

    ```
    pip show zensical
    ```

=== "with `uv`"

    With an existing lock file, uv will [stick to previous versions] until you
    explicitly upgrade them. Run the following, replacing `<version>` with the
    version you want to upgrade to.

    ```
    uv lock --upgrade-package zensical==<version>
    ```

    To show the currently installed version, use:

    ```
    uv pip show zensical
    ```

[stick to previous versions]: https://docs.astral.sh/uv/concepts/projects/sync/#upgrading-locked-package-versions

## Versioning

Zensical follows [semantic versioning] and currently uses **0.0.x versioning**
(alpha / development releases). We're approaching a **beta release**, after
which we'll transition to **0.x** versioning. Once we reach a stable 1.0 release,
the standard semantic versioning rules will apply more strictly.

[semantic versioning]: https://semver.org/
