import Cam from './Cam';

export default function TranslatePage() {
  return (
    <>
        <div className='flex flex-row gap-4 items-center'>
            <div className='flex-1 my-4'>          
                <Cam></Cam>
            </div>
            <div className="center-content">
                <div className="w-full py-5 bg-rose-300 border-3 border-transparent hover:bg-pink-300 hover:border-pink-200 text-2xl text-white font-bold rounded-full my-3 grid">
                    Work in progress...
                </div>
            </div>
        </div>
    </>
  );
}