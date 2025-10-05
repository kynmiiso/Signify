import './App.css'
import SignifyLogo from './assets/logo.png';

export default function Home() {
  return (
    <>
      <div className="center-content">
        <img src={SignifyLogo} className='m-auto h-70 w-70'/>
        <h1 className="text-xl p-10 font-['Verdana']">Signify</h1>
      </div>
    </>
  );
}