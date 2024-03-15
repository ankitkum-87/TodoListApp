const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");

// create a list for local storage data
let todoListValue = [];

// function to get the data from local storage
const getTodoListFromLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("tododata")) || [];
};
// create addtodolist function
const addTodoListLocalStorage = (todo)=>{
    return localStorage.setItem('tododata',JSON.stringify(todo));
};
 
const showTodoList = ()=>{
    todoListValue = getTodoListFromLocalStorage();
    todoListValue.forEach((currTodo)=>{
        const liElement = document.createElement('li');
        liElement.innerHTML = currTodo;
        todoLists.appendChild(liElement);
    })
}
const addTodoList = (e)=>{
    e.preventDefault();
    //console.log("hello",e.target);
    todoListValue = getTodoListFromLocalStorage();
    let newTodo = listValue.value.trim();
    console.log(newTodo);
    listValue.value = "";

    if(newTodo.length != 0){
        console.log(typeof todoListValue)
        todoListValue.push(newTodo);
        addTodoListLocalStorage(todoListValue);
        const liElement = document.createElement('li');
        liElement.innerHTML = listValue.value;
        todoLists.appendChild(liElement);
    }

};
showTodoList();
document.querySelector(".btn").addEventListener("click",(e)=>{
    addTodoList(e);
})