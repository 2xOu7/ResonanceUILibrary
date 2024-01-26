import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog'
import { Button } from '../../../components/ui/button'

export default () => {
  return <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <div style={{ marginTop: '1vh' }} className={'grid grid-cols-2'}>
        <div><img
          src='https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY'
          width={500} height={800} />
        </div>
        <div style={{ marginLeft: '1vw' }}>
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
            <DialogDescription>
              Modal Description
            </DialogDescription>
            <div style={{ marginTop: '8vh' }} className={'grid grid-cols-2'}>
              <div>
                <Button style={{ color: 'black', backgroundColor: 'white' }}>CTA 1</Button>
              </div>
              <div>
                <Button>CTA 2</Button>
              </div>
            </div>
          </DialogHeader>
        </div>
      </div>
    </DialogContent>
  </Dialog>
};
