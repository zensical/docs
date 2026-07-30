---
icon: lucide/bug-play
---

# Reproduction

A reproduction is a simplified version of a bug that demonstrates the specific
scenario in which the bug occurred. It includes all necessary minimal settings
and instructions and should be as simple as possible while still demonstrating
the issue.

Issues containing a minimal reproduction have been solved within 24 hours in the
past which clearly shows that investing time in creating a reproduction is worth
the effort. What is more, the process of creating a reproduction can sometimes
already help identify where the problem lies, so you may not even need to file
a bug report if, for example, it is due to a mistake made in the configuration
or in a customization.

## Create a reproduction

### Set up an environment

The first step in producing a reproduction is to set up a _virtual environment_,
a dedicated Python environment that contains the most recent version of Zensical
and only those Python packages that are relevant to the issue you are
experiencing.  The process for setting up an environment and installing the
latest version of Zensical is described on our [Getting started] guide.

### Create new minimal project

To ensure that your reproduction does not contain any customizations you may
have in your project, please start with a fresh Zensical project by running:

``` bash
zensical new reproduction
cd reproduction
```

### Add only what is needed

Work through the configuration file and leave only those settings that are
required to reproduce the issue you are facing. Add just enough example content
to be able to show the behavior that you think is wrong. Repeat this step until
the bug you want to report can be observed.

### Document the environment

Document what packages are installed in your virtual environment by running:

=== "with `pip`"

    ```
    pip freeze > requirements.txt
    ```

=== "with `uv`"

    ```
    uv pip freeze > requirements.txt
    ```

### Double check to be sure

As a last step, before packing everything into a `.zip` file, double-check all
settings and documents if they are essential to the reproduction, which means
that the bug does not occur when they are omitted. Remove all non-essential
lines and files, especially the `site` directory.

### Pack up and submit

Pack up the project directory in a `.zip` file.

[Getting started]: ../../get-started.md
