import '@/styles/globals.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import { Icon, Menu, Segment } from 'semantic-ui-react'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Segment style={{ padding: '5px' }}>
      <Menu size={'small'} secondary icon={'labeled'}>
        <Menu.Item
          name={'shadcn'}
          active={false}
          onClick={() => {
            window.location.href = '/'
          }}
        >
          <Icon name={'file'} />
          README
        </Menu.Item>
        <Menu.Item
          name={'shadcn'}
          active={false}
          onClick={() => {
            window.location.href = '/shadcn'
          }}
        >
          <Icon name={'code'} />
          ShadCN Examples
        </Menu.Item>
      </Menu>
    </Segment>
    <Component {...pageProps} />
  </div>
}
