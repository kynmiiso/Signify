import Cam from './Cam';
import { useState, useEffect } from 'react';

const images = import.meta.glob('./assets/signs/*.png', { eager: true });

const signList = Object.keys(images).map((path) => {
  const name = path.split('/').pop().split('.')[0];
  return { name: name, src: images[path].default };
});

export default function LearnPage() {
    const [flashCard, setFlashCard] = useState(null);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);
    const [lastDetected, setLastDetected] = useState("");
    const [timeLeft, setTimeLeft] = useState(10);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let timer;
        if (timerActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && timerActive) {
            setLose(true);
            setTimerActive(false);
        }
        
        return () => clearInterval(timer);
    }, [timerActive, timeLeft]);

    const play = () => {
        const randomSign = signList[Math.floor(Math.random() * signList.length)];
        setFlashCard(randomSign);
        setWin(false);
        setLose(false);
        setLastDetected("");
        setTimeLeft(10);
        setTimerActive(true);
    }

    const handleDetect = (detectedSign) => {
        setLastDetected(detectedSign);
        if (flashCard && detectedSign && detectedSign.toLowerCase() === flashCard.name.toLowerCase()) {
            setWin(true);
            setTimerActive(false);
        }
    };

    const resetGame = () => {
        setFlashCard(null);
        setWin(false);
        setLose(false);
        setLastDetected("");
        setTimeLeft(10);
        setTimerActive(false);
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
                        disabled={timerActive && !win && !lose}
                    >
                        {flashCard ? "Play Again" : "Play"}
                    </button>

                    {timerActive && (
                        <div className={`text-2xl font-bold text-center mb-4 ${
                            timeLeft <= 3 ? 'text-red-500' : 'text-pink-500'
                        }`}>
                            Time: {timeLeft}s
                        </div>
                    )}

                    {flashCard && (
                        <div className="my-4 p-6 bg-pink-300 rounded shadow text-3xl font-bold text-white">
                            <div className='mb-5'>Flash card: {flashCard.name}</div>
                            <img src={flashCard.src} alt={flashCard.name} />
                            <div className='mt-5'>Detected: {lastDetected || "None"}</div>
                            
                            {win && (
                                <div className="mt-4 p-4 bg-green-500 rounded text-white text-center">
                                    You win!
                                </div>
                            )}
                            
                            {lose && (
                                <div className="mt-4 p-4 bg-red-500 rounded text-white text-center">
                                    Time's up! You lose!
                                </div>
                            )}
                        </div>
                    )}

                    {(win || lose) && (
                        <button
                            className="w-full p-6 bg-gray-500 border-3 border-transparent hover:bg-gray-600 text-2xl text-white font-bold rounded-full my-3 grid"
                            onClick={resetGame}
                        >
                            Reset Game
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}