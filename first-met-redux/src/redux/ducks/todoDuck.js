//Actions (Action Types)
const ACTION_TYPE_ADD_TODO = "my-app/todo/ADD_TODO";
const ACTION_TYPE_REMOVE_TODO = "my-app/todo/REMOVE_TODO";
const ACTION_TYPE_REMOVE_ALL = "my-app/todo/REMOVE_ALL";

//reducer
const initialState = [];

function todoReducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPE_ADD_TODO:
            return state.concat(action.text);
        case ACTION_TYPE_REMOVE_TODO:
            return state.slice(0, -1);
        case ACTION_TYPE_REMOVE_ALL:
            return [];
        default:
            return state;
    }
}

export default todoReducer;

//Action Creators
export function addTodoActionCreator(text){
    return {
        type: ACTION_TYPE_ADD_TODO,
        text: text,
    };
}

export function removeTodoActionCreator(){
    return {
        type: ACTION_TYPE_REMOVE_TODO,
    };
}

export function removeAllActionCreator(){
    return {
        type: ACTION_TYPE_REMOVE_ALL,
    };
}