let todoList=JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();
function addTodo(){
    
    let inputElement = document.querySelector('#Task');
    let inputDateElement = document.querySelector('#date-picker');
    let todoItem=inputElement.value;
    let dateItem=inputDateElement.value;
    if (todoItem && dateItem) {  // Add basic validation
        todoList.push({ item: todoItem, dueDate: dateItem });
        localStorage.setItem('todoList', JSON.stringify(todoList));
        inputElement.value = '';  
        inputDateElement.value = ''; 
        displayItems();
    }
}
function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml='';

    for(let i=0;i<todoList.length;i++){
        let Item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml+=`
        
        <span>${Item}</span>
        <span>${dueDate}</span>
        <button class="delete" onclick="deleteItem(${i});
        ">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}
function deleteItem(index){
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}
