import React from "react";
import ToDoItem from "./ToDoItem";

export default function() {

    const [list, setList] = React.useState([])
    const [value, setValue] = React.useState("")
    const [editId, setEditId] = React.useState(null)
    const [isEditing, setIsEditing] = React.useState(false)
    const [noValue, setNoValue] = React.useState(false)
    const todolist = React.useRef()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(todolist.current.clientHeight);
        
        if (!isEditing) {
            if (value == "") {
                setNoValue(true)
            } else {
                const newItem = {id: new Date().getTime().toString(),title:value}
                setList([...list, newItem])
                setValue("")
                setNoValue(false)
            }
        } else {
            setList(list.map(item => {
                if (item.id === editId) {
                    return {...item, title: value}
                }
                else {
                    return item
                }
            }))
            setValue("")
            setIsEditing(false)
        }
  
    }

    function handleDel(id) {
        setList(list.filter( filteredItem => filteredItem.id !== id))
    }

    function handleEdit(id) {
        setIsEditing(true)
        const foundedItem = list.find( f => f.id === id)
        setValue(foundedItem.title)
        setEditId(id)
    }

    return (
        <div ref={todolist} className="todolist-container">
            <h2>
                To Do List
            </h2>
            {noValue && <div className="alert">
                Please Enter a Task..
            </div>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Let's Do Something!"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                    {isEditing? "Edit" : "Add"}
                </button>
            </form>
            {list.map( item => <ToDoItem handleEdit={handleEdit} handleDel={handleDel} key={item.id} {...item} />)}
        </div>
    )
}