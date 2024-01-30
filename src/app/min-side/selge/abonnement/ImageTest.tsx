"use client";
import Image from 'next/image';

export default function ImageTest({src}:any) {
  return (
    <div >
        <p>Blur</p>
        <div >
            <Image 
                src={src}
                fill
                alt="image"
                placeholder='blur'
            />
        </div>
    </div>
  )
}