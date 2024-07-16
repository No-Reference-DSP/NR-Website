// the following code was found at 
// https://medium.com/@mohammadreza.tatlari8/a-simple-music-player-with-howler-and-react-74b47e892be1
// https://github.com/Mohammadreza-Tatlari/Music-Player-Howler-React
// Thank you to Mohammadreza Tatlari
// I have made modification to the look at feel of the code, but overall remains unchanged

'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AudioPlayer from '@/app/components/AudioPlayer'
import Track from '@/app/components/Track';
import { CgChevronLeft, CgPlayButtonR, CgPlayPause } from 'react-icons/cg'
import FLEETFOOTWERK from '@/public/fleetfootwerk_single.png'

const MusicInstances = [
    {
        id: "t1",
        src: "/songs/singles/No Reference - Fleetfoot Werk.wav",
        title: "Fleetfoot Werk",
        artist: "No Reference",
        album: "Single",
        duration: "6:48",
        imageUrl: '/fleetfootwerk_single.png'
    },
];

function FleetFootWerkPage() {
    //global states
    const [isPlaying, setIsPlaying] = useState<boolean>(false); //whether the music is being played across the page
    const [selectedMusic, setSelectedMusic] = useState<any>(); //to hold music property that is created via Howl
    const [trackDetail , setTrackDetail] = useState<string>() //track information to be displayed among components
    
    return (
      <div className='flex flex-col w-[900px] py-6 px-6'>
        <Link href='/music' className='font-light hover:border'>
          <CgChevronLeft size={42}/>
        </Link>
        <h1 className='font-light text-2xl py-2 '>Fleetfoot Werk - Single - No Reference</h1>
        
        <div className='flex justify-center'>
          <Link href='/music/catharsis-i'>
            <Image
            src={FLEETFOOTWERK}
            alt='Fleetfootwerk'
            width='450'
            height='450'
            className="cursor-pointer m-auto p-10"
            priority
            />
          </Link>
          <ul className="space-y-1 p-2 m-2 pb-16">
            {MusicInstances.map((track , index) =>(
                <li key={track.id}>
                    <Track 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    selectedMusic={selectedMusic}
                    setSelectedMusic={setSelectedMusic}
                    setTrackDetail={setTrackDetail}
                    track={track}
                    isFirstTrack={index === 0}                
                    />
                </li>
            ))}
          </ul>
        </div>
  
        <AudioPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying} // check and set whether music is being played
          selectedMusic={selectedMusic} // to have access to music property and apply necessary changes
          trackDetail={trackDetail} // sending music title to be displayed in component
        />
      </div>
    )
  }
  
  export default FleetFootWerkPage