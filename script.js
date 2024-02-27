const taskInput = document.getElementById("Task-input");
const taskList = document.getElementById("Task-list")


function addTask(){
 
const taskText = taskInput.value.trim();

if(taskText === " ") return alert("please Enter something ")
     
const li = document.createElement("li");

li.innerHTML = `
 
<span class="task-text">${taskText}</span>
            <span class="task-delete">❌</span>
  
`;

taskList.appendChild(li);

taskInput.value = "";

li.querySelector(".task-delete").addEventListener("click" , function(){
    li.remove()
})
}


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// document.getElementById('task-list').addEventListener('click', (e) => {
//     if (e.target.classList.contains('task-delete')) {
//         e.target.parentElement.remove();
//     }
// });