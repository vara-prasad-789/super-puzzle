import { useNavigate } from 'react-router-dom'
import './index.css'

const SuccessSignUp = (props) =>{

    const navigate = useNavigate()

    const submitForm = (event) => {
        event.preventDefault()
        const profilePicture = document.getElementById("profilePicture").value
        const dob = document.getElementById("dob").value
        const address = document.getElementById("address").value
        const phonenumber = document.getElementById("phonenumber").value
        const usersList = localStorage.getItem("userList")
        const usersData = JSON.parse(usersList)
        for(let a in usersData){
            if(usersData[a].username === props.email){
                usersData[a].profilePicture = profilePicture
                usersData[a].dob = dob
                usersData[a].address = address
                usersData[a].phonenumber = phonenumber
            }
        }
        const stringifyUsersList = JSON.stringify(usersData)
        localStorage.setItem('userList',stringifyUsersList)
        navigate('/', {replace: true})
        alert("user Added Successfully! Now You can Login ! ")
    }


    return(
        <div className="success-signup">
            <h1>Complete Your Profile :</h1>
            <form className='success-signup-form' onSubmit={submitForm}>
                <label htmlFor='profilePicture' className='success-signup-label'>Upload Profile Picture :</label>
                <input type="file" id="profilePicture" className='success-signup-input' />
                <label htmlFor='dob' className='success-signup-label'>Date Of Birth :</label>
                <input type="date" id='dob' className='success-signup-input' />
                <label htmlFor='address' className='success-signup-label'>Address :</label>
                <input type="text" id='address' className='success-signup-input' />
                <label htmlFor='phonenumber' className='success-signup-label'>Phone Number :</label>
                <input type="number" id='phonenumber' className='success-signup-input' />
                <button type="submit" className='success-signup-btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default SuccessSignUp