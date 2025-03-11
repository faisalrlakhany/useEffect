
import { useEffect, useState } from "react"
import './app.css'


function App() {

      const [first , setFirst] = useState(0)
      const [second , setSecond] = useState(0)
      const [del , setDel] = useState(false)
      const [color , setColor] = useState(true)
      const [border , setBorder] = useState(true)


      function hover(e){

        e.target.style.backgroundColor = 'orange'

        setTimeout(() => {
         e.target.style.backgroundColor = 'azure'
        }, 100);
 
      }



      function addFirst(e){

        setFirst(first + 1)
        hover(e)
      }

      function addSecond(e){

      
        setSecond(second + 5)
        hover(e)
              
      }

      function valDel(e){

        setDel(!del)
        setFirst(0)
        setSecond(0)
        hover(e)

      }

      function changeColor(e) {
          
          setColor(!color)
          hover(e)
          color ? (document.body.style.backgroundColor = 'limegreen' , document.body.style.color = 'white' , addBorder(e)) :
                  (document.body.style.backgroundColor = 'white' , document.body.style.color = 'black', addBorder(e) )
      }

      function addBorder(e){

        setBorder(!border)
        hover(e)
        border ? e.target.style.border = '4px solid black' : e.target.style.border = '1px solid black'

  }
    

      useEffect(()=>{

        console.log('value Deleted')


      },[del])

      
      useEffect(()=>{

        console.log('BackgroundColor Changed' );
        

      },[color])


  return(

      <>

      <div className="head">
        <h1>First Counter = {first}</h1> 
        <h1>Second Counter = {second}</h1>
      </div>

      <div className="btn">
        <button onClick={addFirst}>First Counter +</button>
        <button onClick={addSecond} > Second Counter +</button>        
        <button onClick={valDel}>{del ? 'Delete' : 'Delete'}</button>
        <button onClick={changeColor} >{color ? 'backgroundColor' : 'Previous Color'}</button>
        <button onClick={addBorder} >border</button>
      </div> 
      </>


  )



}

export default App