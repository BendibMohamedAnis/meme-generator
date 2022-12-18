export default function Main_content(){
    return(
        <div className="main_content">
            <form method="POST" className="forms">
                    <input type="text"  placeholder="Upper text"/>
                    <input type="text"  placeholder="Bottom text"/>
            </form>
            <button id="new_meme_btn" action="./">
                Get new template
                <img src={require("../assets/doge.png")} alt="icon"/>
            </button>
            <img src="" id="meme" alt="meme"/>
        </div>
    )
}