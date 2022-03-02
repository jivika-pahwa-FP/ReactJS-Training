
export default function EmployeeDataComponent(props){
    return(
        <div className="container" style={{width:'350px' ,margin:'50px',display:'inline-block'}}>
        <div className="card">
        <div className="card-header">
            {/* {console.log(props.EmployeeName)} */}
        <h3>{props.EmployeeName} </h3>
        </div>
        <div className="card-body">
        <img src={props.EmployeeAvatar} alt="avatarImage" width="100px" />
        </div>
        <div className="card-footer">
         <h4>EmployeeID : {props.EmployeeId} </h4>
        <h4>Designation : {props.EmployeeDesignation} </h4></div>
        </div>
        </div>
    
        )
}