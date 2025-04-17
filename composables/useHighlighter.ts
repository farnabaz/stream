import { createHighlighter, type HighlighterGeneric } from 'shiki'
import { createJavaScriptRegexEngine } from 'shiki/engine-javascript.mjs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let highlighter: HighlighterGeneric<any, any> | null = null

export const useHighlighter = async () => {
  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: ['vue', 'js', 'ts', 'css', 'html', 'json', 'yaml', 'markdown'],
      themes: ['github-dark'],
      engine: createJavaScriptRegexEngine()
    })
  }
  return highlighter
}