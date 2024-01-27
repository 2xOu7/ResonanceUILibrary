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
          '    <TooltipTrigger style={{marginBottom:"10px"}}>Hover To Show Example</TooltipTrigger>\n' +
          '    <TooltipContent style={{ minWidth: \'200px\', maxWidth: \'400px\', overflowWrap: \'break-word\' }}>\n' +
          '<Button style={{float: \'right\', color: \'black\', backgroundColor: \'white\'}}>X</Button><br/>' +
          '      <Label><h3>Tooltip Title</h3></Label>\n' +
          '      <br />\n' +
          '      <Label>Tooltip Description</Label>\n' +
          '      <TooltipArrow />\n' +
          '      <br />\n' +
          '      <br />\n' +
          '      <Button style={{ float: \'right\' }}>CTA 1</Button>\n' +
          '      <Button style={{ float: \'right\', backgroundColor: \'white\', color: \'black\' }}>CTA 2</Button>\n' +
          '    </TooltipContent></Tooltip>',
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
