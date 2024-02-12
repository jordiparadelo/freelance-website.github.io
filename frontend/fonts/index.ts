import localFont from 'next/font/local'

export const manrope = localFont({
    src: [
        {
          path: './Roboto-Regular.woff2',
          weight: '400',
          style: 'normal',
        },
        {
          path: './Roboto-Italic.woff2',
          weight: '400',
          style: 'italic',
        },
        {
          path: './Roboto-Bold.woff2',
          weight: '700',
          style: 'normal',
        },
        {
          path: './Roboto-BoldItalic.woff2',
          weight: '700',
          style: 'italic',
        },
      ],
})