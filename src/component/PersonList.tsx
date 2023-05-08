import React from 'react'
import {name} from './Person.types'

type personList = {
    name:name[]
}

const PersonList = (props:personList) => {
  return (
    <div>
        {
            props.name.map((name,index)=>{
               return(
                <h3 key={index}>{name.first}</h3>
               )
            })
        }
    </div>
  )
}

export default PersonList
