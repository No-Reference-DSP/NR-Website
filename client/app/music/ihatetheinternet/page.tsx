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
import IHTI from '@/public/ihatetheinternet.png'

const MusicInstances = [
  {
    id: "t1",
    src: "https://noreference-music-bucket.s3.us-east-2.amazonaws.com/songs/IHateTheInternet/Chronophobia+-+Master+Release.wav",
    title: "Chronophobia",
    artist: "No Reference",
    album: "I Hate The Internet",
    duration: "5:28",
    imageUrl: '/ihatetheinternet.png'
  },
  {
    id: "t2",
    src: "https://noreference-music-bucket.s3.us-east-2.amazonaws.com/songs/IHateTheInternet/Faith++-+Master+Release.wav",
    title: "Faith",
    artist: "No Reference",
    album: "I Hate The Internet",
    duration: "6:53",
    imageUrl: '/ihatetheinternet.png'
  },
  {
    id: "t3",
    src: "https://noreference-music-bucket.s3.us-east-2.amazonaws.com/songs/IHateTheInternet/Gaze+-+Master+Release.wav",
    title: "Gaze",
    artist: "No Reference",
    album: "I Hate The Internet",
    duration: "5:43",
    imageUrl: '/ihatetheinternet.png'
  },
  {
    id: "t4",
    src: "https://noreference-music-bucket.s3.us-east-2.amazonaws.com/songs/IHateTheInternet/Perform+Hatred+-+Master+Release.wav",
    title: "Perform Hatred",
    artist: "No Reference",
    album: "I Hate The Internet",
    duration: "6:00",
    imageUrl: '/ihatetheinternet.png'
  },
  
];

function IHateTheInternetPage() {
  //global states
  const [isPlaying, setIsPlaying] = useState<boolean>(false); //whether the music is being played across the page
  const [selectedMusic, setSelectedMusic] = useState<any>(); //to hold music property that is created via Howl
  const [trackDetail , setTrackDetail] = useState<string>() //track information to be displayed among components
  
  return (
    <div className='flex flex-col w-[900px] py-6 px-6'>
      <Link href='/music' className='font-light hover:border'>
        <CgChevronLeft size={42}/>
      </Link>
      <h1 className='font-light text-2xl py-2 '>I Hate The Internet - No Reference</h1>
      
      <div className='flex justify-center'>
        <Link href='/music/ihatetheinternet'>
          <Image
          src={IHTI}
          alt='IHATETHEINTERNET'
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

export default IHateTheInternetPage