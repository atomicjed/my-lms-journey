import {useEffect, useState} from "react";

export default function ThanksForListening() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        console.log(window.scrollY);
        setScrollY(window.scrollY - 13000);
    }

    const middleOpacity = scrollY > 400 ? Math.min((scrollY - 400) / (600 - 400), 1) : 0;
    
    return (
        <div className={'relative z-30 bg-white h-[120vh] w-[100vw]'}>
            <div className={'font-bold text-[rgb(0,172,160)] text-5xl'} style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: middleOpacity
            }}>Thanks for listening!
            </div>
        </div>
    )
}