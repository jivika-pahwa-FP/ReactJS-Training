export default function DataBindingComponent(){

    var username = "FarePortal";
    function getChangeValue(){
        
    }
    
    return (
        <div>
           Enter User Name :  <input type="text" value={username} onChange={getChangeValue}/>
        </div>
    )
}