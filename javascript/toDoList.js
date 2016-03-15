var toDoList = function () {
  var task = {
    name: ko.observable(),
    description: ko.observable(),
    priority: ko.observable()
  };
  
  var tasks = ko.observableArray();
  
    
  var clearTask = function() {
    task.name(null);
    task.description(null);
    task.priority("1")
  };
  
  var addTask = function() {
    console.log("Adding new task with name:" + task.name());
  tasks.push({ 
    name: task.name(), 
    description: task.description(), 
    priority: task.priority(),
    status: ko.observable('new')});
    clearTask();
};

  
  var deleteTask = function(task) {
   console.log("Deleting task with name:" + task.name);
    tasks.remove(task);
  };
  
  var completeTask = function(task) {
    console.log("Completeing task with name:" + task.name);
    task.status('complete');
  };
  
  var sortByPriority = function() {
    console.log("Sorting by priority");
    tasks.sort(function(left, right){
      return left.priority == right.priority ? 0 : (left.priority < right.priority ? -1 : 1)
    });
  };
  
  var sortByName = function() {
    console.log("Sorting by name");
    tasks.sort(function(left, right) {
      return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1)
    });
  };
  
   
  var init = function() {
    ko.applyBindings(toDoList);
  };
  
  $(init);
  
  return {
    task: task,
    tasks: tasks,
    addTask: addTask,
    completeTask: completeTask,
    deleteTask: deleteTask,
    sortByPriority: sortByPriority,
    sortByName: sortByName
  };
  
}();