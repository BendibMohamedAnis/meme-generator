import data from "./data"
import React from "react"
export default function Main_Content(){
    let url;
    const [meme,setMeme]=React.useState("../assets/doge.png")
   
    function add(){
        //setCount( function(oldVal){ retrun oldVal+1 }) good practise (oldval given auto at the time of function executed)
        //setCount( prevCount => prevCount + 1)
    }
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function handleClick(){
            

            let i=randomIntFromInterval(0,data.length)
            setMeme(data[i].meme);
            
            const canvas = document.getElementById('meme');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let img = new Image(data[i].meme);
            img.addEventListener("load", ()=>{
                ctx.drawImage(img,0,0);
                ctx.font = '50px serif';
                ctx.fillText('Hello world', 1, 35);
              });
            img.src = data[i].meme;
    }

    function greeting(name){
        const date= new  Date();
        const hours = date.getHours();
        let greet;
        if(hours<12){
            greet="morning"
        }else{
            if(hours<17 && hours>12){
                greet="afternoon"
            }else{
                greet="Night";
            }
        }
        return("Your "+ greet+" " + name + " !");
    }


    return(
        <div className="main_content" >
            <span>{greeting(" Meme")}</span>
            <form method="POST" className="forms">
                    <input type="text"  placeholder="Upper text"/>
                    <input type="text"  placeholder="Bottom text"/>
            </form>
            <button type="button" id="new_meme_btn" onClick={handleClick} >
                Get new template
                <img src={require("../assets/doge.png")} alt="icon"/>
            </button>
            
            <canvas id="meme" width="300" height="300"></canvas>
        </div>
    )
}