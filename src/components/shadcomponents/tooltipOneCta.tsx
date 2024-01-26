import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip'

export default () => {
  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover To Show Example</TooltipTrigger>
      <TooltipContent>
        <h3>Add to library</h3>
        <TooltipArrow />
      </TooltipContent></Tooltip>
  </TooltipProvider>
}
