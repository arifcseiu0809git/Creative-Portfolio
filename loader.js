'use client'
 
//import Image from 'next/image'
 
export default function myImageLoader ({ src, width, quality }) {
    if(src.starsWith('https://images.pexels.com')) return src
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}