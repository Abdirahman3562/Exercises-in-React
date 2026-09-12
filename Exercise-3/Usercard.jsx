const UserCard = (props) =>{
    return (
        <div>
                <h1>My Username is: {props.Username} </h1>
            <p>my Email is :  {props.Email}</p>
            <span>my age is : {props.age}</span>
        </div>
    )
}

export default UserCard;