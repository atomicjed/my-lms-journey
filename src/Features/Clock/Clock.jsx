import './Clock.css';
import {useEffect, useState} from "react"; 

export default function Clock() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 2550);
    }

    const screenHeight = window.innerHeight;

    const backgroundProgress = scrollY > 700 ? Math.min((scrollY - 700) / (1000 - 700), 1) : 0;
    const changeBackgroundColourOnScroll = {
        startColor: [0, 172, 160],
        endColor: [255, 255, 255],
    }
    const currentBackgroundColour = changeBackgroundColourOnScroll.startColor.map((start, index) => {
        const end = changeBackgroundColourOnScroll.endColor[index];
        return Math.round(start + (end - start) * backgroundProgress);
    });
    const componentProgress = scrollY >  1200 ? 1 - ( Math.min((scrollY - 1200) / (1600 - 1200), 1)) : 1;
    const backgroundStyles  = {
        // opacity: `${componentProgress}`,
        backgroundColor: `rgb(${currentBackgroundColour[0]}, ${currentBackgroundColour[1]}, ${currentBackgroundColour[2]})`
    }
    
    const logoStyles = {
        opacity: backgroundProgress
    }
    
    return (
        <div style={backgroundStyles} className={'h-[200vh] relative bg-[rgb(0,172,160)] w-[100vw]'}>
            <div className={'h-[100vh] w-[100vw] flex sticky top-0 pt-12 justify-center'}>
                <div className="clock">
                    <div className="clock-face">
                        <div className="clock-hand minute-hand"></div>
                        <div className={"clock-hand hour-hand"}></div>
                    </div>
                </div>
            </div>
            <img style={logoStyles} src={"https://www.atticstorage.co.uk/wp-content/uploads/attic-logo.svg"} 
                 className={'object-cover w-[400px] bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'} alt={"Attic Self Storage Logo"}/>
        </div>
    );
};
