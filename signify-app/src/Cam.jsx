import { useEffect } from "react";

export default function Cam({ onDetect }) {
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const res = await fetch("http://localhost:5000/prediction");
                const data = await res.json();
                if (onDetect && data.prediction) {
                    onDetect(data.prediction.toLowerCase());
                }
            } catch (e) {

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [onDetect]);

    return (
        <img
            src="http://localhost:5000/video"
            alt="Video"
        />
    );
}