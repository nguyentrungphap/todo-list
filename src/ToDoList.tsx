import React , {useState} from 'react';

interface Task {
    task: string;
}

function ToDoList() {
    const [task, setTask] = useState<Task[]>([
        { task: 'Task 1' },
        { task: 'Task 2' },
        { task: 'Task 3' }
    ]);
    const [newTask, setNewTask] = useState('');

    function handleInputChanged(e: React.ChangeEvent<HTMLInputElement>){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTask([...task, {task: newTask}]);
        setNewTask("");
        }
    }

    function deleteTask(index:number){
        const updatedTask = task.filter((element, i) => i !== index);
        setTask(updatedTask);
    }

    function moveTaskUp(index:number){
        if(index > 0){
            const updatedTask = [...task];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index - 1];
            updatedTask[index - 1] = temp;
            setTask(updatedTask);
        }
     return;
    }

    function moveTaskDown(index:number){
        if(index < task.length-1){
            const updatedTask = [...task];
            const temp = updatedTask[index];
            updatedTask[index] = updatedTask[index + 1];
            updatedTask[index + 1] = temp;
            setTask(updatedTask);
        }
     return;
    }


return (
    <div className='text-center mt-[100px]'>
        <h1 className='text-6xl text-white'>TO DO LIST</h1>
        <div className='my-8'>
            <input className='text-3xl p-3 border-2 border-gray-400/50 rounded-md text-black' type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChanged} />
            <button className='text-3xl font-bold px-6 py-3 border-none cursor-pointer text-white rounded-md transition duration-500 ease-in-out bg-green-500 hover:bg-green-600' onClick={addTask}>Add</button>
        </div>
        
        <ol className='p-0'>
                {task.map((task, index) => (
                    <li className='text-3xl font-bold p-4 bg-white mb-[10px] border border-3 border-gray-300/75 rounded-md flex items-center' key={index}>
                        <span className='flex-1'>{task.task}</span>
                        <button className='text-2xl ml-[10px] font-bold px-3 py-2 border-none cursor-pointer text-white rounded-md transition duration-500 ease-in-out bg-red-500 hover:bg-red-600' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='text-2xl ml-[10px] font-bold px-3 py-2 border-none cursor-pointer text-white rounded-md transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-600' onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className='text-2xl ml-[10px] font-bold px-3 py-2 border-none cursor-pointer text-white rounded-md transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-600' onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
    </div>
)
}
export default ToDoList;