// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {

  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function (task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    completeTask: function (task) {
      task.complete = true;
    }
  };

  return task;
}


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;

}

// Clean Cat Litter has been completed





// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // C

