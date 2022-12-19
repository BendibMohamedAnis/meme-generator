import data from "./data"
import React from "react"
export default function Main_Content(){
    let url;
    const [count,setCount]=React.useState(0)
   
    function add(){
        setCount(count+1)
        //setCount( function(oldVal){ retrun oldVal+1 }) good practise (oldval given auto at the time of function executed)
        //setCount( prevCount => prevCount + 1)
    }
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function handleClick(){
            let i=randomIntFromInterval(0,data.length)
            url=  data[i].meme
            document.getElementById("meme").src=url;
    }

    function greeting(name){
        const date= new  Date();
        const hours = date.getHours();
        let greet="";
        if(hours<12){
            greet="morning"
        }else{
            if(hours<17 && hours>12){
                greet="afternoon"
            }else{
                greet="Night";
            }
        }
        return("Good "+ greet+" " + name + " !");
    }


    return(
        <div className="main_content" >
            <span>{greeting("Anis")}</span>
            <form method="POST" className="forms">
                    <input type="text"  placeholder="Upper text"/>
                    <input type="text"  placeholder="Bottom text"/>
            </form>
            <button type="button" id="new_meme_btn" onClick={add} >
                Get new template
                <img src={require("../assets/doge.png")} alt="icon"/>
            </button>
            <h2>Count : {count}</h2>
            <img src="" id="meme" alt="meme"/>
        </div>
    )
}