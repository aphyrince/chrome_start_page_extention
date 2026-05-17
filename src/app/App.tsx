import Clock from "../components/Clock";

const App = () => {
    return (
        <div
            className="flex flex-col justify-center w-full h-dvh animate-[shift-ratio_8s_ease-in-out_infinite_alternate]"
            style={{
                background:
                    "linear-gradient(var(--bg-deg), var(--color-dominant) 0%, var(--color-surface) var(--bg-ratio), var(--color-accent) 100%)",
            }}
        >
            <Clock />
        </div>
    );
};

export default App;
