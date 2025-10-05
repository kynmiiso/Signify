import { useNavigate } from 'react-router-dom';
import Cam from './Cam';
import { useState } from 'react';

const images = import.meta.glob('./assets/signs/*.png', { eager: true });

const signList = Object.keys(images).map((path) => {
  const name = path.split('/').pop().split('.')[0];
  return { name: name, src: images[path].default };
});

export default function LearnPage() {
    const navigate = useNavigate();
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
            <Cam onDetect={handleDetect}></Cam>
            <div className="center-content">
                <button
                    className="w-full py-5 bg-green-500 hover:bg-green-600 text-2xl text-white font-bold rounded my-3"
                    onClick={play}
                >
                    Play
                </button>

                <div className="my-2 text-lg text-black bg-white rounded p-2">
                Detected: {lastDetected || "None"}<br />
                FlashCard: {flashCard ? flashCard.name : "None"}
                </div>
                {flashCard && (
                    <div className="my-4 p-6 bg-green-500 rounded shadow text-3xl font-bold text-white">
                        <div>Flash card: {flashCard.name}</div>
                        <img src={flashCard.src} alt={flashCard.name} />
                    </div>
                )}
                {win && (
                    <div className="my-4 p-6 bg-green-500 rounded shadow text-3xl font-bold text-white">
                    You passed!
                    </div>
                )}
                <button
                    className="w-full py-5 bg-blue-400 border-3 border-transparent hover:bg-blue-500 hover:border-blue-300 text-2xl text-white font-bold rounded my-3 grid"
                    onClick={() => navigate('/translate')}
                >
                    Translate
                </button>
                <button
                    className="w-full py-5 bg-blue-400 border-3 border-transparent hover:bg-blue-500 hover:border-blue-300 text-2xl text-white font-bold rounded my-3 grid"
                    onClick={() => navigate('/')}
                >
                    Home Page
                </button>
            </div>
        </>
  );
}