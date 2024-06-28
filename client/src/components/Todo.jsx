
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";



function Todo(props) {
    const [editId, setEditId] = useState(null)
    const [newTodo, setNewTodo] = useState("")
   const handleEdit = (id) => {
        props.updateTodo(newTodo, id)
        setNewTodo("")
        setEditId(null)
   }
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            {
                props.data.map((item) => (
                    <div key={item.id} className='w-2/6 h-full bg-neutral-400 text-black flex justify-between items-center text-xl gap-3 px-4 py-5 rounded-full mb-3'>
                        {editId === item.id ? (

                            <>  
                                <AiOutlineCloseCircle className="cursor-pointer " size={"30px"} onClick={() => setEditId(null)}/>
                                <input className="bg-transparent outline-none"  value={newTodo} autoFocus type="text" onChange={(e) => setNewTodo(e.target.value)}/>
                                <IoMdCheckmarkCircleOutline className="cursor-pointer " size={"30px"} onClick={() => handleEdit(item.id)}/>
                            </>

                        )

                            : (
                                <>

                                    <CiEdit className="cursor-pointer " size={"30px"} onClick={() => setEditId(item.id)} />
                                    <h1 className="pr-2">{item.todo}</h1>
                                    <MdOutlineDeleteOutline className="cursor-pointer" size={"30px"} onClick={() => { props.deleteTodo(item.id) }} />
                                </>

                            )}

                    </div>

                ))
            }


        </div>
    )
}

export default Todo