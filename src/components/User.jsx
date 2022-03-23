function User({id, name, surname, age, isBanned, changeIsBanned}) {
    return (<div>
        <p>{surname}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{isBanned ? "Забанен" : "Не забанен"}</p>
        <button onClick={changeIsBanned.bind(null, id)}>
            {isBanned ? "Разбанить" : "Забанить"}
        </button>

        <hr />
    </div>);
}

export default User;