import React from 'react'
import { Compiler, Editor, Error, PropTypes, useView } from 'react-view'
import presetTypescript from '@babel/preset-typescript'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'

export default () => {
  const params = useView({
    componentName: 'Dialog',
    props: {
      children: {
        value:
          '<DialogTrigger>Click To Show Example</DialogTrigger>\n' +
          '   <DialogContent>\n' +
          '       <img style={{marginTop: \'1vw\'}}\n' +
          '           src="https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY"\n' +
          '           width={"500"} ' +
          'height={"300"}' +
          '\n       />\n' +
          '       <DialogHeader>\n' +
          '<DialogTitle>Modal Title</DialogTitle>\n' +
          '<DialogDescription>\n' +
          'Modal Description\n' +
          '</DialogDescription>\n' +
          '</DialogHeader>\n' +
          '<DialogFooter>\n' +
          '<Button>CTA Button 1</Button>\n' +
          '<Button>CTA Button 2</Button>\n' +
          '</DialogFooter>\n' +
          '</DialogContent>\n',
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
