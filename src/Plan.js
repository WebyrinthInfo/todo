let Plan = (props) =>{
    return(

        <div  className="container shadow">
            <li key={props.keyer} className=" p-2 my-2 col-sm-9">
            {props.value}
            <button className="btn btn-danger my-2col-sm-2 offset-1" onClick={() => props.SendData(props.keyer)}>X</button>

        </li>

        </div>

        
        

       
        );
        
}

export default Plan;