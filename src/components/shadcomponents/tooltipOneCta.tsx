import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

export default () => {
  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover To Show Example</TooltipTrigger>
      <TooltipContent style={{maxWidth: '200px', overflowWrap: 'break-word'}}>
        <Label><h3>Tooltip Title</h3></Label>
        <br/>
        <Label>Tooltip Description</Label>
        <TooltipArrow />
        <br/>
        <br/>
        <Button style={{float: 'right'}}>CTA</Button>
      </TooltipContent></Tooltip>
  </TooltipProvider>
}
