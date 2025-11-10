---
icon: lucide/cloud-upload
tags:
  - Get started
  - Publishing
---

# Publish your site

The great thing about hosting project documentation in a `git` repository is
the ability to deploy it automatically when new changes are pushed. Zensical
makes this ridiculously simple.

## GitHub Pages

If you're already hosting your code on GitHub, [GitHub Pages] is certainly
the most convenient way to publish your project documentation. It's free of
charge and pretty easy to set up.

  [GitHub Pages]: https://pages.github.com/

### with GitHub Actions

Using [GitHub Actions] you can automate the deployment of your project
documentation. At the root of your repository, create a new GitHub Actions
workflow, e.g. `.github/workflows/docs.yml`, and copy and paste the following
contents:

``` yaml
name: Documentation
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/configure-pages@v5
      - uses: actions/checkout@v5
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: pip install zensical
      - run: zensical build --clean # (1)!
      - uses: actions/upload-pages-artifact@v4
        with:
          path: site
      - uses: actions/deploy-pages@v4
```

1.  At the moment, we do not recommend using caches on CI systems as the caching
    functionality will undergo revisions as we optimize the performance of
    Zensical.

When a new commit is pushed to the branch you are using for deployment
(e.g. `master` or `main`), the static site is automatically built and
deployed. Push your changes to see the workflow in action.

Your documentation should shortly appear at `<username>.github.io/<repository>`.

  [GitHub Actions]: https://github.com/features/actions

## GitLab Pages

If you're hosting your code on GitLab, deploying to [GitLab Pages] can be done
by using the [GitLab CI] task runner. At the root of your repository, create a
task definition named `.gitlab-ci.yml` and copy and paste the following
contents:

``` yaml
pages:
  stage: deploy
  image: python:latest
  script:
    - pip install zensical
    - zensical build --clean # (1)!
  artifacts:
    paths:
      - public
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
```

1.  At the moment, we do not recommend using caches on CI systems as the caching
    functionality will undergo revisions as we optimize the performance of
    Zensical.

!!! warning "Prerequisites"
    Make sure to change [`site_dir`][site_dir] to `public` in your
    configuration as GitLab requires this.

When a new commit is pushed to the [default branch] (e.g. `master` or `main`),
the static site is automatically built and deployed. Push your changes to see
the workflow in action.

Your documentation is now published under `<username>.gitlab.io/<repository>`.

  [GitLab Pages]: https://gitlab.com/pages
  [GitLab CI]: https://docs.gitlab.com/ee/ci/
  [site_dir]: setup/basics.md#site_dir
  [default branch]: https://docs.gitlab.com/ee/user/project/repository/branches/default.html

## ReadTheDocs (RTD)
If you want Read the Docs to build and host your Zensical site, it works nicely — Read the Docs can either run a normal Sphinx/MkDocs-style build or completely run any build command you provide and host the resulting static HTML. Start by [importing your repository (via GitHub/GitLab/Bitbucket)](tps://docs.readthedocs.com/platform/stable/intro/add-project.html) and then tell Read the Docs how to build your site with a [.readthedocs.yaml](https://docs.readthedocs.com/platform/stable/config-file/v2.html) file. This YAML file tells RTD to create a Python environment, install Zensical, build the site, and copy the generated site into the directory RTD serves (_readthedocs/html/). Below is an example:

```yaml
version: 2

build:
  os: ubuntu-22.04
  tools:
    python: "3.12"
  commands:
    - pip install --upgrade pip
    - pip install zensical
    - zensical build --clean   # build into 'site' (default for zensical)
    # Copy build output to ReadTheDocs expected location
    - mkdir -p _readthedocs
    - cp -r site/ _readthedocs/html/

submodules:
  include: all
```

Once you push to your main branch, you can find all the documentation builds on RTD at `https://app.readthedocs.org/projects/<repository_name>/builds`
