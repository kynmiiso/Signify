import TranslateButton from './TranslateButton';
import LearnButton from './LearnButton';
import HomeButton from './HomeButton';

export default function Navbar() {
  return (
    <nav className="w-screen bg-white fixed top-0 left-0">
      <div className="w-full h-20 flex justify-center items-center">
          <div className="flex space-x-6 content-center">
            <HomeButton />
            <TranslateButton />
            <LearnButton />
          </div>
      </div>
    </nav>
  );
}