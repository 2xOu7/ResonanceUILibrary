import React, {Component} from "react";
import {PropTypes, View} from 'react-view';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import {Button} from "../components/ui/button"

export default class Home extends Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div style={{marginLeft: '2vw', marginRight: '2vw'}}>
                <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent>
                        <img style={{marginTop: '1vw'}}
                             src="https://fastly.picsum.photos/id/817/500/300.jpg?hmac=YepWK_ujczi0SlqEvc2ZsSgaDvQrHOvMuSEFXYtOIsY"
                             width={"500"} height={"300"}/>
                        <DialogHeader>
                            <DialogTitle>Modal Title</DialogTitle>
                            <DialogDescription>
                                Modal Description
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button>CTA Button 1</Button>
                            <Button>CTA Button 2</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <View
                    className={"shadcn-modal-preview"}
                    componentName={"Dialog"}
                    props={{
                        children: {
                            value: '<DialogTrigger>Show Modal</DialogTrigger>\n' +
                                '  <DialogContent>\n' +
                                '    <DialogHeader>\n' +
                                '      <DialogTitle>Are you absolutely sure?</DialogTitle>\n' +
                                '      <DialogDescription>\n' +
                                '        This action cannot be undone. This will permanently delete your account\n' +
                                '        and remove your data from our servers.\n' +
                                '      </DialogDescription>\n' +
                                '    </DialogHeader>\n' +
                                '  </DialogContent>',
                            type: PropTypes.ReactNode,
                            description: 'Visible label.',
                        },
                    }}
                    scope={{
                        Dialog,
                        DialogContent,
                        DialogDescription,
                        DialogHeader,
                        DialogTitle,
                        DialogTrigger,
                    }}
                    imports={{
                        "@/components/ui/dialog": {
                            named: ["Dialog",
                                "DialogContent",
                                "DialogDescription",
                                "DialogHeader",
                                "DialogTitle",
                                "DialogTrigger",]
                        }
                    }
                    }
                />
            </div>
        );
    }
}
