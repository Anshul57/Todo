
function Form(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo()
        props.setTodo("")
       
    }
   
    return (
        <div className='w-full h-80 flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <div >
                        <input className='bg-zinc-700 w-80 h-12 px-4 focus:outline-none border-r-2 border-zinc-500' placeholder="Add Todo" type="text" value={props.todo} onChange={(e) => props.setTodo(e.target.value)}/>
                    </div>
                    <div>

                        <input className=' px-8 py-[12px] rounded-tr-3xl rounded-br-3xl bg-zinc-700 text-zinc-400 cursor-pointer hover:bg-black hover:text-white' type="submit" value="ADD" />
                    </div>

                </div>


            </form>
        </div>
    )
}

export default Form