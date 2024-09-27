import {FunctionComponent, PropsWithChildren} from 'react'
import TabListContentContainer from './tabListContentContainer.tsx'

const TabList: FunctionComponent<PropsWithChildren> = ({children}) => {
  return <TabListContentContainer>{children}</TabListContentContainer>
}

export default TabList
