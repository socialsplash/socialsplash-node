import { SocialSplash } from './../dist/index.mjs'

const splash = new SocialSplash({
  apiKey: '213b1759e1a4a37dcef69ec5a2609800385216e537142617593695b6a85d08b0',
  urlDomain: 'http://localhost:3003'
})

const url = splash.url('b93a6ded-a693-480f-8f07-63e4483d25e9', {
  title: 'Hello World'
})

const signedImage = splash.signedUrl('b93a6ded-a693-480f-8f07-63e4483d25e9', {
  title: 'Hello World'
})

console.log('URL', url)
console.log('SIGNED URL', signedImage)
