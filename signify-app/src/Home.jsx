import './App.css'
import LearnButton from './LearnButton.jsx'
import TranslateButton from './TranslateButton.jsx'
import SignifyLogo from './assets/logo.png';

export default function Home() {
  return (
    <div className="center-content">
      <img src={SignifyLogo} className='h-70 w-70'/>
      <h1 className="text-xl font-bold p-10">Signify</h1>
      <div className="center-content">
          <LearnButton />
          <TranslateButton />
      </div>
    </div>
  );
}