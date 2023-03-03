//3rd make this:-(it is my reducer page)
// import { LOAD_DATA } from './populate.actionTypes'

const initialState = {
  list: []
}

//reducer:-(populateReducer)
const populateReducer = (state = initialState, action) => {

  switch (action.type) {

    // //for load data:_
    // case 'load data':
    //   // console.log("jaall",action.payload);
    //   return {
    //     ...state,                //it is for get initial dataa .And also information(value) of list.
    //     list: action.payload
    //   }


    //for add(insert):-
    case 'additem':
      // console.log("ok",action.payload);
      return {
        ...state,                  //it means old value as it is
        list: [
          ...state.list,      //mtlb initial state me k6 data th ya nhi ,then also we add new data (that is => old value)
          action.payload           //it is new value
        ]
      }


    //for delete:-
    case 'deleteitem':
      const newData = state.list.filter((x) => x.id !== action.payload)
      // const newData = state.list.filter((x) => console.log('jiikk',x))
      // console.log('jjjj',x); 
      // console.log('ooook',action.payload.id);
      return {
        ...state,
        list: newData,
      }

    //for update data:-(updateUser) 
    case 'updateuser':
      const newUpdatedData = state.list.map((opp) => {
        console.log('send', action.payload);
        console.log('old', opp);
        if (opp.id == action.payload.id) {
          return {
            ...opp,
            // id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone
          }
        }
        else {
          return opp;
        }
      })
      // console.log('sss', newUpdatedData);
      return {
        ...state,
        list: newUpdatedData,
      }

      
    default: return state;           //otherwise only state value
  }
}

export { populateReducer }