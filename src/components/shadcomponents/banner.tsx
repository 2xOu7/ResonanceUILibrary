import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default () => {
  return <Card>
    <div style={{ marginTop: '1vh' }} className={'grid grid-cols-2'}>
      <div>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </div>
      <div>
        <div className={'flex justify-end items-center'} style={{ marginTop: '5vh', marginRight: '1vw' }}>
          <Button style={{ backgroundColor: 'white', color: 'black' }}>CTA 1</Button>
          <Button>CTA 2</Button>
          <Button style={{ backgroundColor: 'white', color: 'black', marginLeft: '1vw' }}>X</Button>
        </div>
      </div>
    </div>
  </Card>

}
