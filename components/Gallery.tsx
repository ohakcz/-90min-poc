import React, { useState } from 'react'
export default function Gallery({ images=[] }){
  const [i,setI] = useState(0)
  return (
    <div style={{marginTop:18}}>
      <div style={{borderRadius:12, overflow:'hidden', cursor:'pointer', background:'#eee', height:300}}>
        <img src={images[i]?.src} alt={images[i]?.alt} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
      </div>
      <div style={{display:'flex', gap:8, marginTop:8, overflowX:'auto'}}>
        {images.map((img,idx)=>(
          <button key={idx} onClick={()=>setI(idx)} style={{border: idx===i?'2px solid #ffd600':'none', padding:0}}>
            <img src={img.src} alt={img.alt} style={{width:120,height:70,objectFit:'cover',borderRadius:8}}/>
          </button>
        ))}
      </div>
    </div>
  )
}