import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default () => {
  return <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter className={"flex justify-end"}>
      <Button style={{backgroundColor: 'white', color: 'black'}}>CTA 1</Button>
      <Button>CTA 2</Button>
    </CardFooter>
  </Card>
}
