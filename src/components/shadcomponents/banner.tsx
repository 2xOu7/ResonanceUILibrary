import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Button } from '../ui/button'

export default () => {
  return <Alert>
    <AlertTitle style={{ fontWeight: 'bold' }}>Alert Title</AlertTitle>
    <br />
    <AlertDescription>
      Alert Description
      <Button style={{float: 'right'}}>CTA Button 1</Button>
      <Button style={{float: 'right'}}>CTA Button 2</Button>
    </AlertDescription>
  </Alert>
}
