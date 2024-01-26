import React, { Component } from 'react'
import { Menu, Tab } from 'semantic-ui-react'
import OverlayModal from '../../components/shadcomponents/overlayModal'
import SplitModal from '../../components/shadcomponents/splitModal'
import TooltipOneCta from '../../components/shadcomponents/tooltipOneCta'

export default class ShadCn extends Component<{}, {}> {
  render(): JSX.Element {
    return <div>
      <title>Resonance shadcn Examples</title>
      <h1 style={{textAlign: 'center', marginBottom: '5vh'}}>Resonance shadcn Examples</h1>
      <Tab
        renderActiveOnly={false}
        menu={{
          fluid: true,
          vertical: true,
          secondary: true,
        }}
        panes={[
          {
            menuItem: (
              <Menu.Item>
                Modal With Overlay Picture
              </Menu.Item>
            ),
            pane: (
              <Tab.Pane attached={false}>
                <OverlayModal />
              </Tab.Pane>
            ),
          },
          {
            menuItem: (
              <Menu.Item>
                Modal With Split Picture
              </Menu.Item>
            ),
            pane: (
              <Tab.Pane attached={false}>
                <SplitModal />
              </Tab.Pane>
            ),
          },
          {
            menuItem: (
              <Menu.Item>
                Tooltip With One CTA
              </Menu.Item>
            ),
            pane: (
              <Tab.Pane attached={false}>
                <TooltipOneCta />
              </Tab.Pane>
            ),
          },
          {
            menuItem: (
              <Menu.Item>
                Tooltip With Two CTA's
              </Menu.Item>
            ),
            pane: (
              <Tab.Pane attached={false}>
                <SplitModal />
              </Tab.Pane>
            ),
          },{
            menuItem: (
              <Menu.Item>
                Tooltip With Picture
              </Menu.Item>
            ),
            pane: (
              <Tab.Pane attached={false}>
                <SplitModal />
              </Tab.Pane>
            ),
          },

        ]}
      />
    </div>
  }
}
