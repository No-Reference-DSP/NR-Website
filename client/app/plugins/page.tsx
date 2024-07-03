import React from 'react'
import Link from 'next/link'

export default function Dsp() {

    return (
        <div>
            <h1>We are now in DSP</h1>
            <Link href="/">Go back to home</Link>
            <Link href="/plugins/mbr-delay">MBR PAGE</Link>
            <p>The DSP section will display a quick picture, price and link to the plugin <br></br>
                and clicking on the picture will lead the user to the individual page of the plugin <br></br>
                that has more detail
            </p>
        </div>
    )
}