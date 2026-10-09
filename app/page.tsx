"use client"
import { useState, useEffect } from "react"

export default function Dollarcrypto() {
  const APP_ID = "34yECzDw0yVKnawr421rn"
  const [page, setPage] = useState("home")
  const [logged, setLogged] = useState(false)
  const LOGIN_URL = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}`

  useEffect(()=>{
    const p = new URLSearchParams(window.location.search)
    if(p.get("token1") || p.get("token")) setLogged(true)
    const saved = localStorage.getItem("tok")
    if(saved) setLogged(true)
  },[])

  const bots = [
    {name:"Even/Odd Bot", profit:"+247%", type:"Digits"},
    {name:"Over/Under Pro", profit:"+189%", type:"Digits"},
    {name:"Rise/Fall Master", profit:"+320%", type:"Volatility"},
    {name:"Martingale King", profit:"+156%", type:"AI"},
    {name:"Alpha Scalper", profit:"+412%", type:"Volatility 75"},
  ]

  if(!logged){
    return (
      <div style={{background:"#080e1f", minHeight:"100vh", color:"white"}}>
        <header style={{display:"flex", justifyContent:"space-between", padding:16, borderBottom:"1px solid #1a2340"}}>
          <b><span style={{color:"#4ade80"}}>dollar</span><span style={{color:"#ef4444"}}>crypto</span></b>
          <a href={LOGIN_URL} style={{background:"white", color:"black", padding:"8px 16px", borderRadius:20, textDecoration:"none", fontWeight:700}}>Login Now</a>
        </header>
        <div style={{textAlign:"center", padding:40}}>
          <div style={{border:"1px solid #22c55e33", display:"inline-block", padding:"6px 12px", borderRadius:20, fontSize:12, color:"#4ade80"}}>✓ Trusted by 50,000+ Traders</div>
          <h1 style={{fontSize:32, fontWeight:900, marginTop:16}}>Welcome to<br/><span style={{color:"#4ade80"}}>Dollar</span> <span style={{color:"#ef4444"}}>crypto</span></h1>
          <p style={{color:"#94a3b8", marginTop:12, fontSize:13}}>Your all-in-one workspace for automated trading, smart bots, and real-time market insights.</p>
          <a href={LOGIN_URL} style={{display:"block", background:"#22c55e", color:"black", padding:16, borderRadius:12, marginTop:24, fontWeight:800, textDecoration:"none"}}>Start Trading Now</a>
          <div style={{marginTop:24, display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, textAlign:"left"}}>
            <div style={{background:"#0e152b", padding:16, borderRadius:12}}><b>🤖 Bot Builder</b><br/><span style={{fontSize:11, color:"#94a3b8"}}>No-code</span></div>
            <div style={{background:"#0e152b", padding:16, borderRadius:12}}><b>📋 Copy Trading</b><br/><span style={{fontSize:11, color:"#94a3b8"}}>Follow pros</span></div>
            <div style={{background:"#0e152b", padding:16, borderRadius:12}}><b>🆓 50+ Free Bots</b><br/><span style={{fontSize:11, color:"#94a3b8"}}>Ready to use</span></div>
            <div style={{background:"#0e152b", padding:16, borderRadius:12}}><b>📊 Analysis</b><br/><span style={{fontSize:11, color:"#94a3b8"}}>Digit analyzer</span></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{background:"#080e1f", minHeight:"100vh", color:"white"}}>
      <nav style={{display:"flex", gap:6, padding:12, background:"#0c1224", overflowX:"auto"}}>
        {["Bots","Builder","Copy Trading","Analysis","Charts"].map(t=>(
          <button key={t} onClick={()=>setPage(t)} style={{background:page===t?"#22c55e":"#1a2340", color:page===t?"black":"white", padding:"8px 12px", borderRadius:20, border:"none", fontSize:11}}>{t}</button>
        ))}
      </nav>
      <div style={{padding:16}}>
        {bots.map(b=>(
          <div key={b.name} style={{background:"#0e152b", border:"1px solid #1a2340", borderRadius:12, padding:16, marginBottom:12, display:"flex", justifyContent:"space-between"}}>
            <div><b>{b.name}</b><br/><span style={{fontSize:11, color:"#94a3b8"}}>{b.type}</span></div>
            <div style={{textAlign:"right"}}><span style={{color:"#4ade80"}}>{b.profit}</span><br/><button style={{background:"#22c55e", border:"none", padding:"4px 12px", borderRadius:6, marginTop:4}}>Run Bot</button></div>
          </div>
        ))}
      </div>
    </div>
  )
        }
