import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MBR_DELAY_PNG from '@/public/MBR-Delay.png'
import GITHUB_LOGO from '@/public/github-mark.png'

function MBRPage() {
  return (
    <div className='flex flex-col justify-center max-w-[1000px] m-auto'>
      <div className='m-3 md:m-10 bg-slate-500 flex justify-center'>
        <Image
          src={MBR_DELAY_PNG}
          alt="MBR-Delay"
          width="700"
          height="200"
          className="cursor-pointer"
          priority
        />
      </div>

      <div className='flex flex-col divide-y-2 divide-dashed divide-y m-auto px-3 md:px-10'>
        <div className='flex md:justify-between mb-4 max-w-[1000px]'>
          <h1 className='font-bold md:text-3xl'>MBR-DELAY</h1>
        </div>

        <div className='px-3 py-4 bg-slate-100'>
          <h2 className='justify-left font-semibold'>Infinite. Lush. Psychedelic.</h2>
          <p className='justify-left'>
            MBR-Delay is an open source delay plugin created to provide individual control over left and right channel buffers.
            <br></br> <br></br>
            Inspired by analog delays, MBR-Delay allows for feedback to be used a sonic tool.
            With access to 2 seconds in the past, you can create anything from traditional echos to long and lush call-backs.
            Set individual delays to generate polyrhythmic patterns that bounce in between your ears.
            Tune the frequency response to your liking and pair with your favorite reverb
            to experience a truly psychedelic sound.
            
          </p>
        </div>

        <div className='py-4 flex flex-col justify-between'>
          <div className='max-w-sm mx-4 px-2 py-2'>
            <h1 className='font-semibold'>Features</h1>
            <ul className='list-disc pl-4'>
              <li className='py-2'>Over 100% feedback signal control </li>
              <li className='py-2'>Individual time delay control for the left and right channels</li>
              <li className='py-2'>Link the time controls to match delay times</li>
              <li className='py-2'>Switch between a Mono or Stereo output</li>
              <li className='py-2'>High quality 2nd-order digital filters</li>
              <li className='py-2'>MIDI Control</li>
              <li className='py-2'>Save and load presets</li>
            </ul>
          </div>

          <div className='w-11/12 max-w-md mx-4 py-2'>
            <h1 className='font-semibold'>Versions</h1>
            <table className='table-auto border-slate-200'>
              <thead>
                <tr>
                  <th className='border border-slate-200 py-2'>OS</th>
                  <th className='border border-slate-200 '>Format</th>
                  <th className='border border-slate-200'> Download </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-200 px-2 py-2'>Windows</td>
                  <td className='border border-slate-200 px-2 py-2'>VST3</td>
                  <td className='border border-slate-200'>
                    <button className='font-light bg-white rounded px-3 py-2 hover:bg-slate-200'>Coming Soon</button>
                  </td>
                </tr>
                <tr>
                  <td className='border border-slate-200 px-2 py-2 w-6/12'>MacOS</td>
                  <td className='border border-slate-200 px-2 py-2'>VST3/AU</td>
                  <td className='border border-slate-200'>
                    <button className='font-light bg-white rounded px-3 py-2 hover:bg-slate-200'>Coming Soon</button>
                  </td>
                </tr>
                <tr>
                  <td className='border border-slate-200 px-2 py-2'>Source Code Build</td>
                  <td className='border border-slate-200 px-2 py-2'>VST/VST3/AU/AUv3/LV2</td>
                  <td className='border border-slate-200 flex justify-center py-2 hover:bg-slate-200 rounded'>
                    <Link href="https://github.com/No-Reference-DSP/MBR-Delay">
                      <Image
                        src={GITHUB_LOGO}
                        alt="GithubLogo"
                        width="25"
                        height="25"
                        className="cursor-pointer"
                        priority
                      />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>

        <div className='px-4 py-4'>
          <h1 className='font-semibold'>Patch Notes</h1>
          <div className='mx-4'>
            <h2>v1.0 Release</h2>
            <ul className='list-disc mx-6'>
              <li>Official Release!</li>
              <li>Format types tested for v1.0: VST3</li>
              <li>Tested on: Windows (FL Studio, JUCE Plugin-Host) / MacOS (JUCE Plugin-Host)</li>
              <li>Source Code posted on Github</li>
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default MBRPage