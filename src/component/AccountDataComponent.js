
export default function AccountDataComponent(props){
    return(
        <div className="container" style={{width:'350px' ,margin:'50px',display:'inline-block'}}>
        <div className="card">
        <div className="card-header">
        <h3>{props.name} </h3>
        </div>
        <div className="card-body">
        <img src={props.name} alt={props.name} width="100px" />
        </div>
        <div className="card-footer">
         <h4>EmpID : {props.id} </h4>
        <h4>EmpDesignation : {props.percentage} </h4></div>
        </div>
        <br />
        <button className = "btn btn-danger" id={props.id} onClick={props.deleteBtn}>Delete</button>
        </div>
    
        )
}