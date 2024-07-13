import Link from 'next/link'
import Navbar from './ui/navbar'
import Image from 'next/image'
import MBR_DELAY_PNG from '@/public/MBR-Delay.png'

function Home() {
  
  return (
    <div className='flex justify-center'>

      <div className="w-9/12 static mx-12 my-12 divide-y-2 divide-dashed divide-y">
        <div>
          <h1 className='font-light text-2xl align-middle'>Latest</h1>
          <div></div>
        </div>
        
        <div className="static flex justify-start pt-6 pb-10">
          <div className='content-center max-w-500 outline hover:outline-blue-200'>
            <Link href='/plugins/mbr-delay'>
              <Image
                src={MBR_DELAY_PNG}
                alt="MBR-Delay"
                width="500"
                height="300"
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>
          <div className='px-8 py-4 max-w-100'>
            <Link href='/plugins/mbr-delay'>
              <h2 className='text-2xl font-bold hover:underline'>MBR-Delay</h2>
            </Link>
            <p className='text-slate-400'>Free</p><br></br>
            <p>
              Infinite. Lush. Psychedelic.
            </p>
          </div>
        </div>
        <div></div>
      </div>

    </div>
    )
}

export default Home