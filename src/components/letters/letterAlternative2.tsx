import {CSSProperties, FunctionComponent, PropsWithChildren} from "react"

interface LetterAlternative2Props extends PropsWithChildren {
  bgColor?: string
}

const LetterAlternative2: FunctionComponent<LetterAlternative2Props> = (props) => {
  const {children, bgColor} = props

  const letterStyle: CSSProperties = {
    padding: 10,
    margin: 10,
    backgroundColor: bgColor ?? '#ffdeEE',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: 32,
    textAlign: 'center',
  }

  return (
    <div style={letterStyle}>
      {children}
    </div>
  )
}

export default LetterAlternative2