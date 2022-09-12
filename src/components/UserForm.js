import { useState } from  'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [Cpassword, setCpassword] = useState("");  

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
    };

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={Cpassword} onChange={ (e) => setCpassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {Cpassword}</p>
            </div>
        </div>
    );
};

export default UserForm;
