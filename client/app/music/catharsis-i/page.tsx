// the following code was found at 
// https://medium.com/@mohammadreza.tatlari8/a-simple-music-player-with-howler-and-react-74b47e892be1
// https://github.com/Mohammadreza-Tatlari/Music-Player-Howler-React
// Thank you to Mohammadreza Tatlari
// I have made modification to the look at feel of the code and data, but overall remains unchanged

'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AudioPlayer from '@/app/components/AudioPlayer'
import Track from '@/app/components/Track';
import { CgChevronLeft, CgPlayButtonR, CgPlayPause } from 'react-icons/cg'
import CATHARSIS from '@/public/catharsis.png'

const MusicInstances = [
  {
    id: "t1",
    src: "/songs/Catharsis/1. marathon_mastertrack.wav",
    title: "Marathon",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "4:47",
    imageUrl: '/catharsis.png'
  },
  {
    id: "t2",
    src: "/songs/Catharsis/2. mrRedeye_mastertrack.wav",
    title: "Mr. Redeye",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "5:27",
    imageUrl: "/catharsis.png",
  },
  {
    id: "t3",
    src: "/songs/Catharsis/3. interlude_mastertrack.wav",
    title: "Interlude",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "4:51",
    imageUrl: '/catharsis.png',
  },
  {
    id: "t4",
    src: "/songs/Catharsis/4. haunted_mastertrack.wav",
    title: "Haunted",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "6:44",
    imageUrl: '/catharsis.png',
  },
  {
    id: "t5",
    src: "/songs/Catharsis/5. OpenKingsPawn_mastertrack.wav",
    title: "OpenKingsPawn",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "6:37",
    imageUrl: '/catharsis.png',
  },
  {
    id: "t6",
    src: "/songs/Catharsis/6. fka_eid_mastertrack.wav",
    title: "Fka Eid",
    artist: "No Reference",
    album: "Catharsis I",
    duration: "5:45",
    imageUrl: '/catharsis.png',
  }, 
  
];

function CatharsisPage() {
  //global states
  const [isPlaying, setIsPlaying] = useState<boolean>(false); //whether the music is being played across the page
  const [selectedMusic, setSelectedMusic] = useState<any>(); //to hold music property that is created via Howl
  const [trackDetail , setTrackDetail] = useState<string>() //track information to be displayed among components
  
  return (
    <div className='flex flex-col w-[900px] py-6 px-6'>
      <Link href='/music' className='font-light hover:border'>
        <CgChevronLeft size={42}/>
      </Link>
      <h1 className='font-light text-2xl py-2 '>Catharsis I - No Reference</h1>
      
      <div className='flex justify-center'>
        <Link href='/music/catharsis-i'>
          <Image
          src={CATHARSIS}
          alt='CATHARSIS'
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

export default CatharsisPage