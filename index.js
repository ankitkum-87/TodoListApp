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

// remove todo function

const removeTodoList = (e)=>{
    console.log(e.target.textContent);

    updatedTodoList = todoListValue.filter((currTodoValue)=> currTodoValue != e.target.textContent);
    addTodoListLocalStorage(updatedTodoList);
    todoLists.innerHTML="";
    showTodoList();
    console.log("updated list ",updatedTodoList);
}
const addTodoList = (e)=>{
    //e.preventDefault();
    //console.log("hello",e.target);
    todoListValue = getTodoListFromLocalStorage();
    let newTodo = listValue.value.trim();
    console.log(newTodo);
    listValue.value = "";

    if(newTodo.length != 0 && !todoListValue.includes(newTodo)){
        //console.log(typeof todoListValue)
        todoListValue.push(newTodo);
        //todoListValue = [...new Set(todoListValue)];
        addTodoListLocalStorage(todoListValue);
        const liElement = document.createElement('li');
        liElement.innerHTML = listValue.value;
        todoLists.appendChild(liElement);
    }

};
showTodoList();
document.querySelector(".btn").addEventListener("click",(e)=>{
    addTodoList(e);
});

todoLists.addEventListener("click",(e)=>{
    removeTodoList(e);
})