import {FunctionComponent, ReactNode, useContext} from 'react'
import {TabsContext} from './tabs.tsx'
import TabPanelContentContainer from './tabPanelContentContainer.tsx'

interface TabPanelProps {
  panelKey: string
  children: ReactNode
}

const TabPanel: FunctionComponent<TabPanelProps> = ({children, panelKey}) => {
  const {activeKey} = useContext(TabsContext)

  return <TabPanelContentContainer $isActive={activeKey === panelKey}>{children}</TabPanelContentContainer>
}

export default TabPanel
