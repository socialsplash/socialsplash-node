# SocialSplash

Helper package to generate your images through SocialSplash API.

## Installation

```bash
npm install socialsplash
```

## Usage

```js
import SocialSplash from 'socialsplash'

const splash = new SocialSplash({
  apiKey: '<your-api-key>',
  apiDomain: '<your-domain>',
  urlDomain: '<your-domain>',
})

const url = splash.url('<template uuid>', {
  title: 'My title',
  description: 'Hello world'
})

const url = splash.signedUrl('<template uuid>', {
  title: 'My title',
  description: 'Hello world'
})

const buffer = splash.image('<template uuid>', {
  title: 'My title',
  description: 'Hello world'
})

const url = splash.signedImage('<template uuid>', {
  title: 'My title',
  description: 'Hello world'
})
```

### Examples

#### Generating an image with a public template

```js
import { SocialSplash } from 'socialsplash'

const splash = new SocialSplash()
```