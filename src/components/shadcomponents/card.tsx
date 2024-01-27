// import React from 'react'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
// import { Button } from '../ui/button'
//
// export default () => {
//   return <Card>
//     <CardHeader style={{width: '100%'}}>
//       <CardTitle>Card Title</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p>Card Content</p>
//     </CardContent>
//     <CardFooter className={'flex justify-end'}>
//       <Button style={{ backgroundColor: 'white', color: 'black' }}>CTA 1</Button>
//       <Button>CTA 2</Button>
//     </CardFooter>
//   </Card>
// }

import React from 'react'
import { Compiler, Editor, Error, PropTypes, useView } from 'react-view'
import presetTypescript from '@babel/preset-typescript'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

export default () => {
  const params = useView({
    componentName: 'Card',
    props: {
      children: {
        value: '<CardHeader style={{width: \'100%\'}}>\n' +
          '      <CardTitle>Card Title</CardTitle>\n' +
          '    </CardHeader>\n' +
          '    <CardContent>\n' +
          '      <p>Card Content</p>\n' +
          '    </CardContent>\n' +
          '    <CardFooter className={\'flex justify-end\'}>\n' +
          '      <Button style={{ backgroundColor: \'white\', color: \'black\' }}>CTA 1</Button>\n' +
          '      <Button>CTA 2</Button>\n' +
          '    </CardFooter>',
        type: PropTypes.ReactNode,
        description: 'Implementation of Dialog',
      },
      style: {
        value: JSON.stringify({width: '100%', marginBottom: '5vh'}),
        type: PropTypes.Object,
        description: 'Styling',
      },
    },
    scope: {
      Card, CardContent, CardFooter, CardHeader, CardTitle,
      Button,
    },
    imports: {
      '@/components/ui/dialog': {
        named: ['Card',
          'CardContent',
          'CardFooter',
          'CardHeader',
          'CardTitle'],
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

