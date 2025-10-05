import { useNavigate } from 'react-router-dom';

export default function TranslateButton() {
    const navigate = useNavigate();
    return (
        <div className='py-5 bg-blue-400 border-3 border-transparent hover:bg-blue-500 hover:border-blue-300 text-white text-2xl font-bold rounded my-3'>
            <button onClick={() => navigate('/translate')}>Translate</button>
        </div>
    ) 
}