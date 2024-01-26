import React, { Component } from 'react'
import { Icon, Menu, Tab } from 'semantic-ui-react'
import OverlayModal from '../../components/shadcomponents/overlayModal'
import SplitModal from '../../components/shadcomponents/splitModal'

export default class ShadCn extends Component<{}, {}> {
  render(): JSX.Element {
    return <Tab
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
              <Icon name={'edit'} />
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
              <Icon name={'edit'} />
              Modal With Split Picture
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
  }
}
