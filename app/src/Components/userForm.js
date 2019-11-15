import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([{
        fname: "",
        lname: "",
        email: "",
        password: "",
        tos: ""
    }]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return ( <
        div className = "user-form" >
        <
        Form >
        <
        Field type = "text"
        name = "fname"
        placeholder = "First Name" / > { " " } {
            touched.fname && errors.fname && ( <
                p className = "error-display" > { errors.fname } < /p>
            )
        } { " " } <
        Field type = "text"
        name = "lname"
        placeholder = "Last Name" / > { " " } {
            touched.lname && errors.lname && ( <
                p className = "error-display" > { errors.lname } < /p>
            )
        } { " " } <
        Field type = "email"
        name = "email"
        placeholder = "E-mail" / > { " " } {
            touched.email && errors.email && ( <
                p className = "error-display" > { errors.email } < /p>
            )
        } { " " } <
        Field type = "password"
        name = "password"
        placeholder = "Password" / > { " " } {
            touched.password && errors.password && ( <
                p className = "error-display" > { errors.password } < /p>
            )
        } { " " } <
        Field type = "checkbox"
        name = "tos"
        checked = { values.tos }
        />{" "} <
        button > Create User < /button>{" "} <
        /Form>{" "} {
            users.map((user, index) => ( <
                div className = "UserCard"
                key = { index } >
                <
                ul >
                <
                li > First Name: { users.fname } < /li>{" "} <
                li > Last Name: { user.lname } < /li> <li> E - mail: {user.email} </li > { " " } <
                li > Password: { user.password } < /li>{" "} <
                li > Accepted TOS ? : { user.tos } < /li>{" "} <
                /ul>{" "} <
                /div>
            ))
        } { " " } <
        /div>
    );
};

export default withFormik({
    mapPropsToValues({ fname, lname, email, password, tos }) {
        return {
            fname: fname || "",
            lname: lname || "",
            email: email || "",
            password: password || "",
            tos: tos || ""
        };
    },
    validationSchema: Yup.object().shape({
        fname: Yup.string()
            .min(2, "First Name must be at least 2 characters.")
            .required("First Name is required."),
        lname: Yup.string()
            .min(2, "Last Name must be at least 4 characters.")
            .required("Last Name is required."),
        email: Yup.string()
            .min(4, "Email must be at least 4 characters.")
            .required("Email is required."),
        password: Yup.string()
            .min(4, "Password must be at least 4 characters.")
            .required("Password is required."),
        tos: Yup.string().required()
    }),
    handleSubmit(values, { resetForm, setStatus }) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(response => {
                setStatus(response.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);