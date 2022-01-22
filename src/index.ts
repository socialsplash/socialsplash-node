import * as crypto from 'crypto'

const DEFAULT_OPTIONS = {
  urlDomain: 'https://api.socialsplash.xyz'
}

export type Options = {
  apiKey?: string
  urlDomain?: string
}

export type Variables = { [x: string]: any }

export class SocialSplash {
  #apiKey?: string
  #urlDomain: string

  constructor (options: Options = {}) {
    this.#apiKey = options.apiKey
    this.#urlDomain = options.urlDomain || DEFAULT_OPTIONS.urlDomain
  }

  get apiKey () {
    return this.#apiKey
  }

  get urlDomain () {
    return this.#urlDomain
  }

  private getParamsFromVariables (variables: Variables) {
    const params =  new URLSearchParams({})
    for (const variable in variables) {
      params.append(variable, variables[variable])
    }

    return params
  }

  url (templateUuid: string, variables: Variables = {}): string {
    const url = new URL(`${this.urlDomain}/${templateUuid}`)

    for (const variable in variables) {
      url.searchParams.append(variable, variables[variable])
    }

    return url.toString()
  }

  signedUrl (templateUuid: string, variables: Variables = {}): string {
    if (!this.apiKey) {
      throw new Error('An API key is required to generate a signed URLs')
    }

    const url = new URL(`${this.urlDomain}/${templateUuid}`)
    for (const variable in variables) {
      url.searchParams.append(variable, variables[variable])
    }

    const signature = crypto.createHmac('sha256', this.apiKey)
      .update(`${templateUuid}:${url.searchParams.toString()}`)
      .digest('hex')

    url.searchParams.append('signature', signature)

    return url.toString()
  }
}
