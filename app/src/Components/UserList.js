import React from "react";

function UserList(user) {
    return ( <
        div > { " " } {
            user.map(user => ( <
                ul key = { user.id } >
                <
                li > First Name: { user.fname } < /li> <li> Last Name: {user.lname} </li > { " " } <
                li > E - mail: { user.email } < /li> <li> Password: {user.password} </li > { " " } <
                li > Accepted TOS ? : { user.tos } < /li>{" "} <
                /ul>
            ))
        } { " " } <
        /div>
    );
}
export default UserList;