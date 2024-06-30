import Link from 'next/link'

function Home() {

  return (
    <div>
      <h2>This was created in the /page file</h2>
      <Link href="/dsp">Link to DSP section</Link><br></br>
      <Link href="/music">Link to the Music Section</Link><br></br>
      <Link href="/contact">Link to the Contact Section</Link>
      <p>
        I know I want there to be 4 main sections, <br></br>
        DSP to showcase the Plugins <br></br>
        Music to showcase the Music and the Music Player <br></br>
        Contact section linking to an email and a github <br></br>
        Privary section eventually implemented if I start selling stuff <br></br>
      </p>
      <p>
        This landing page can have a brief &quot;Latest&quot; section, to display the latest <br></br>
        in DSP and Music
      </p>
    </div>
    )
}

export default Home