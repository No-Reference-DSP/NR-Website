// the following code was found at 
// https://medium.com/@mohammadreza.tatlari8/a-simple-music-player-with-howler-and-react-74b47e892be1
// https://github.com/Mohammadreza-Tatlari/Music-Player-Howler-React
// Thank you to Mohammadreza Tatlari
// I have made modification to the look at feel of the code, but overall remains unchanged

'use client'
import React, {Component, useEffect, useState} from 'react'
import { Howler } from 'howler';
import { CgPlayButton, CgPlayPause } from 'react-icons/cg'

export const fetchCache = 'only-no-store'

interface PlayerProps {
  isPlaying: boolean
  setIsPlaying: (value: boolean) => void 
  selectedMusic: any 
  trackDetail: any
}

function AudioPlayer({
  isPlaying,
  selectedMusic,
  setIsPlaying,
  trackDetail,
}: PlayerProps) {
  const [currentTime, setCurrentTime] = useState<any>()

  function togglePlay() {
    console.log('togglePlay()')
    if(!selectedMusic) return 

    if(isPlaying) {
      selectedMusic.pause();
      setIsPlaying(false)
    } else {
      selectedMusic.play()
      setIsPlaying(true)
    }
  }

  // Howler.volume is a global volume controller for all the howl in the project
  function handleVolumeChange(e: any) {
    Howler.volume(parseInt(e.target.value, 10) /100);
  }

  // if resets the range button to the beginning when the music is changed NOT the current but the actual Music
  // and commit the action if the music exist in state
  useEffect(() => {
    console.log("TEST")
    setCurrentTime(0)
    if(selectedMusic) selectedMusic.seek(0)
  }, [selectedMusic])

  // this function gets the value of the input:range which is parsed value of the currentTime
  function handleSeekChange(e: any) {
    let seekTime = 0;
    seekTime = parseInt(e.target.value, 10)
    // setCurrentTime is set to seekTime to control the value of input:range_seek
    setCurrentTime(seekTime)
    // the reaosn I have used seekTime instead of currentTime is that the currentTime is an async state so the music should be pause and resume
    // to make the input:range_seek top work
    selectedMusic.seek(seekTime)
  }

  // this useEffect sets an Interval for each 1sec and update the value of the 
  useEffect(() => {
    let timerInterval: any 
    if(selectedMusic) {
      const updaterTimer = () => {
        const seekTimer = Math.round(selectedMusic.seek())
        setCurrentTime(seekTimer)
      }
      // the return value of setInterval is a unique identifier for the timer,
      // which is stored in the timerInterval variable in this case
      // this identifier can be used later with the clearInterval function to stop the recurring timer
      timerInterval = setInterval(updaterTimer, 1000)
    }
    return () => {clearInterval(timerInterval)}
  }, [selectedMusic])

  // takes the timeInSeconds Value and Converts it into the timer format 
  function formatTime(timeInSeconds:number) {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')
    return `${formattedMinutes}:${formattedSeconds}`
  }

  const formattedTime = formatTime(currentTime)

  return (
    <>
        <div className="border-2 border-slate-400 py-2 px-20 m-auto">
          <div className="font-semibold flex justify-center items-center xl:justify-start">{trackDetail?.tracktitle ? `${trackDetail.tracktitle } - ${trackDetail.trackArtist}` : "-- - --"}</div>
          <div className="relative flex max-lg:justify-center space-x-3">
              <label htmlFor="durationController" className='pt-1.5'>Duration</label>
                <input
                  className="rounded-sm cursor-pointer accent-slate-500"
                  type="range"
                  min="0"
                  //testify where the selectedMusic contains data from music in PlaylistCard Component if so when set duration
                  //otherwise the input range won't work
                  max={selectedMusic ? selectedMusic.duration() : 0}
                  //check out whether the current time contains value otherwise the value is 0 also it displays the music duration place
                  value={currentTime || 0}
                  onChange={handleSeekChange}
                />
              <div className='pt-1.5'>{formattedTime}</div>
              <button onClick={togglePlay} className="bg-white rounded-full p-2 hover:bg-slate-200 hover:shadow-lg">
                { isPlaying ? <CgPlayPause size={23}/> : <CgPlayButton size={23}/>}
              </button>
              <label htmlFor="volumeController" className='pt-1.5'>Volume</label>
                <input
                  className="cursor-pointer accent-slate-500"
                  onChange={handleVolumeChange}
                  name="volumeController"
                  type="range"
                  max="100"
                  defaultValue="100"
                />
          </div>
        </div>
    </>
  )
}

export default AudioPlayer