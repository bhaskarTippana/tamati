import React from 'react'

const Test = (props) => {
    console.log(props.data);
  return (
    <h1>{props.data}</h1>
  )
}

export default Test