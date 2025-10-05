import { useNavigate } from 'react-router-dom';
import Cam from './Cam';

export default function TranslatePage() {
  const navigate = useNavigate();
  return (
    <>
        <Cam></Cam>
            <div className="center-content">
                <button
                    className="w-full py-5 bg-blue-400 border-3 border-transparent hover:bg-blue-500 hover:border-blue-300 text-2xl text-white font-bold rounded my-3 grid"
                    onClick={() => navigate('/learn')}
                >
                    Go to Learn
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