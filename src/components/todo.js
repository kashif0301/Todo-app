import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("");
    const[item, setItem] = useState([])

    const addItem = ()=>{
       if(!input){
        alert("please write something")
       } else{
        setItem([...item,input])
        setInput("")
       }
    }

    const deleteItem=(id)=>{
const updatedata=item.filter((elem,ind)=>{
    return ind != id
});
setItem(updatedata)
    }
  return (
    <>
      <div className="main">
        <div className="box">
            <div className="input">
                <input type="text"   onChange={(e)=> setInput(e.target.value)} 
                value={input}
                />
                <button  onClick={addItem}> ADD Item</button>
            </div>
            {
                item.map((elem,ind)=>{
                    return(
                        <div className="list">
                <h3>{elem}</h3>
                <a link="" onClick={()=>deleteItem(ind)}>Delete</a>
            </div>
                    )
                })
            }

            <div className="removeall">
                <button onClick={()=>setItem([])}>Remove All enteries</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo

