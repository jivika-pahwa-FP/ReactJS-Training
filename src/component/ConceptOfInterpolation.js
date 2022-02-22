export default function ConceptOfInterpolation(){
    let username = "Jivika";
    function GetDate(){
        return new Date().toLocaleString();
    }
    return (
        <div>
            <h4>Welcome {username} </h4>
         <p>Date : { GetDate() } </p>
        </div>
    )

}