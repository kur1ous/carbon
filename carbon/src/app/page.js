"use client";
{/* commit 2 */}

import { useState } from 'react'; // Import useState
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

export default function Home() {
  const [audioLoaded, setAudioLoaded] = useState(false);

  const handleAudioPlay = () => {
    const audio = document.getElementById("save"); 
    if (audioLoaded) {
      audio.play();
    } else {
      audio.addEventListener('canplaythrough', () => {
        audio.play();
      });
      audio.load();
      setAudioLoaded(true);
    }
  };

  return (
    <div>
      <div>
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='text-center text-6xl text-green-700 cursor-pointer'
          onClick={handleAudioPlay} 
        >
          Save The World
        </motion.h1>
        <audio id="save">
          <source src='/Save.mp3' />
        </audio>
      </div>
    </div>
  );
}
