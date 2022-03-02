function CardComponent(Component) {
    function ContentComponent(props) {

        return (
            <>
            <div className="container" style={{ width: '350px', margin: '50px', display: 'inline-block' }}>
                <div className="card">
                    <div className="card-header">
                        <h3>Employee : {props.Name}</h3>
                    </div>
                    <div className="card-body">
                        <h2>Content is Here</h2>
                    </div>
                    <div className="card-footer">
                        <h4>ID : {props.Id}</h4>
                        <h4>Designation : {props.Designation}</h4></div>
                </div>
            <Component Data={props} />
            </div>
            </>
        )
    }
    return ContentComponent;
}

function withButton(props) {
    return (
        <>
        {console.log(props)}
            <button id={props.Data.Id} className="btn btn-warning">Update</button>
            <button id={props.Data.Id} className="btn btn-danger">Delete</button>
        </>
    )
}

function withoutButton() {
    return (
        <>
        <p>** No Action Required</p>
        </>
    )
}

var HOC1 = CardComponent(withButton);
var HOC2 = CardComponent(withoutButton);

export { HOC1, HOC2 };