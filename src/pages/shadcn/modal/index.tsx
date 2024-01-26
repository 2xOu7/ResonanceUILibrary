import React from "react";
import {useView, Compiler, Editor, Error} from 'react-view';
import presetTypescript from '@babel/preset-typescript';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import {Button} from "../../../components/ui/button"

// return (
//     <div style={{marginLeft: '2vw', marginRight: '2vw'}}>
//         {/*<Dialog>*/}
//         {/*    <DialogTrigger>Open</DialogTrigger>*/}
//         {/*    <DialogContent>*/}
//         {/*        <img style={{marginTop: '1vw'}}*/}
//         {/*             src="https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY"*/}
//         {/*             width={"500"} height={"300"}/>*/}
//         {/*        <DialogHeader>*/}
//         {/*            <DialogTitle>Modal Title</DialogTitle>*/}
//         {/*            <DialogDescription>*/}
//         {/*                Modal Description*/}
//         {/*            </DialogDescription>*/}
//         {/*        </DialogHeader>*/}
//         {/*        <DialogFooter>*/}
//         {/*            <Button>CTA Button 1</Button>*/}
//         {/*            <Button>CTA Button 2</Button>*/}
//         {/*        </DialogFooter>*/}
//         {/*    </DialogContent>*/}
//         {/*</Dialog>*/}
//     </div>
// );

export default () => {
    const params = useView({
        initialCode: `() => {
          const text: string = "Hey";
          return <h2>{text}</h2>;
        }`,
        scope: {Dialog,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
        Button},
    });

    return (
        <React.Fragment>
            <Compiler {...params.compilerProps} presets={[presetTypescript]} />
            <Editor {...params.editorProps} language="tsx" />
            <Error {...params.errorProps} />
        </React.Fragment>
    );
};
