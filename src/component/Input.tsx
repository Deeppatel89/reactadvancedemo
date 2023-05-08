import React from 'react'

type inputProps = {
    value:string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props:inputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.onChange} />
  )
}

export default Input
