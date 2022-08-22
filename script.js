const inputValue = document.querySelector('#todo').value;
const addTodo = () =>{
    const todo = document.createElement('li');
    todo.innerText = inputValue;
    document.querySelector('#todos').appendChild(todo);
    

}