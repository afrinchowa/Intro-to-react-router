/**
 * state --> data
 * state --> loader
 * use effect
 * fetch --> state set --> set state
 * 
 */
import './Users.css'
import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Fantstic users</p>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;