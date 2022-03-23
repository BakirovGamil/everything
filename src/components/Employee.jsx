function Employee({surname, name, middleName, salary}) {
    return (<div>
        <div>Middle name: {middleName}</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Salary: {salary}</div>
        <hr/>
    </div>);
}

export default Employee;