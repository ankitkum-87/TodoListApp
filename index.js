const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");

const addTodoList = (e)=>{
    e.preventDefault();
    console.log("hello",e.target);
}
document.querySelector(".btn").addEventListener("click",(e)=>{
    addTodoList(e);
})