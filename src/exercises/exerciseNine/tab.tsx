import {FunctionComponent, useContext} from 'react'
import TabButton from './tabButton.tsx'
import {TabsContext} from './tabs.tsx'

interface TabProps {
  title: string
  tabKey: string
}

const Tab: FunctionComponent<TabProps> = ({title, tabKey}) => {
  const {activeKey, setActiveKey} = useContext(TabsContext)

  return (
    <TabButton $isActive={tabKey === activeKey} onClick={() => setActiveKey(tabKey)}>
      {title}
    </TabButton>
  )
}

export default Tab
