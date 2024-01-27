import '@/styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import { Menu } from 'semantic-ui-react'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Menu size={'small'} secondary icon={'labeled'}>
      <Menu.Item
        name={'campaigns'}
        active={false}
      >
        shadcn
      </Menu.Item>
    </Menu>
    <Component {...pageProps} />
  </div>
}
