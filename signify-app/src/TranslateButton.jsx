import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();
    return (
        
        <div class="px-7 py-3.5 bg-neutral-200 hover:bg-rose-300 text-black hover:text-white rounded-[50px] inline-flex justify-center items-center gap-2.5">
            <button 
            className="justify-start text-xl font-normal font-['Verdana']"
            onClick={() => navigate('/translate')}
            >translate</button>
        </div>
)
}