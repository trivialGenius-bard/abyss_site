function Task(props)
{
    function Delete(){
        document.getElementById("task")
    }
    return(
        <div id="task"><h2>{props.text}</h2>
            <button>Сделано!</button><br/>
            <button onClick={Delete}>Удалить</button>
        </div>
    )
}
export default Task;