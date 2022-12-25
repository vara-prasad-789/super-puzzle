import emailjs from '@emailjs/browser';
import SuccessSignUp from '../SuccessSignUp';
import {Component} from 'react'
import "./index.css"

class SignupPage extends Component {
    state = {email:"",password:"",fullName:"",Success:false,usernameinput1:"",passwordInput:"",fullNameInput:""}

    setEmail = (event) => {
        this.setState({email: event.target.value})
    }
    setPassword = (event) => {
        this.setState({password: event.target.value})
    }
    setFullName = (event) => {
        this.setState({fullName: event.target.value})
    }


    onSignUp = (event) => {
        event.preventDefault()
        const {email,password,fullName} = this.state

        const formData = {
            username: email,
            password: password,
            fullname: fullName
        }

        if(email === ""){
            this.setState({usernameinput1: "Enter Username"})
        }else if(password === ""){
            this.setState({usernameinput1:"",passwordInput:"Enter Password"})
        }else if(fullName === ""){
            this.setState({usernameinput1:"",passwordInput:"",fullNameInput:"Enter Fullname"})
        }else{
            emailjs.send('service_2l1h7rh','template_pdcw7gq', formData, 'yq4oM7qFYdY6Mqhqu')
            .then((response) => {
            const list = localStorage.getItem('userList')
            const userList2 = JSON.parse(list)
            const noOfUsers = Object.values(userList2).length
            const newUser = "user"+(noOfUsers+1).toString()
            userList2[newUser] = formData
            const stringifyData = JSON.stringify(userList2)
            localStorage.setItem('userList',stringifyData)        
            this.setState({Success: true})
            }, (err) => {
            console.log('FAILED...', err);
            });
        }
    }


    render(){
        const{Success,email,password,fullName,usernameinput1,passwordInput,fullNameInput} = this.state

        return(
            <div>
            {Success ? (<SuccessSignUp email={email} password={password} fullName={fullName} />) : (
                <div className='signup-page'>
                    <h1>Sign Up</h1>
                    <form onSubmit={this.onSignUp} className="signup-form">
                        <label htmlFor='email' className='signup-labels'>Username or Email* :</label>
                        <input type="email" id='email' className='signup-inputs' placeholder='Enter Email' onChange={this.setEmail}/>
                        <p>{usernameinput1}</p>
                        <label htmlFor='password' className='signup-labels'>Password* : </label>
                        <input type="password" id='password' className='signup-inputs' placeholder='Enter Password' onChange={this.setPassword}/>
                        <p>{passwordInput}</p>
                        <label htmlFor='fullname' className='signup-labels'>Full Name* :</label>
                        <input type="text" id="fullname" className='signup-inputs' placeholder='Enter Full Name' onChange={this.setFullName} />
                        <p>{fullNameInput}</p>
                        <button type="submit" className='signup-btn-forme'>Sign Up for me </button>
                    </form>
                </div>
            )}
            </div>
        )
    }
}

export default SignupPage

