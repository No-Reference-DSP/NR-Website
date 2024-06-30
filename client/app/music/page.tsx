import React from 'react'
import Link from 'next/link'

function Music() {
  return (
    <div>
        <h1>Here we will establish all the musical stuff</h1>
        <Link href="/">Back to the home page</Link>
        <p>
            There will be pictures of each musical option where the user can click on it 
            and it will take the user to a page with a player and the music <br></br>
            <br></br> Not sure if I should make the player a component and have the music be a parallel process
            Like @slots
        </p>
    </div>
  )
}

export default Music