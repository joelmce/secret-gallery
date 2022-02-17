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
            This is a test
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

