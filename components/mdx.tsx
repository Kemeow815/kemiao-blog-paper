import { runSync } from '@mdx-js/mdx'
import { Fragment } from 'react'
import * as prod from 'react/jsx-runtime'
import { MDImg, memoTag } from '../components/markdown'

/**
 * @param code function string
 * see https://mdxjs.com/packages/mdx/#runoptions
 * see https://mdxjs.com/packages/mdx/#runcode-options
 */
function convertBack(code: string) {
  const runOptions = {
    Fragment: Fragment,
    ...prod,
    baseUrl: import.meta.url
  }

  const mdxModule = runSync(code, runOptions) // support ssg, but there is an impact on fcp when ISR/SSR
  return mdxModule
}

export function useMdxPost(code: string) {
  const mdxModule = convertBack(code)
  const components = {
    img: MDImg
  }

  return <mdxModule.default components={components} />
}

export function useMdxMemo(code: string, searchHandler: (text: string, immediateSearch?: boolean) => void) {

  const mdxModule = convertBack(code)

  return <mdxModule.default components={{
    Tag: memoTag(searchHandler)
  }} />
}