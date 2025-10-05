import Cam from './Cam';
import { useState } from 'react';

const images = import.meta.glob('./assets/signs/*.png', { eager: true });

const signList = Object.keys(images).map((path) => {
  const name = path.split('/').pop().split('.')[0];
  return { name: name, src: images[path].default };
});

export default function LearnPage() {
    const [flashCard, setFlashCard] = useState(null);
    const [win, setWin] = useState(false);
    const [lastDetected, setLastDetected] = useState("");

    const play = () => {
        const randomSign = signList[Math.floor(Math.random() * signList.length)];
        setFlashCard(randomSign);
        setWin(false);
    }

    const handleDetect = (detectedSign) => {
        setLastDetected(detectedSign);
        if (flashCard && detectedSign && detectedSign.toLowerCase() === flashCard.name.toLowerCase()) {
            setWin(true);
        }
    };

    return (
        <>  
            <div className='flex flex-row gap-4 items-center'>
                <div className='flex-1 my-4'>                
                    <Cam onDetect={handleDetect}></Cam>
                </div>
                <div className="center-content">
                    <button
                        className="w-full py-5 bg-rose-300 border-3 border-transparent hover:bg-pink-300 hover:border-pink-200 text-2xl text-white font-bold rounded-full my-3 grid"
                        onClick={play}
                    >
                        Play
                    </button>

                    {flashCard && (
                        <div className="my-4 p-6 bg-pink-300 rounded shadow text-3xl font-bold text-white">
                            <div className='mb-5'>Flash card: {flashCard.name}</div>
                            <img src={flashCard.src} alt={flashCard.name} />
                            <div className='mt-5'>Detected: {lastDetected || "None"}<br /></div>
                            {win && (<div>You win!</div>)}
                        </div>
                    )}
                </div>
            </div>
        </>
  );
}