import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import menu from '../components/stylesheets/mainmenu.module.css'
import App from '../components/App'
export default function Overlay () {
  
    const [ready, setReady] = useState(false)

    useEffect(() => {
      const handleLockchange = (e) => {
        if(document.pointerLockElement === null) {
            setReady(false)        
        } else {
            setReady(true)
        }
      }
      
      document.addEventListener("pointerlockchange", handleLockchange);
      return () => {
        document.removeEventListener("pointerlockchange", handleLockchange)
      }
    })  

    return (
      <>
        <App />
        <div className={menu.container} style={{display: ready ? "none" : "block"}}>
          <div className={menu.wrapper}>
            <img src="/secretpunkslogo.jpg" className={menu.gallery_logo}/>
            <div className={menu.start} id="start">Start
            <svg className={menu.startIcon} role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"></path></svg>
            
            </div> 
            
          </div>
        </div>
        <style global jsx>{`
            body {
                overflow: hidden;
            }
        `}</style>
      </>
    )
  }

