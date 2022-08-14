import React from "react";
import Task from "./Task";
const initialList = [];
let tasks = 0;
function ToDo(props)
{
    function addTask()
    {

    }
    const [list, setList] = React.useState(initialList);
    return(
        <div className={props.class}>
            <button onClick={addTask}>Добавить задачу</button>
            <ul id="TaskList">
                {list.map((item) => (<li key={item.id}><Task text={item.name}/></li>))}
            </ul>
        </div>
    )
}
export default ToDo;