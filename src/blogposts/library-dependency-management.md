---
title: "Dependency management for libraries"
date: "2020-03-08"
edited: "2020-03-08"
tags: ["Dependency management"]
---

Reading [JavaScript Weekly](https://javascriptweekly.com/) (which is a great source to stay up-to-date with JavaScript by the way!) I ran across the news that [Rollup has released its 2.0 version](https://github.com/rollup/rollup/releases/tag/v2.0.0). This caught my interest because it is what we use to bundle our shared component library at work.

I have however not been very involved in setting up the bundling, rather I have just been a recipient of the output, which has been working great most of the time.

For example, we can easily write a component, simple or complex, such as a Button component:

```javascript
import * as React from "react"
import classnames from "classnames"

import s from "./Button.module.scss"
import { IButtonType } from "./Button.types"

export const Button = ({
  attributes = {},
  children,
  customClass,
  disabled,
  icon,
  large = false,
  name,
  onClick,
  onMouseEnter,
  onMouseLeave,
  primary,
  secondary,
  submitType,
  tertiary,
  testSelector,
}: IButtonType) => (
  <button
    className={classnames(
      {
        [s.Primary]: primary,
        [s.Secondary]: secondary,
        [s.Tertiary]: tertiary,
        [s.Icon]: icon,
        [s.Large]: large,
        [s.Disabled]: disabled,
      },
      customClass
    )}
    disabled={disabled}
    data-testid={testSelector}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    name={name}
    type={submitType ? "submit" : "button"}
    {...attributes}
  >
    {children}
  </button>
)

export default Button
```

and by bundling and publishing the component library, consuming projects can use it by importing from a published npm package like so:

```javascript
import { Button } from "@internal-namespace/common-component-library"
```

Sharing a component library has alone been a great boost to productivity and cohesiveness as several projects now share a similar style and functionality on a component level.

## Third party dependency management

Inevitably, the components in the component library have their own dependencies. We would for example not get very far writing React components without depending on React.

As Jeff Wear explains very well, [it is not wise to bundle such common dependencies](https://engineering.mixmax.com/blog/rollup-externals/) that the library's consumers ought to have resolved on their own anyway. What do I mean by this? Well, an application importing React components from our component library ought to be have been depending on React even before it chose to import components from the library. If the library on the other hand assumes that the consumer does not necessarily have the dependency (React) installed in the application already, it may choose to bundle the dependency. In the case of React, this is most certainly a bad idea since is likely to duplicate React at the consumer.

Originally, this was not an issue to us. The library listed all of its dependencies as [external dependencies](https://rollupjs.org/guide/en/#external). By listing the dependencies as external, Rollup is instructed to not mind its inability to resolve the dependency, and rather leave it to the consuming application to explain how the dependency will be resolved (typically by having the dependency installed in the consuming application). At the point of the component library's initial setup, the list of external dependencies was known to the consumers, so they set up their dependency resolutions accordingly by installing the required packages and went on with their days.

For a couple of months, everything was fine. Components were added, tweaked, eventually removed, and nothing broke.

## New requirements

Eventually, we were faced with the requirement to implement a DatePicker. Not wanting to go down the route of developing our own DatePicker, we opted to use [React Datepicker](https://github.com/Hacker0x01/react-datepicker) (as its maintained, well documented and customizable to meet our needs). To this day I'm quite happy with this decision, even though there are plenty of tweaks remaining to make it fit our needs perfectly. Some things such as overriding the styles while using CSS Modules and having it be consistent across applications and Storybook was quite painful. More so due to my ignorance on the inner working of CSS Modules than anything else. Nonetheless, should you face similar trouble, I'll be happy to help!

Then, somewhat happy with the result after quite some time of tweaking styles and choosing which logic to expose to consuming applications, I released the new DatePicker component in a feature release, bumping the library's minor version and went on with my day.

## Wild breaking change appeared!

Not much later, everyone who opted in for the new version of the component library started having issues with their applications not building, due to an unresolved dependency. Care to guess which dependency that was? React Datepicker of course. As I mentioned, I was never too involved in setting up the bundling of the library and hence was not at all well versed with the way dependencies are resolved.

Writing this, I have a feeling that the consuming applications should not break unless they specifically import the Datepicker component. But they did indeed! If you know of a way to avoid this, I would happily take your advice.

Anyhow, this is when I started looking into how Rollup handles dependencies and realized that the only reason things were working smoothly was because the library and consumers had synced their dependencies carefully at the time of setup, then forgetting about it and going on with their work.

At this point, I grabbed the person who had written the bundling logic and had a discussion on how to solve this. It seemed to me that the consumers should not need to be aware of how the library implements the Datepicker, i.e. which underlying dependencies it relies upon. However, this somewhat opposes the original advice quoted from the Rollup article:

> As a rule of thumb, don't bundle dependencies. Rather list them as external and let the consumers choose how to resolve them.

## Conclusion

Writing this, I have come to conclude that there are essentially two types of dependencies which should be treated differently:

1. Common dependencies that the consumer is possibly expected to use for unrelated uses, hence resolved by the consumer (e.g. React).
2. Uncommon single-purpose dependencies which the consumer should never use on its own, as the library is providing a customized abstraction over it (e.g. React Datepicker).

There are most likely many cases in the grey zone, but this partioning serves as a reasonable starting point.

Writing this helped me to structure my thoughts and elicit a structured approach. Hope this was helpful to someone else out there as well! If so, or if you'd like to discuss something, feel free to reach out to me using contact methods in the footer.
