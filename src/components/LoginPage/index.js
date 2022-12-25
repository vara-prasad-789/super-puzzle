import {Component} from 'react'
import {Link,Navigate} from 'react-router-dom'
import './index.css'

class LoginPage extends Component {
    state = {username: "",password: "",errMsg:"",userLogin:false,LoginFailed:"",usernameInput:"",passwordInput:""}

    storeUserNameInput = (event) =>{
        this.setState({username: event.target.value})
    }
    storePasswordInput = (event) =>{
        this.setState({password: event.target.value})
    }
    
    submitForm = async event => {
        event.preventDefault()
        const {username,password} = this.state
        let l = 0
        if(username === ""){
            this.setState({usernameInput: "Enter Username",LoginFailed:""})
        }else if(password === ""){
            this.setState({usernameInput:"",passwordInput: "Enter password",LoginFailed:""})
        }else{
            const list = localStorage.getItem('userList')
            const userList2 = JSON.parse(list)
            for(let a in userList2){
                if(userList2[a].username === username){
                    l = 1
                    if(userList2[a].password === password){
                        this.setState({userLogin: true,LoginFailed:"",passwordInput:""})
                        break
                    }else{
                        this.setState({LoginFailed:"Username or Password Wrong !"})
                    }
                }else{
                    l = 0
                }
            }
            if(l === 0){
                this.setState({LoginFailed:"Username Exists ! Please Sign Up"})
            }
        }
    }

    componentDidMount(){
        this.setState({userLogin:false})
        const userList = localStorage.getItem('userList')
        if(userList === null){
            const data = {}
            const stringifyData = JSON.stringify(data)
            localStorage.setItem("userList",stringifyData)
        }
    }


    render(){
        const{userLogin,LoginFailed,usernameInput,passwordInput} = this.state

        return(
            <div>
            {userLogin ? (<Navigate to="/puzzle" />): (
            <div className='login-page'>
                <h1>For a Existing User</h1>
                <form className='login-form' onSubmit={this.submitForm}>
                    <label htmlFor="username" className="labels">Username :</label>
                    <input type="email" id="username" className='inputs' placeholder='Enter Username' onChange={this.storeUserNameInput}/>
                    <p>{usernameInput}</p>
                    <label htmlFor="password" className="labels">Password :</label>
                    <input type="password" id="password" className='inputs' placeholder='Enter Password'onChange={this.storePasswordInput}/>
                    <p>{passwordInput}</p>
                    <button type="submit" className='login-btn'>Login</button>
                </form>
                <p>{LoginFailed}</p>
                <h1>For a New User</h1>
                <Link to="/signup">
                <button type="button" className='signup-btn'>Sign Up</button>
                </Link>
            </div>
            )
            }
            </div>
            )
}
}

export default LoginPage