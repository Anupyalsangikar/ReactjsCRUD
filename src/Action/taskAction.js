export const createTask = (task) => {
    return (dispatch, getState) =>{
        dispatch({type: 'CREATE_TASK', task});
    }
};

export const deleteTask = (id) => {
    return (dispatch, getState) =>{
        dispatch({type: 'DELETE_TASK', id});
    }
};

export const updateTask = (task) => {
    return (dispatch, getState) =>{
        dispatch({type: 'UPDATE_TASK', task});
    }
};