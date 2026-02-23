import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [readData, setReadData] = useState("") // 👈 NEW

    const fsCreate = async () => {
    const res = await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
    const data = await res.json()
    setMessage(data.message)
  }

  // 🔹 FS READ (show below)
  const fsRead = async () => {
    const res = await fetch("http://localhost:5000/read")
    const data = await res.json()
    setReadData(data.text) // 👈 show below
  }

  return (
    <>
      <div style={{display:"flex",backgroundColor:"#2d3748",alignItems:"center",padding:"10px 20px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s" style={{height:"100px",borderRadius:"8px",marginRight:"20px"}} alt="Logo" />
       <ul style={{listStyle:"none",display:"flex",padding:"20px",gap:"20px",color:"white",margin:0}}>
        <li>Home</li>
        <li>About</li>
        <li>ContactUs</li>
        <li>Services</li>
       </ul>
      </div>
      <hr />
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px"}}>
        <h1 style={{fontSize:"32px",color:"#2d3748",marginBottom:"30px"}}>FS MODEL FOR NODE</h1>
        <textarea style={{width:"60%",height:"150px",padding:"10px",fontSize:"16px",border:"2px solid #2d3748",borderRadius:"8px",marginBottom:"30px",fontFamily:"Arial, sans-serif"}} ></textarea>
        <div style={{display:"flex",justifyContent:"space-around",width:"60%",gap:"20px"}}>
          <button style={{padding:"10px 30px",fontSize:"16px",backgroundColor:"#2d3748",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1} } onClick={fsCreate}>FS CREATE</button>
          <button style={{padding:"10px 30px",fontSize:"16px",backgroundColor:"#2d3748",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1}} onClick={fsRead}>FS READ</button>
        </div>
        <textarea style={{width:"60%",height:"150px",padding:"10px",fontSize:"16px",border:"2px solid #e0e0e0",borderRadius:"8px",marginTop:"30px",fontFamily:"Arial, sans-serif",backgroundColor:"#f5f5f5"}} ></textarea>
      </div>
    </>
  )
}

export default App
