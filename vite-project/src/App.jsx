import { useEffect, useState } from 'react'
import './App.css'
import { useLocation, useNavigate,Route,Routes } from 'react-router-dom'
import  { v4 } from 'uuid'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import FormCreate from './components/FormCreate/FormCreate'
import Detail from './components/Detail/Detail'

let charTest={
  id:"9001",
  name:"Toto",
  age:"555",
  force:"ninguna",
  img:"https://m.media-amazon.com/images/M/MV5BMjY5MTI3OGEtMTgyYy00ODM0LWIzNGQtNTdmYjE0MDY3MjE3XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_.jpg",
  name_search:""
}

function App() {
  const [characters,setCharacters]=useState([])
  const [access,setAccess]=useState(false)
  const navigate=useNavigate()
  const location=useLocation()
  
  useEffect(()=>{
    setCharacters([charTest])
    !access&&navigate("/")
  },[])

  const deleteChar=(name)=>{
    const result=characters.filter((ch)=>ch.name!==name)
    setCharacters(result)
  }

  const addCharacter=(ch)=>{
    const idCharacter=v4()
    let character=ch
    character.id=idCharacter
    setCharacters([...characters,character])
  }

  const editCharacter=(charEdit)=>{
    let result=characters.map((ch)=>{
      if(charEdit.id===ch.id){
        ch=charEdit
      }
      return ch
    })
    setCharacters(result)
  }
  const loginAccess=()=>{
    setAccess(true)
    navigate("/home")
  }

  function logout(){
    setAccess(false)
    navigate("/")
  }

  return (
    <div>
      {location.pathname!=='/'&&<Navbar logout={logout}/>}
      <Routes>
        <Route path='/' element={<Login loginAccess={loginAccess}/>}/>
        <Route path='/home' element={<Home characters={characters}/>}/>
        <Route path='/form/:type' element={<FormCreate
        characters={characters}
        addCharacter={addCharacter}
        editCharacter={editCharacter}
        deleteChar={deleteChar}
        />}/>
        <Route path='/detail/:id' element={<Detail characters={characters}/>}/>
        </Routes>     
    </div>
  )
}

export default App
