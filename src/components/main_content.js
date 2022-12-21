import data from "./data"
import React from "react"
export default function Main_Content(){
    
    const [upperText,setUpperText]=React.useState("")
    const [lowerText,setLowerText]=React.useState("")
    const [meme,setMeme]=React.useState("")
   
   

    //function add(){
        //setCount( function(oldVal){ retrun oldVal+1 }) good practise (oldval given auto at the time of function executed)
        //setCount( prevCount => prevCount + 1)
    //}
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      
    function drawMeme(canvas,ctx,img){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const ratio = img.width / img.height;

        // Calculate the width and height of the image to fit the canvas while maintaining the aspect ratio
        let width = canvas.width;
        let height = canvas.height;
        if (ratio > 1) {
          // Image is wider than the canvas
          width = canvas.height * ratio;
        } else {
          // Image is taller than the canvas
          height = canvas.width / ratio;
        }
        
        ctx.drawImage(img,0,0,width,height);
    
        ctx.fillStyle = 'white';

        const maxTextWidth = width * 0.9; // 90% of the width of the image

        let fontSize = 16;

        let textWidth = ctx.measureText(`${upperText}`).width;

        while (textWidth > maxTextWidth) {
            fontSize--;
            ctx.font = `${fontSize}px sans-serif`;
            textWidth = ctx.measureText(`${upperText}`).width;
        }

        ctx.fillText(`${upperText}`, (width - textWidth) / 2, fontSize);
        
    }



    function handleClick(){
            
            let i=randomIntFromInterval(0,data.length)
            let canvas= document.getElementById('meme');
            let ctx=canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let img = new Image();
            img.src=data[i].meme;
            setMeme(img)
            ctx.font = '16px sans-serif';
          
            img.addEventListener("load", ()=>{
                drawMeme(canvas,ctx,img);
            });
                
    }

    function greeting(){
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
        return("Good "+ greet+" Meme Lord !");
    }

    function handleChange(value){
        setUpperText(value);
        let canvas= document.getElementById('meme');
        let ctx=canvas.getContext('2d');
        drawMeme(canvas,ctx,meme);
    }


    return(
        <div className="main_content" >
            <span id="greet">{greeting()}</span>

            <form method="POST" className="forms">
                    <input type="text"  placeholder="Upper text" value={upperText} onChange={(event)=>handleChange(event.target.value)}/>
                    <input type="text"  placeholder="Bottom text"/>
            </form>

            <button type="button" id="new_meme_btn" onClick={handleClick} >
                Get new template
                <img src={require("../assets/doge.png")} alt="icon"/>
            </button>
            
            <canvas id="meme" ></canvas>

        </div>
    )
}