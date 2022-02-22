
export default function EmployeeDataComponent(props){
    return(
        <div class="container" style={{width:'350px' ,margin:'50px',display:'inline-block'}}>
        <div class="card">
        <div class="card-header">
        <h3>{props.EmployeeName} </h3>
        </div>
        <div class="card-body">
        <img src={props.EmployeeAvatar} alt="avatarImage" width="100px" />
        </div>
        <div class="card-footer">
         <h4>EmployeeID : {props.EmployeeId} </h4>
        <h4>Designation : {props.EmployeeDesignation} </h4></div>
        </div>
        </div>
    
        )
}