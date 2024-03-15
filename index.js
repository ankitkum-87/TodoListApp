const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");

// create addtodolist function
const addTodoListLocalStorage = (todo)=>{
    return localStorage.setItem('tododata',JSON.stringify(todo));
};

const addTodoList = (e)=>{
    e.preventDefault();
    //console.log("hello",e.target);
    addTodoListLocalStorage(listValue.value);
    const liElement = document.createElement('li');
    liElement.innerHTML = listValue.value;
    todoLists.appendChild(liElement);

}
document.querySelector(".btn").addEventListener("click",(e)=>{
    addTodoList(e);
})