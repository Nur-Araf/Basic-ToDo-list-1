const todoList = [{
   name:`Run`,
   dueDate:`2024-3-18`
},
{
   name:`Start Coding`,
   dueDate:`2024-3-18`
}];

renderTodoList();

function renderTodoList() {
   let todoListHTML = ``;

   todoList.forEach(function(todoObject, index) {
      const { name, dueDate } = todoObject;

      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
         todoList.splice(${index}, 1);
         renderTodoList();
      " class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;  
   });

   // for (let i=0; i < todoList.length; i++) {
   //    const todoObject = todoList[i];
   //    // const name = todoObject.name;
   //    // const dueDate = todoObject.dueDate;
   //    const { name, dueDate } = todoObject;

   //    const html = `
   //    <div>${name}</div>
   //    <div>${dueDate}</div>
   //    <button onclick="
   //       todoList.splice(${i}, 1);
   //       renderTodoList();
   //    " class="delete-todo-button">Delete</button>
   //    `;
   //    todoListHTML += html;
   // }

   document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;
}


function addTodo() {
   const inputElement = document.querySelector(`.js-name-input`);
   const name = inputElement.value;
   const dateInputElement = document.querySelector(`.js-due-date-input`);
   const dueDate = dateInputElement.value;
   todoList.push({
      name,
      dueDate
   });

   inputElement.value = ``;

   renderTodoList();
}

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;

// for (let i=0; i<nums.length; i++) {
//    let num = nums[i];
//    total += num;
// }

// console.log(total);
// function doubleArray(nums) {
//    let numDoubled = [];

//    for (let i = 0; i < nums.length; i++) {
//       let num = nums[i];
//       if (num === 0){
//          return numDoubled;
//       }
//       numDoubled.push(num * 2); 
//    }

//    return numDoubled;
// }

// doubleArray([2,4,8]);