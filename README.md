# Onboard UI

Spotlight onboarding component for React. Guide your users through your app with beautiful spotlight effects.

> Work in progress. Core functionality is stable.

## Installation
```bash
npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json
```
when resize it wont go or adjust
when clicking back it wont go back cause !targetElement return null need to do that it moves to the next element
main issue is now when it does not exist ok done but  now when we resize
## Usage
```jsx
import { useState } from 'react'
import Spotlight from '@/components/spotlight/Spotlight'

const steps = [
  {
    target: "#my-element",
    title: "Welcome",
    description: "This is where you start.",
    button: "Next"
  }
]

export default function App() {
  const [active, setActive] = useState(false)

  return (
    <div>
      <button id="my-element" onClick={() => setActive(true)}>
        Start Tour
      </button>

      {active && (
        <Spotlight
          steps={steps}
          onFinish={() => setActive(false)}
        />
      )}
    </div>
  )
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| steps | array | yes | Array of tour steps |
| onFinish | function | yes | Called when tour ends or is skipped |
| spotlightStyle | object | no | Override spotlight styles |
| popoverStyle | object | no | Override popover card styles |

## Step Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| target | string | yes | CSS selector of element to highlight |
| title | string | yes | Popover heading |
| description | string | yes | Popover body text |
| button | string | no | Button label, defaults to Next |

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `→` | Next step |
| `←` | Previous step |
| `Esc` | Close tour |

## Customization

Override default styles using CSS variables:
```css
[data-spotlight] {
  --onboard-popover-bg: white;
  --onboard-popover-fg: black;
  --onboard-popover-radius: 8px;
  --onboard-spotlight-shadow: 0 0 0 9px rgba(0,0,0,0.5);
}
```

## Live Demo

[onboard-uii.vercel.app](https://onboard-uii.vercel.app)

## License

MIT
