import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Compiler, Editor, Error, PropTypes, useView } from 'react-view'
import presetTypescript from '@babel/preset-typescript'

export default () => {
  const params = useView({
    componentName: 'Dialog',
    props: {
      children: {
        value: '<DialogTrigger>Show Example</DialogTrigger>\n' +
          '    <DialogContent>\n' +
          '      <div style={{ marginTop: \'1vh\' }} className={\'grid grid-cols-2\'}>\n' +
          '        <div><img\n' +
          '          src=\'https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY\'\n' +
          '          width={500} height={800} />\n' +
          '        </div>\n' +
          '        <div style={{ marginLeft: \'1vw\' }}>\n' +
          '          <DialogHeader>\n' +
          '            <DialogTitle>Modal Title</DialogTitle>\n' +
          '            <DialogDescription>\n' +
          '              Modal Description\n' +
          '            </DialogDescription>\n' +
          '            <div style={{ marginTop: \'8vh\' }} className={\'grid grid-cols-2\'}>\n' +
          '              <div>\n' +
          '                <Button style={{ color: \'black\', backgroundColor: \'white\' }}>CTA 1</Button>\n' +
          '              </div>\n' +
          '              <div>\n' +
          '                <Button>CTA 2</Button>\n' +
          '              </div>\n' +
          '            </div>\n' +
          '          </DialogHeader>\n' +
          '        </div>\n' +
          '      </div>\n' +
          '    </DialogContent>',
        type: PropTypes.ReactNode,
        description: 'Implementation of Dialog',
      },
    },
    scope: {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Button,
    },
    imports: {
      '@/components/ui/dialog': {
        named: ['Dialog',
          'DialogContent',
          'DialogDescription',
          'DialogHeader',
          'DialogTitle',
          'DialogTrigger'],
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
