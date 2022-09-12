import { useState } from  'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [fNameError, setfNameError] = useState("");
    const [lNameError, setlNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passError, setpassError] = useState("");
    const [cpassError, setcpassError] = useState("");

    const handleFname = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1){
            setfNameError("First name is required!");
        } else if(e.target.value.length <2) {
            setfNameError("First name must be at least 2 characters long!");
        } else{
            setfNameError("");
        }
    }
    const handleLname = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1){
            setlNameError("Last name is required!");
        } else if(e.target.value.length <2) {
            setlNameError("Last name must be at least 2 characters long!");
        } else{
            setlNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setemailError("Email is required!");
        } else if(e.target.value.length <5) {
            setemailError("Email must be at least 5 characters long!");
        } else{
            setemailError("");
        }
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setpassError("Password is required!");
        } else if(e.target.value.length <8) {
            setpassError("Password must be at least 8 characters long!");
        } else{
            setpassError("");
        }
    }
    const handleCPass = (e) => {
        setCpassword(e.target.value);
        if(e.target.value.length < 1){
            setcpassError("Confrim Password is required!");
        } else if(e.target.value.length <8) {
            setcpassError("Confrim Password must be at least 8 characters long!");
        } else if(e.target.value.length !== password) {
            setcpassError("Your Passwords do not match");
        } else{
            setcpassError("");
        }
    }

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

        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //     return "Thank you for submitting the form!";
	// } else {
    //     return "Welcome, please submit the form";
	// }
    // };

    return(
        <div>
            <form className='form col-4 mx-auto' onSubmit={ createUser }>
                { hasBeenSubmitted ?
                <h3> Thank you for subitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label className='form-label'>First Name: </label>
                    <input className='form-control' type="text" value={firstName} onChange={ handleFname } />
                    { fNameError ?
                    <p className='text-danger'>{ fNameError }</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Last Name: </label>
                    <input className='form-control' type="text" value={lastName} onChange={ handleLname } />
                    { lNameError ?
                    <p className='text-danger'>{ lNameError }</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Email Address: </label>
                    <input type="text" value={email} onChange={ handleEmail } />
                    { emailError ?
                    <p className='text-danger'>{ emailError }</p> : null
                    }
                </div>
                <div>
                    <label className='form-label'>Password: </label>
                    <input className='form-control' type="password" value={password} onChange={ handlePass } />
                    { passError ?
                    <p className='text-danger'>{ passError }</p> : null
                    }
                </div>
                <div>
                    <label className="form-label">Confirm Password: </label>
                    <input className="form-control" type="password" value={Cpassword} onChange={ handleCPass } />
                    { cpassError ?
                    <p className='text-danger'>{ cpassError }</p> : null
                    }
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
