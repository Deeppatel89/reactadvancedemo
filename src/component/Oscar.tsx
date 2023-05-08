import React from 'react'
import { theme } from './context/theme'

type oscarprops = {
    children:React.ReactNode
}

const Oscar = (props:oscarprops) => {
  return (
    <div >
     {props.children}
    </div>
  )
}

export default Oscar
