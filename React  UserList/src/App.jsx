//style
import './App.css'
import { useState } from 'react'
//components
import Navbar from './componets/navbar/navbar'
import Footer from './componets/footer/footer'
import Userlist from './componets/userlist/Userlist'
import NewUser from './componets/newUser/NewUser'
function App() {
  const [shouModal, setshouModal] = useState(false)
 const [user, setUser] = useState([

 ])
const HandleDelete = (id) => {
  setUser((prev) => {
    return prev.filter((event) =>{
      return event.id !== id
    })
  })
}
const addUser = (user) => {
  setUser((prev) => {
    return [...prev,user]
  })
  setshouModal(false)
}

const deleteForm = (e) => {
 if(e.target.className === "overlay") 
 {setshouModal(false)}
 if(e.key === "Escape") 
 {setshouModal(false)}
  }

  return (
    <div onClick={deleteForm} onKeyDown={deleteForm}  className='App'>
      <Navbar usersLength={user.length}/>
        <main>
    <div className='no-users'>
      {user.length===0 &&  <h2>NO USER</h2>}
    </div>
    <Userlist user={user} HandleDelete={HandleDelete}/>
        </main>
        {shouModal && <NewUser addUser = {addUser} />}
        <button onClick={() => setshouModal(true)} className='create-user'>Create User</button>
      <Footer/>
    </div>
  )
}

export default App
// {
//   id:0,
//   image:'    =1',
//   fristname:'Asror',
//   lastname:'Faxriddinov',
//   age:'21',
//   form:'Uzbekistan',
//   job:'Frontend Developer',
//   gender:'Male',
// },