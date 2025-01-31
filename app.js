const readline = require('readline');

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// In-memory Todo list
let todos = [];

// Function to display options
function showMenu() {
  console.log('\nTodo App');
  console.log('1. Add Task');
  console.log('2. Remove Task');
  console.log('3. List Tasks');
  console.log('4. Exit');
  rl.question('Select an option (1-4): ', handleInput);
}

// Function to handle user input
function handleInput(input) {
  switch (input.trim()) {
    case '1':
      addTask();
      break;
    case '2':
      removeTask();
      break;
    case '3':
      listTasks();
      break;
    case '4':
      console.log('Exiting...');
      rl.close();
      break;
    default:
      console.log('Invalid option. Please try again.');
      showMenu();
  }
}

// Function to add a task
function addTask() {
  rl.question('Enter task name: ', (task) => {
    todos.push(task);
    console.log(`Task "${task}" added.`);
    showMenu();
  });
}

// Function to remove a task
function removeTask() {
  if (todos.length === 0) {
    console.log('No tasks to remove.');
    showMenu();
    return;
  }

  console.log('Current tasks:');
  todos.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

  rl.question('Enter task number to remove: ', (taskIndex) => {
    const index = parseInt(taskIndex.trim(), 10) - 1;
    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      console.log(`Task "${removed[0]}" removed.`);
    } else {
      console.log('Invalid task number.');
    }
    showMenu();
  });
}

// Function to list all tasks
function listTasks() {
  if (todos.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('Your tasks:');
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

// Show the initial menu
showMenu();
