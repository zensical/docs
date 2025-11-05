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

