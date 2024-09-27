import {FunctionComponent, PropsWithChildren} from "react";

const letterAlternative1: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <div className={'letter'}>
      {children}
    </div>
  )
}

export default letterAlternative1
