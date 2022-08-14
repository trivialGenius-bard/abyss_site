function Switch(props)
{
    let now_working = true;
    function work()
    {
        document.getElementById('header').innerText = "Работа"

    }
    function chill()
    {
        document.getElementById('header').innerText = "Чилл"
    }

    return(
    <div className={props.class}>
        <header id="header">Работа</header>
        <button onClick={work}>Ботац!</button>
        <button onClick={chill}>Адыхать</button>
    </div>)
}

export default Switch;