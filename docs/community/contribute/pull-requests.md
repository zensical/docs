---
icon: lucide/git-pull-request-create
---
# Pull requests


The process and requirements we describe below serve as important guardrails
that are essential to running an Open Source project and help us prevent wasted
effort and ensure the integrity of the codebase. This is more important than
ever as the number of attacks on Open Source projects by malicious actors and
the amount of AI slop both increase.

## Before you start

Before you start work on a pull request (PR), we need you to open an issue and
discuss it with us so we know what you are working on and so we can agree on the
approach to take. This prevents you from spending time on a feature that may not
align with the project's goals. You then reference the issue number in your PR
to link back to our discussion.

## Styles and linting

It is important that your edits produce clean commits that can be reviewed
quickly and without distractions caused by spurious diffs caused by format
changes that conflict with the style we use. The projects use the following
styling and linting tools and you must make sure that you follow the configured
styles and rules:

| Language   | Tool                | Notes                        |
| :--------- | :------------------ | :--------------------------- |
| Rust       | [rustfmt]           | Code formatting              |
| Rust       | [clippy]            | Linting                      |
| Python     | [ruff]              | Linting and code formatting  |
| Python     | [mypy]              | Type checking                |
| Typescript | [typescript-eslint] | Linting                      |

  [rustfmt]: https://rust-lang.github.io/rustfmt
  [clippy]: https://doc.rust-lang.org/stable/clippy/usage.html
  [ruff]: https://docs.astral.sh/ruff/
  [mypy]: https://www.mypy-lang.org/
  [typescript-eslint]: https://typescript-eslint.io/

In addition, we use an [.editorconfig] file that configures compatible editors to
behave the same way for tasks like removing trailing whitespace or applying
indentation styles. Please check if your editor honors editorconfig settings [by
default] or [requires a plugin]. If you also add plugins for the style checkers
and linters then this should help to make sure that the diffs in your commits
are minimal and focused on the intended changes.

  [.editorconfig]: https://editorconfig.org/
  [by default]: https://editorconfig.org/#pre-installed
  [requires a plugin]: https://editorconfig.org/#download

## Verified commits

To ensure the integrity of our projects, we require [verified commits] that are  cryptographically signed. For this to work, you need to install the _public_ key of a keypair into your GitHub account. Follow the instructions on GitHub for using [gpg], [ssh], [s/mime] keypairs.

  [verified commits]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification
  [gpg]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#gpg-commit-signature-verification
  [ssh]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification
  [s/mime]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#smime-commit-signature-verification

## Developer certificate of origin

To ensure the legal integrity of our project, we require all contributors to
_sign off_ on their commits, thus accepting the Developer Certificate of Origin.
This certifies that you have the right to submit the code under the project's
license.

You must add a `Signed-off-by` line to every commit message, which git will
automatically do for you when you provide the `-s` command line flag:

```
git commit –s -m "
<type>: <summary description> (#<issue number>)
"
```

If your commit contains co-authors denoted by the `Co-authored-by` trailer, you
confirm that, by signing off, you have obtained confirmation and consent from
each co-author that their contribution complies with the Developer Certificate
of Origin (DCO), and that you are authorized to submit the contribution on their
behalf.

## Use of Generative AI

AI-assisted coding can be useful but the unreflected inclusion of AI-generated
code can also do great harm. By signing off on commits, you attest that you have
either written all the code yourself or have thoroughly reviewed and fully
understood any generated code.

Code contributions that contain obviously AI-generated code that you cannot
fully explain to us will be rejected. We must ensure, after all, that the
contribution does not contain bugs or malicious code, and that we can commit to
maintaining it in the future.

## Commit message standards

We follow the [Conventional Commits] specification, with automatically computed
scopes for changes derived from the structure of the project or from
configuration. This helps us automate our release notes and versioning. Each
commit message must follow this structure:

  [Conventional Commits]: https://www.conventionalcommits.org/

```
<type>: <summary description> (#<issue number>)

Signed-off-by: ...
```

Note that we require PRs to be [linked to an issue] that has been discussed with
us. We also [require sign-off] with every commit of the [Developer Certificate
of Origin].

  [linked to an issue]: #before-you-start
  [require sign-off]: #developer-certificate-of-origin
  [Developer Certificate of Origin]: https://developercertificate.org

Please note that summaries of commits accepted into the master branch are
published in our [changelog] when we release new versions. To ensure consistent
formatting, we automatically check commit messages in our CI setup. The commit
types we support are listed in the table below. The CI job checks that:

  [changelog]: https://github.com/zensical/zensical/releases

* An accepted commit type is used, e.g. `fix` or `feature`.
* The commit summary does not contain additional whitespace: preceding, trailing,
  between type and colon, or double whitespace between the colon and the commit
  summary.
* The commit summary starts with lowercase and does not end with punctuation (it
  is not a full sentence), as recommended by the Conventional Commits
  specification.
* The commit summary is followed by the issue number in parentheses (with no
  whitespace inside).

<figure markdown>

| Type          | Description                                     |
| :------------ | :---------------------------------------------- |
| `feature`     | Implements a new feature                        |
| `fix`         | Fixes a bug                                     |
| `performance` | Improves performance                            |
| `refactor`    | Improves code without changing behavior         |
| `build`       | Makes changes to the build or CI system         |
| `docs`        | Adds or improves documentation                  |
| `style`       | Makes stylistic changes only (e.g. whitespace)  |
| `test`        | Adds or improves tests                          |
| `chore`       | Updates build process, prepares releases, etc.  |

  <figcaption>Accepted commit types</figcaption>
</figure>
