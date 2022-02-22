export default function userPropsComponent(props){
    // props.details.salary = 45;
    return (
        <>
    <h2> User ID : {props.id} </h2>
    <h3> User Name : {props.name} </h3>
    <h4> User Age : {props.age} </h4>
        </>
    )
}