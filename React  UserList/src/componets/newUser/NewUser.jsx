import './NewUser.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
function NewUser({addUser}){
    const[user, setuser] = useState({
  id:uuidv4(),
  image:'',
  fristname:'',
  lastname:'',
  age:'null',
  form:'',
  job:'',
  gender:'',
})


const HandleSubmit = (e) =>{
e.preventDefault()
addUser(user)
 
}
 return(
        <div  className='modal-wrapper'> 
        <div className="overlay">
            <div className="modal">
               <h2>Create New User</h2>
               <form onSubmit={HandleSubmit}>
                <label>
                    <span>Image URL:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,image : e.target.value}
                    })}} type="url" name="" id=""  required/>
                </label>
                <label>
                    <span>Frist Name:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,fristname:e.target.value}
                    })}} type="text" name="" id=""  required/>
                </label>
                <label>
                    <span>Last Name:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,lastname:e.target.value}
                    })}} type="text" name="" id=""  required/>
                </label>
                <label>
                    <span>Age:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,age:e.target.value}
                    })}} type="number" name="" id=""  required/>
                </label>
                <label>
                    <span>Form:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,form:e.target.value}
                    })}} type="text" name="" id=""  required/>
                </label>
                <label>
                    <span>Job:</span>
                    <input onChange={(e) => {setuser((prev) => {
                        return{...prev,job:e.target.value}
                    })}} type="text" name="" id=""  required/>
                </label>
                <div className="gender">
                    <span>Gender:</span>
                    <label>
                        <span>Male</span>
                        <input onChange={(e) => {setuser((prev) => {
                        return{...prev,gender:e.target.value}
                    })}} type="radio" required  name="gender" value='male' id="" />
                    </label>
                    <label>
                        <span>Female</span>
                        <input onChange={(e) => {setuser((prev) => {
                        return{...prev,gender:e.target.value}
                    })}} type="radio" required  name="gender" value='female' id="" />
                    </label>
                </div>
                <button  className='modal-btn'>Submit</button>
                </form> 
            </div>
        </div>
        </div>
    )
}
export default NewUser