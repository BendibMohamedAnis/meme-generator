import data from "./data"

export default function Main_Content(){

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function handleClick(){
        let i = randomIntFromInterval(1, 9);
        let da=data[i].meme;
        let lol=document.getElementById("meme");
        lol.src=da;
    }

    return(
        <div className="main_content" >
            <form method="POST" className="forms">
                    <input type="text"  placeholder="Upper text"/>
                    <input type="text"  placeholder="Bottom text"/>
            </form>
            <button type="button" id="new_meme_btn" onClick={handleClick} >
                Get new template
                <img src={require("../assets/doge.png")} alt="icon"/>
            </button>
            <img src="" id="meme" alt="meme"/>
        </div>
    )
}