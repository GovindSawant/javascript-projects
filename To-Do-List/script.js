const eventList = JSON.parse(localStorage.getItem('eventList')) || [];

renderList();

function addToList(){
  const inputElement = document.querySelector('.js-event-input');
  let inputEvent = inputElement.value ;

  const inputDate = document.querySelector('.js-date-input');
  let dueDate = inputDate.value ;

  eventList.push({todo:inputEvent,
    dueDate:dueDate
  });
  console.log(eventList);
  
  inputElement.value = '';
  inputDate.value = '';
  renderList();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}
document.querySelector('.js-add-btn').addEventListener('click',() => {
  addToList();
});

function renderList(){

  let TodoListHtml = '';

  let ToDo = "";

  eventList.forEach(function(todoObject,index) {
    
    const {todo,dueDate} = todoObject;

    // const todo = eventList[i].event;

    // const dueDate = eventList[i].dueDate;

    const html = `
    <div class="items">
      <div>
        ${todo} 
      </div>
      <div>
        ${dueDate} 
      </div>
      <button class="delete-btn js-delete-btn" onClick = "deleteItem(${index})">
        Delete
      </button>
      </div>
    </div>`;

    TodoListHtml = TodoListHtml + html;

  //   document.querySelectorAll('.js-delete-btn')
  //     .forEach((deleteBtn,index) => {
  //       deleteBtn.addEventListener('click',() => {
  //         deleteItem(index);
  //         renderList();
  //       });
  //     });

  });


  // for(let i=0;i<eventList.length;i++){

  //   const todo = eventList[i].event;

  //   const dueDate = eventList[i].dueDate;

  //   const html = `
  //   <div class="items">
  //     <div>
  //       ${todo} 
  //     </div>
  //     <div>
  //       ${dueDate} 
  //     </div>
  //     <button class="delete-btn" onClick = "deleteItem(${i})">
  //       Delete
  //     </button>
  //     </div>
  //   </div>`;

  //   TodoListHtml = TodoListHtml + html;
  // }
  
  console.log(TodoListHtml);

  document.querySelector('.js-ToDoList-items').innerHTML = TodoListHtml;
}
function deleteItem(i){
  eventList.splice(i,1);
  renderList();
  localStorage.removeItem('eventList');
}
document.querySelector('.js-delete-btn').addEventListener('click',() => {

});
function saveToStorage() {
  localStorage.setItem('eventList', JSON.stringify(eventList));
}