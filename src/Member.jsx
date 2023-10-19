import React from 'react'
import User from "./assets/user.png"
const Member = (props) => {
    // console.log(props);
  return (
    <>
    <div className='demo'>
                <div>Traveller-{props.data+1}</div>
                  <div><img src={User} alt="" /></div>
                </div>
    </>
  )
}

export default Member