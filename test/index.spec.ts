import { SocialSplash } from '../src/index'

describe('SocialSplash', () => {
  it('should be able to create an instance without any options', () => {
    const splash = new SocialSplash()
    expect(splash).toBeInstanceOf(SocialSplash)
  })

  describe('url', () => {
    it('should be able to generate an image with default options', () => {
      const splash = new SocialSplash()
      const url = splash.url('test-template-uuid')
      expect(url).toEqual('https://api.socialsplash.xyz/test-template-uuid')
    })

    it('should be able to generate an image with variables', () => {
      const splash = new SocialSplash()
      const url = splash.url('uuid-with-variables', {
        name: 'John Doe',
        age: 42
      })
      expect(url).toEqual('https://api.socialsplash.xyz/uuid-with-variables?name=John+Doe&age=42')
    })

    it('should be able to generate an image with custom domain', () => {
      const splash = new SocialSplash({
        urlDomain: 'https://socialspla.sh'
      })

      const url = splash.url('uuid-with-variables', {
        title: 'Hello wolrd',
      })
      expect(url).toEqual('https://socialspla.sh/uuid-with-variables?title=Hello+wolrd')
    })
  })

  describe('signed url', () => {
    it('should throw an error if trying to generate signed url without api key', () => {
      expect(() => {
        const splash = new SocialSplash()
        splash.signedUrl('test-template-uuid')
      }).toThrowError('An API key is required to generate a signed URLs')
    })

    it('should be able to generate a signed url with default options', () => {
      const splash = new SocialSplash({
        apiKey: 'test-api-key'
      })

      const url = splash.signedUrl('test-template-uuid')
      expect(url).toEqual('https://api.socialsplash.xyz/test-template-uuid?signature=08779f3669c10a167d61ddff7da08decf9e563511f32ee25e3f23b9d6428aa07')
    })

    it('should be able to generate a signed url with variables', () => {
      const splash = new SocialSplash({
        apiKey: 'test-api-key'
      })

      const url = splash.signedUrl('test-template-uuid', {
        title: 'Hello world'
      })
      expect(url).toEqual('https://api.socialsplash.xyz/test-template-uuid?title=Hello+world&signature=2e8c4c764f312a5ae505fb25d5005feced28aaf7857954c356beb2781d5b3aa7')
    })

    it('should be able to generate a signed url with custom domain', () => {
      const splash = new SocialSplash({
        apiKey: 'test-api-key',
        urlDomain: 'https://socialspla.sh'
      })

      const url = splash.signedUrl('test-template-uuid', {
        title: 'Hello world'
      })
      expect(url).toEqual('https://socialspla.sh/test-template-uuid?title=Hello+world&signature=2e8c4c764f312a5ae505fb25d5005feced28aaf7857954c356beb2781d5b3aa7')
    })
  })

  it('should be ok', () => {
    expect(true).toBeTruthy()
  })
})
