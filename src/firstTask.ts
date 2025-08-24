interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
  priority?: "high" | "medium" | "low";
}

function addTask(tasks: Task[], title: string): Task[];
function addTask(tasks: Task[], title: string, description?: string): Task[];
function addTask(tasks: Task[], title: string, description?: string ,priority?: "high" | "medium" | "low"): Task[];
function addTask(
  tasks: Task[],
  title: string,
  description?: string,
  priority?: "high" | "medium" | "low"
): Task[] {
  const newTask = {
    id: tasks.length + 1,
    title,
    isCompleted: false,
    description,
    priority,
  };
  return [...tasks, newTask];
}

function toggleTaskStatus(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  );
}

let myTasks: Task[] = [];

myTasks = addTask(myTasks, "Task--01");
myTasks = addTask(myTasks, "Task--02" , "decription of task--02");
myTasks = addTask(myTasks, "Task--03" , "decription of task--02", "medium" );

console.log("myTasks => ", myTasks);

myTasks = toggleTaskStatus(myTasks, 3);

console.log("one taske is DONE  => ", myTasks);
