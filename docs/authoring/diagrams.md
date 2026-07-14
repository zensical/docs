---
icon: lucide/network
tags:
  - Authoring
  - Integrations
---

# Diagrams

Diagrams help to communicate complex relationships and interconnections between
different technical components, and are a great addition to project
documentation. Zensical integrates with [Mermaid.js], a very popular and
flexible solution for drawing diagrams.

## Configuration

This configuration enables native support for [Mermaid.js] diagrams. Zensical
will automatically initialize the JavaScript runtime when a page includes a
`mermaid` code block:

=== "`zensical.toml`"

    ``` toml
    [project.markdown_extensions]
    pymdownx.superfences = {
        custom_fences = [
            {
                name = "mermaid",
                class = "mermaid",
                format = "pymdownx.superfences.fence_code_format",
            },
        ],
    }
    ```

=== "`mkdocs.yml`"

    ``` yaml
    markdown_extensions:
      - pymdownx.superfences:
          custom_fences:
            - name: mermaid
              class: mermaid
              format: !!python/name:pymdownx.superfences.fence_code_format
    ```

No further configuration is necessary. Advantages over a custom integration:

- [x] Works with [instant navigation] without any additional effort
- [x] Diagrams automatically use fonts and colors defined in the configuration[^1]
- [x] Fonts and colors can be customized with [additional style sheets]
- [x] Support for both, light and dark color schemes – _try it on this page!_

## Usage

### Use flowcharts

[Flowcharts] are diagrams that represent workflows or processes. The steps
are rendered as nodes of various kinds and are connected by edges, describing
the necessary order of steps:

```` markdown title="Flow chart"
``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```
````

<div class="result" markdown>

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

</div>

### Use sequence diagrams

[Sequence diagrams] describe a specific scenario as sequential interactions
between multiple objects or actors, including the messages that are exchanged
between those actors:

```` markdown title="Sequence diagram"
``` mermaid
sequenceDiagram
  autonumber
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```
````

<div class="result" markdown>

``` mermaid
sequenceDiagram
  autonumber
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

</div>

### Use state diagrams

[State diagrams] are a great tool to describe the behavior of a system,
decomposing it into a finite number of states, and transitions between those
states:

```` markdown title="State diagram"
``` mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```
````

<div class="result" markdown>

``` mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

</div>

### Use class diagrams

[Class diagrams] are central to object oriented programming, describing the
structure of a system by modelling entities as classes and relationships between
them:

```` markdown title="Class diagram"
``` mermaid
classDiagram
  Person <|-- Student
  Person <|-- Professor
  Person : +String name
  Person : +String phoneNumber
  Person : +String emailAddress
  Person: +purchaseParkingPass()
  Address "1" <-- "0..1" Person:lives at
  class Student{
    +int studentNumber
    +int averageMark
    +isEligibleToEnrol()
    +getSeminarsTaken()
  }
  class Professor{
    +int salary
  }
  class Address{
    +String street
    +String city
    +String state
    +int postalCode
    +String country
    -validate()
    +outputAsLabel()
  }
```
````

<div class="result" markdown>

``` mermaid
classDiagram
  Person <|-- Student
  Person <|-- Professor
  Person : +String name
  Person : +String phoneNumber
  Person : +String emailAddress
  Person: +purchaseParkingPass()
  Address "1" <-- "0..1" Person:lives at
  class Student{
    +int studentNumber
    +int averageMark
    +isEligibleToEnrol()
    +getSeminarsTaken()
  }
  class Professor{
    +int salary
  }
  class Address{
    +String street
    +String city
    +String state
    +int postalCode
    +String country
    -validate()
    +outputAsLabel()
  }
```

</div>

### Use entity-relationship diagrams

An [entity-relationship diagram] is composed of entity types and specifies
relationships that exist between entities. It describes inter-related things in
a specific domain of knowledge:

```` markdown title="Entity-relationship diagram"
``` mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  LINE-ITEM {
    string name
    int pricePerUnit
  }
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
````

<div class="result" markdown>

``` mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  LINE-ITEM {
    string name
    int pricePerUnit
  }
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

</div>

### Other diagram types

Besides the diagram types listed above, [Mermaid.js] provides support for [pie
charts], [gantt charts], [user journeys], [git graphs] and [requirement
diagrams], all of which are not officially supported by Zensical. Those diagrams
should still work as advertised by [Mermaid.js], but we don't consider them a
good choice, mostly as they don't work well on mobile.

## Customization

If you want to customize Mermaid.js, e.g. to bring in support for [ELK layouts],
you can do so by adding a custom JavaScript file to your configuration:

=== "`docs/javascripts/mermaid.mjs`"

    ``` js
    import mermaid from 'https://unpkg.com/mermaid@11/dist/mermaid.esm.min.mjs';
    import elkLayouts from 'https://unpkg.com/@mermaid-js/layout-elk@0.2/dist/mermaid-layout-elk.esm.min.mjs';

    mermaid.registerLayoutLoaders(elkLayouts);
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      layout: "elk",
    });

    // Important: necessary to make it visible to Zensical
    window.mermaid = mermaid;
    ```

=== "`zensical.toml`"

    ``` toml
    [project]
    extra_javascript = ["javascripts/mermaid.mjs"]
    ```

=== "`mkdocs.yml`"

    ``` yaml
    extra_javascript:
      - javascripts/mermaid.mjs
    ```

[^1]: While all [Mermaid.js] features should work out-of-the-box, Zensical will currently only adjust the fonts and colors for flowcharts, sequence diagrams, class diagrams, state diagrams and entity relationship diagrams. See the section on [other diagrams] for more information why this is currently not implemented for all diagrams.

[additional style sheets]: ../customization.md#additional-css
[Class diagrams]: https://mermaid.js.org/syntax/classDiagram.html
[ELK layouts]: https://www.npmjs.com/package/@mermaid-js/layout-elk
[entity-relationship diagram]: https://mermaid.js.org/syntax/entityRelationshipDiagram.html
[Flowcharts]: https://mermaid.js.org/syntax/flowchart.html
[gantt charts]: https://mermaid.js.org/syntax/gantt.html
[git graphs]: https://mermaid.js.org/syntax/gitgraph.html
[instant navigation]: ../setup/navigation.md#instant-navigation
[Mermaid.js]: https://mermaid.js.org/
[other diagrams]: #other-diagram-types
[pie charts]: https://mermaid.js.org/syntax/pie.html
[requirement diagrams]: https://mermaid.js.org/syntax/requirementDiagram.html
[Sequence diagrams]: https://mermaid.js.org/syntax/sequenceDiagram.html
[State diagrams]: https://mermaid.js.org/syntax/stateDiagram.html
[user journeys]: https://mermaid.js.org/syntax/userJourney.html
