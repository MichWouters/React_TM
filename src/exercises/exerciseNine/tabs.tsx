import {createContext, FunctionComponent, ReactNode, useState} from 'react'

interface TabsProps {
  defaultOpenKey: string
  children: ReactNode
}

interface TabsContextProps {
  activeKey: string
  setActiveKey: (newOpenKey: string) => void
}

export const TabsContext = createContext<TabsContextProps>({
  activeKey: '',
  setActiveKey: () => {
    console.warn('No implementation had been provided for TabsContext.setActiveKey()')
  },
})

const Tabs: FunctionComponent<TabsProps> = ({defaultOpenKey, children}) => {
  const [activeKey, setActiveKey] = useState<string>(defaultOpenKey)

  return <TabsContext.Provider value={{activeKey, setActiveKey}}>{children}</TabsContext.Provider>
}

export default Tabs
