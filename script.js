const addTodo = () => {
 const inputValue = document.getElementById('todo').value;
    if(!inputValue){
        alert('Task should not be empty')
        return;
    }
    // I want to save the input value in the local storage 

    const todo = {
        text: inputValue
    };
    
    const existingData = localStorage.getItem("todos");
    let todos=existingData ? JSON.parse(existingData) : [];
    todos.push();
    localStorage.setItem("todos",JSON.stringify(todo));
    console.log("saved successfully");
    // const getData = localStorage.getItem("todos");
    // const parsedData = JSON.parse(getData);
    // parsedData append on the todos ID
    const addLi=document.createElement('li')
    addLi.innerHTML = todos.text;
    document.getElementById('todos').appendChild(addLi);
    document.getElementById("todo").value = "";

}