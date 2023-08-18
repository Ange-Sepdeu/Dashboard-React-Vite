import React, {useState} from 'react'
import "../css/cv.css"

function Cv() {
    const [name, setName] = useState("")
  return (
    <>
    <div className='container'>
        <div className='input-left'>
            <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="" 
            cols={45}
            rows={20}
            id="" />
        </div>
            <div className="input-right">
                <textarea rows={20} cols={120} value={name} disabled id="" />
            </div>
    </div>
    </>
  )
}

export default Cv