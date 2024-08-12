// based on https://zenn.dev/ciffelia/articles/next-embed-tweet
import React, { useEffect, useRef } from 'react'

export const Tweet: React.FC<{ tweetId: string }> = ({ tweetId }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-expect-error
    window.twttr?.widgets.load(ref.current)
  }, [tweetId])

  return <div dangerouslySetInnerHTML={{ __html: generateEmbedHtml(tweetId) }} ref={ref} />
}

const generateEmbedHtml = (tweetId: string): string => {
  const idRegex = new RegExp('^\\d+$', 'u')
  if (!idRegex.test(tweetId)) {
    throw new Error(`Invalid tweet ID: ${tweetId}`)
  }

  return `<blockquote class="twitter-tweet"><a href="https://twitter.com/i/status/${tweetId}"></a></blockquote>`
}
