import React from 'react'
import { Compiler, Editor, Error, PropTypes, useView } from 'react-view'
import presetTypescript from '@babel/preset-typescript'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

export default () => {
  const params = useView({
    componentName: 'Card',
    props: {
      children: {
        value: '\n' +
          '    <div style={{ marginTop: \'1vh\' }} className={\'grid grid-cols-2\'}>\n' +
          '      <div>\n' +
          '        <CardHeader>\n' +
          '          <CardTitle>Card Title</CardTitle>\n' +
          '        </CardHeader>\n' +
          '        <CardContent>\n' +
          '          <p>Card Content</p>\n' +
          '        </CardContent>\n' +
          '      </div>\n' +
          '      <div>\n' +
          '        <div className={\'flex justify-end items-center\'} style={{ marginTop: \'5vh\', marginRight: \'1vw\' }}>\n' +
          '          <Button style={{ backgroundColor: \'white\', color: \'black\' }}>CTA 1</Button>\n' +
          '          <Button>CTA 2</Button>\n' +
          '          <Button style={{ backgroundColor: \'white\', color: \'black\', marginLeft: \'1vw\' }}>X</Button>\n' +
          '        </div>\n' +
          '      </div>\n' +
          '    </div>',
        type: PropTypes.ReactNode,
        description: 'Implementation of Dialog',
      },
      style: {
        value: JSON.stringify({ width: '100%', marginBottom: '5vh' }),
        type: PropTypes.Object,
        description: 'Styling',
      },
    },
    scope: {
      Card, CardContent, CardFooter, CardHeader, CardTitle,
      Button,
    },
    imports: {
      '@/components/ui/dialog': {
        named: ['Card',
          'CardContent',
          'CardFooter',
          'CardHeader',
          'CardTitle'],
      },
      '@/components/ui/button': {
        named: ['Button'],
      },
    },
  })

  return (
    <React.Fragment>
      <Compiler {...params.compilerProps} presets={[presetTypescript]} />
      <Editor {...params.editorProps} language={'tsx'} />
      <Error {...params.errorProps} />
    </React.Fragment>
  )
};


