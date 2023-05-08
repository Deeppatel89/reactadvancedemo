import React from 'react'

type containerprops = {
    style:React.CSSProperties
}

const Container = (props:containerprops) => {
  return (
    <div style={props.style}>
      Text Content
    </div>
  )
}

export default Container
