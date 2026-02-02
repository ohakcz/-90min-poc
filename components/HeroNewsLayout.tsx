import React, { useState } from 'react'
export default function HeroNewsLayout({ heroImage, heroTitle, heroPerex, newsColumn }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <section style={{display:'grid', gridTemplateColumns:'1fr 380px', gap:24, padding:24}}>
      <div style={{background:'#fff', borderRadius:12, overflow:'hidden'}}>
        <div style={{width:'100%', height:300, background:'#ddd'}}></div>
        <div style={{padding:24}}>
          <h1 style={{fontSize:32}}>{heroTitle}</h1>
          <p style={{color:'#666'}}>{heroPerex}</p>
          <button onClick={()=>setExpanded(s=>!s)}>{expanded ? 'Zúžit news' : 'Rozšířit hero'}</button>
        </div>
      </div>
      <aside style={{background:'#fff', borderRadius:12, padding:16}}>{newsColumn}</aside>
    </section>
  )
}