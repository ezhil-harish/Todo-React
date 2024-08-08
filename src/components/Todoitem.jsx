import React from 'react'
import './Todoitem.css'
import tick from '../Assests/tick.jpg'
import notick from '../Assests/notick.jpg'
import trash from '../Assests/trash.jpg'

const Todoitem = ({text, id, isComplete,deletelist,toggle}) => {
  return (
    <div className='item'>
        <div onClick={()=>{toggle(id)}} className="item-part">
            <img src={isComplete? tick: notick} alt="" />
            <p style={{textDecoration:isComplete? 'line-through':""}}>{text}</p>
        </div>
        <div className='trash'>
          <img onClick={()=>{deletelist(id)}} src={trash} alt="" />
        </div>  
    </div>
  )
}

export default Todoitem