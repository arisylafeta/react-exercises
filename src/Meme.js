import React from 'react'

function Meme() {
    return(
        <main>
            <form className ="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    classsName ="form--text"
                    />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    classsName ="form--text"
                    />

                <button className="form--button">Get a new meme image </button>
            </form>
        </main>
    )
}

export default Meme