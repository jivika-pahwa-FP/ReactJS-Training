export default function EmployeeDetailComponent(){
    var date = new Date().toDateString();
    var details = {
        name : "Jivika",
        avatar : "https://tse4.mm.bing.net/th/id/OIP.lKsFwK24yUtKhYYOXdfZlwHaHS?pid=ImgDet&w=1130&h=1111&rs=1",
        createdAt : date,
        id : 1
    }

    return(  
            <div class="container">
                <div class="card">
                <div class="card-header">
                <h3>Employee Card : {details.name} </h3>
                </div>
                <div class="card-body">
                <img src={details.avatar} alt="avatarImage" width="200px" />
                </div>
                <div class="card-footer">
                 <h4>Employee ID : {details.id} </h4>
                <h4>Created At : {details.createdAt} </h4></div>
                </div>
            </div>
    )
}