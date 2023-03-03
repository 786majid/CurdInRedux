//my work page:-
import react from 'react'
import shortid from 'shortid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetcher, useNavigate } from 'react-router-dom';
import { addItem, getupData, loadData } from '../../redux/populateRedux/populate.action';
import { useHistory, useParams } from 'react-router-dom';



const Employee = () => {


    const { id } = useParams();
    // console.log('kkk',id);

    const navigation = useNavigate();
    const dispatch = useDispatch();

// this code for add as well as update:-
    const myInfo = (yes) => {
        if (id) {
            dispatch(
                getupData(id, value),
            )
        } else {
            Object.assign(value, { id: shortid.generate() })
            dispatch(
                addItem(value)
            )
        }
    }


    //it is for show the data(information) at browser.or jis page pe data dikhana hota hai ye line hm whn likhte hai
    const getAll = useSelector((state) => state.POPULATE.list);
    // console.log('jiin',getAll);

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: ""
    });
    //it is for putup the value
    useEffect(() => {
        if (id) {
            const putupData = getAll.find((p) => p.id == id);
            setValue({                                     //it is for kept the value at some place after if condition check
                name: putupData.name,
                email: putupData.email,
                phone: putupData.phone
            })
        } else {
            setValue({                                    //otherwise we simply put the empty value
                name: "",
                email: "",
                phone: ""
            })
        }
    }, [])

    // console.log('iii', value);
    return (

        <div>

            <button type="submit" class="btn btn-primary" onClick={() => navigation('/')}>Back </button>

            <form>
                <div className="container" id="update" >
                    <label> Name: </label>
                    <input type="text" class="form-control" id="name" value={value.name} placeholder="Inter Your Name" onChange={e => setValue({ ...value, name: e.target.value })} />
                </div>
                <div className="container" id="update">
                    <label> Email:</label>
                    <input type="text" class="form-control" id="email" value={value.email} placeholder="Inter Your Email" onChange={e => setValue({ ...value, email: e.target.value })} />
                </div>
                <div className="container" id="update" >
                    <label> Phone: </label>
                    <input type="number" class="form-control" id="number" value={value.phone} placeholder=" Phone " onChange={e => setValue({ ...value, phone: e.target.value })} />
                </div>

                {/* <button type="button" class="btn btn-primary" onClick={() => dispatch(addItem(value), Object.assign(value, { id: shortid.generate() }), console.log('jii', value), navigation('/'))}>Submit</button> */}
                <button type="button" class="btn btn-primary" onClick={() => (myInfo(value), navigation('/'))}>Submit</button>

            </form>
        </div>
    )
}

export default Employee;

