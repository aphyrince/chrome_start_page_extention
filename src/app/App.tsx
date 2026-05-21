import BookMark from '../components/BookMark';
import Clock from '../components/Clock';
import SettingBtn from '../components/SettingBtn';
import SideBar from '../components/SideBar';

const App = () => {
    return (
        <div
            className='relative overflow-hidden flex flex-col justify-center w-full h-dvh animate-[shift-ratio_8s_ease-in-out_infinite_alternate]'
            style={{
                background:
                    'linear-gradient(60deg, var(--color-dominant) 0%, var(--color-surface) var(--bg-ratio), var(--color-accent) 100%)',
            }}
        >
            <Clock />
            <BookMark />
            <SettingBtn />
            <SideBar />
        </div>
    );
};

export default App;
