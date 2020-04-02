
const taskReducer = (state = [] , action) => {
  let stateCopy;
 
  switch (action.type) {
    
    case "CREATE_TASK":
      stateCopy = [...state, action.task];
      console.log(stateCopy)
      return stateCopy;

    case "DELETE_TASK":
      stateCopy = state.filter(task => task.number !== action.id);
      return stateCopy;

    case "UPDATE_TASK":
      stateCopy = state.map(task => {
        const { number, type, description, assignee, status } = action.task;
        if (task.number == number) {
          task.type = type;
          task.description = description;
          task.assignee = assignee;
          task.status = status;
        }
        return task;
      });
      return stateCopy;

    default:
      return state;
  }
};

export default taskReducer;
