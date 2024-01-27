import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Compiler, Editor, Error, PropTypes, useView } from 'react-view'
import presetTypescript from '@babel/preset-typescript'

export default () => {
  const params = useView({
    componentName: 'TooltipProvider',
    props: {
      children: {
        value: '<Tooltip>\n' +
          '    <TooltipTrigger style={{marginBottom:"10px"}}>\n' +
          '      Hover To Show Example\n' +
          '    </TooltipTrigger>\n' +
          '    <TooltipContent\n' +
          '      style={{\n' +
          '        minWidth: "200px",\n' +
          '        maxWidth: "400px",\n' +
          '        overflowWrap: "break-word"\n' +
          '      }}\n' +
          '    >\n' +
          '<Button style={{float: \'right\', color: \'black\', backgroundColor: \'white\'}}>X</Button><br/>' +
          '      <Label>\n' +
          '        <h3>Tooltip Title</h3>\n' +
          '      </Label>\n' +
          '      <img\n' +
          '        style={{\n' +
          '          marginTop: "1vw"\n' +
          '        }}\n' +
          '        src="https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY"\n' +
          '        width={"200"}\n' +
          '        height={"200"}\n' +
          '      />\n' +
          '      <br/>\n' +
          '      <Label>Tooltip Description</Label>\n' +
          '      <TooltipArrow />\n' +
          '      <br />\n' +
          '      <br />\n' +
          '      <Button\n' +
          '        style={{\n' +
          '          float: "right"\n' +
          '        }}\n' +
          '      >\n' +
          '        CTA 1\n' +
          '      </Button>\n' +
          '      <Button\n' +
          '        style={{\n' +
          '          float: "right",\n' +
          '          backgroundColor: "white",\n' +
          '          color: "black"\n' +
          '        }}\n' +
          '      >\n' +
          '        CTA 2\n' +
          '      </Button>\n' +
          '    </TooltipContent>\n' +
          '  </Tooltip>',
        type: PropTypes.ReactNode,
        description: 'Implementation of Tooltip',
        imports: {
          '@/components/ui/tooltip': {
            named: ['Tooltip',
              'TooltipContent',
              'TooltipProvider',
              'TooltipTrigger'],
          },
          '@radix-ui/react-tooltip': {
            named: ['TooltipArrow'],
          },
          '@/components/ui/label': {
            named: ['Label'],
          },
          '@/components/ui/button': {
            named: ['Button'],
          },
        },
      },
    },
    scope: {
      Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, Label, Button,
    },
  })

  return (
    <React.Fragment>
      <Compiler {...params.compilerProps} presets={[presetTypescript]} />
      <Editor {...params.editorProps} language={'tsx'} />
      <Error {...params.errorProps} />
    </React.Fragment>
  )
}
