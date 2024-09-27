import Tabs from './tabs.tsx'
import Tab from './tab.tsx'
import TabPanel from './tabPanel.tsx'
import TabList from "./tabList.tsx";

const ExerciseNine = () => {
  return (
    <>
      <Tabs defaultOpenKey="tab1">
        <TabList>
          <Tab tabKey="tab1" title="Tab 1" />
          <Tab tabKey="tab2" title="Tab 2" />
          <Tab tabKey="tab3" title="Tab 3" />
          <Tab tabKey="tab4" title="Tab 4" />
        </TabList>

        <TabPanel panelKey="tab1">
          <h1>Tab 1 content</h1>
        </TabPanel>

        <TabPanel panelKey="tab2">
          <h1>Tab 2 content</h1>
        </TabPanel>

        <TabPanel panelKey="tab3">
          <h1>Tab 3 content</h1>
        </TabPanel>

        <TabPanel panelKey="tab4">
          <h1>Tab 4 content</h1>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default ExerciseNine
