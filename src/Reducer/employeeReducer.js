export default function employeeReducer(store=[],action){
    if(action.type === 'GET_EMPLOYEE'){
        return action.payload; // return the information(payload) coming from respective action
    }
    if(action.type === 'DELETE_SPECIFIC_EMPLOYEE'){
        return store.filter((employee)=>{
            return employee.id != action.payload;
        });
    }
    if(action.type === 'DELETE_ALL_EMPLOYEE'){
        return [];
    }
    return store;
}