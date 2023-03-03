//This is my home page:-
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { addItem } from '../../redux/populateRedux/populate.action';
import { loadData } from '../../redux/populateRedux/populate.action';
import { deleteItem } from '../../redux/populateRedux/populate.action';
// import { updateItem } from '../../redux/populateRedux/populate.action';
import { userInfo } from '../../redux/populateRedux/populate.action';
import { updateUser } from '../../redux/populateRedux/populate.action';
import { useParams } from 'react-router-dom';



const Populate = () => {


    const navigation = useNavigate();

    // const item =
    //     [
    //         {
    //             id: 1,
    //             Name: "Roy",
    //             Email: "roy123@gmail.com",
    //             Phone: 12345,
    //         },
    //         {
    //             id: 2,
    //             Name: "Alice",
    //             Email: "alis123@gmail.com",
    //             Phone: 82367,
    //         },
    //         {
    //             id: 3,
    //             Name: "Senan",
    //             Email: "senan123@gmail.com",
    //             Phone: 92389,
    //         },
    //         {
    //             id: 4,
    //             Name: "Defne",
    //             Email: "defne123@gmail.com",
    //             Phone: 52367,
    //         },
    //         {
    //             id: 5,
    //             Name: "Ziyan",
    //             Email: "ziyan123@gmail.com",
    //             Phone: 735245,
    //         },
    //         {
    //             id: 6,
    //             Name: "Arhaan",
    //             Email: "arhaan123@gmail.com",
    //             Phone: 983518,
    //         }];

    //viewStore
    const viewPopulate = useSelector((state) => state.POPULATE)    //POPULATE means we are taking all reducer.
    const edit = useSelector((state) => state.POPULATE.list)          //it is for show the data(information) at browser.POPULATE.list means we are taking only list value of reducer.
    // console.log('yesss',edit);
    // console.log("anything",viewPopulate);  // this console for verification
    const dispatch = useDispatch();

 
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2>Employee Table:-</h2>
                        </div>

                        {/* body */}
                        <div className='card-body'>
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // viewPopulate?.list?.map((data) => {
                                        edit?.map((data) => (
                                            // console.log(data);

                                            <tr>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>
                                                    {/* <button className="btn text-warning btn-act" onClick={() => dispatch(updateItem(data.id), navigation('insert'))} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button> */}
                                                    <button className="btn text-warning btn-act" onClick={() => (navigation(`update/${data.id}`))} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                                                    {/* <button className="btn text-danger btn-act" onClick={() => alert("Hello you don't able to delete")} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button> */}
                                                    <button className="btn text-danger btn-act" onClick={() => dispatch(deleteItem(data.id))} data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                {/* <button variant="primary" onClick={() => dispatch(loadData(item),console.log('jii',item))}>Add</button> */}
                                {/* <button type="submit" class="btn btn-primary" onClick={() => dispatch(loadData(item))}>Add</button> */}
                                <button type="submit" class="btn btn-primary" onClick={() => navigation('insert')}>Add</button>


                                {/* //it is for delete all data   */}
                                <button type="submit" class="btn btn-primary" onClick={() => dispatch(
                                    {
                                        type: 'load data',
                                        payload: []            //we can remove this line completely
                                    }
                                )}>Refresh</button>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Populate
