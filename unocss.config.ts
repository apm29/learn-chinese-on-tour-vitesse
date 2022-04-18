import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['divider-h', 'h-1px w-9/10 bg-gray-400/30 block'],
    ['btn-on-bg-surface','cursor-pointer inline-block select-none hover:text-green-600 dark:hover:text-green-200 text-gray-500 dark:text-gray-400'],
    ['btn-primary','cursor-pointer inline-block select-none transition-all hover:shadow-lg hover:text-blue-600 hover:bg-purple-300 text-white bg-blue-300 rounded-full px-4 py-2'],
    ["bg-surface","bg-gray-100 dark:bg-dark-500 text-gray-500/60"],
    ["bg-surface-secondary","bg-white dark:bg-dark-400 text-gray-500/60"],
    ["colored-scrollbar","scrollbar scrollbar-rounded dark:scrollbar-track-color-transparent dark:scrollbar-thumb-color-gray-800"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetScrollbar(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
