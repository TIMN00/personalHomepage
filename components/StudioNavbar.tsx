import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between-0">
        <Link href="/" className="text-[purple] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[purple] mr-2"/>
          Go To Website
        </Link>
      </div>
      
      <div className= "hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7ABOA]">
        <h1 className = "font-bold text-blue">
            My homepage. Personal notes on software dev, internet cogitation, and life. "Sharing data is the first step towards community."
        </h1>
      </div>


    <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar