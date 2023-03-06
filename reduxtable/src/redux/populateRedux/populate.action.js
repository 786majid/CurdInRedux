//2nd make this:-(it is my action page)

// // for load data:
 const loadData = (dataa) => {           //dataa keyword is for get the information from load data from Employee page        
console.log('yes',dataa);
     return {                              //it is the action's payload
     type: 'load data',                      // it means what to do
        payload: dataa                           //payload me value hai
     }
 }
 export { loadData }


// for add (insert):-
export const addItem = (val) => {
    // console.log('yesddd',val);
    return {
        type: "additem",
        payload: val


    }
}

//for delete data:-
export const deleteItem = (id) => {   //export const deleteItem = (payload) => {
    // console.log('hiii',id); 
    return {
        type: "deleteitem",
        payload: id
    }

}

//for update data:- 
export const getupData = (id, val) => {
    // console.log('senddd',id);
    const data = {
        id: id,
        name: val.name,
        email: val.email,
        phone: val.phone
    }
    return {
        
        type: "updateuser",
        payload: data
    }

}
