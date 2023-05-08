import React from 'react'

type buttonProps = {
    onClick:(e:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    children:React.ReactNode
}

const Button = (props:buttonProps) => {
  return (
    <button onClick={(e)=>props.onClick(e,1)}>{props.children}</button>
  )
}

export default Button
