import './Userlist.css'
function Userlist({ user, HandleDelete }) {
    return (
        <div className='userList'>
            <div className="userList-container container">
                {user.map((user) => {
                    return (
                        <div className="card" key={user.id}>
                            <div className="card-inner">
                                <img src={user.image} alt="user.name" height={150} width={150} />
                                <h3>{user.fristname} {user.lastname} {user.age} age</h3>
                                <p>From:{user.form}</p>
                                <p>Job:{user.job}</p>
                                <p>gender:{user.gender}</p>
                                <button onClick={() => HandleDelete(user.id)}>delete</button>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}


export default Userlist
