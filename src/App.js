import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import './App.css';
import Plan from './Plan';

let App = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  // console.log(items);

  let addItems = () =>{
    if(!inputData){
      
    }else{
      setItems([...items,inputData ]);
      setInputData("");
    }
    
    
  }

  let textChange = (e) =>{
      setInputData(e.target.value);
  } 

  let deleteHandle = (id) =>{
    // console.log(id);
    let updatedItems = items.filter((elm, ind) =>{
      return id !== ind;
    });
    setItems(updatedItems);
  }
  return (
  <div className="container-fluid my-5">
    <div className="row">
      <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
        <h2 className='text-center'>Today's plan</h2>
        <div className="row">
          <div className="col-9">
            <input type="text" onChange={textChange} className="form-control" placeholder='Write your plan Here ....' value={inputData} />
          </div>
          <div className="col-2">
              <button onClick={addItems} className="btn btn-warning px-5 font-weight-bold">
                Add
              </button>
          </div>
          <div className="container-fluid">
            <ul className="list-unstyled row m-5">
              {
              items.map((elm,ind) =>{
                 return <Plan keyer={ind} value={elm} SendData={deleteHandle}/>
              })
            }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
