import {useEffect, useState} from "react";

export default function DontMessUp() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 4251);
    }
    
    const contentOpacity = scrollY > 100 ? Math.min((scrollY - 100) / (300 - 100), 1) : 0;
    const contentStyles = {
        opacity: contentOpacity,
    }
    return (
        <div className={'bg-black w-[100vw] h-[200vh] relative text-white font-black flex flex-col text-12xl'}>
            <div style={contentStyles} className={'leading-tight fixed top-1/2 transform left-24 -translate-y-1/2 italic'}>DON'T <br /> F IT UP</div>
        </div>
    )
}