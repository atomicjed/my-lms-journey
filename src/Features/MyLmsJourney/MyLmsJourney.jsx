import './MyLmsJourney.css';
import {useEffect, useState} from "react";

export default function MyLmsJourney() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    function handleScroll() {
        setScrollY(window.scrollY);
    }

    const maxScroll = window.innerHeight; // Maximum scroll value we care about (100vh)
    const progress = Math.min(scrollY / maxScroll, 1); // Clamp progress between 0 and 1
    
    const changeLetterColoursOnScroll = {
        startColor: [0, 172, 160],
        endColor: [255, 255, 255],
    }
    const currentLetterColour = changeLetterColoursOnScroll.startColor.map((start, index) => {
        const end = changeLetterColoursOnScroll.endColor[index];
        return Math.round(start + (end - start) * progress);
    });

    const elScrollConfig = {
        startX: 39, // Starting at 50% (center)
        startY: 50, // Starting at 50% (center)
        endX: 20, // Ending at 0% (left)
        endY: 80 // Ending at 100% (bottom)
    }
    const elScrollParameters = {
        currentX: elScrollConfig.startX + (elScrollConfig.endX - elScrollConfig.startX) * progress,
        currentY: elScrollConfig.startY + (elScrollConfig.endY - elScrollConfig.startY) * progress
    }
    const elScrollStyles = {
        top: `${elScrollParameters.currentY}%`,
        left: `${elScrollParameters.currentX}%`,
        color: `rgb(${currentLetterColour[0]}, ${currentLetterColour[1]}, ${currentLetterColour[2]})` // Change color for fun
    };

    const emScrollConfig = {
        startX: 50, // Starting at 50% (center)
        startY: 50, // Starting at 50% (center)
        endX: 18, // Ending at 0% (left)
        endY: 50 // Ending at 100% (bottom)
    }
    const emScrollParameters = {
        currentX: emScrollConfig.startX + (emScrollConfig.endX - emScrollConfig.startX) * progress,
        currentY: emScrollConfig.startY + (emScrollConfig.endY - emScrollConfig.startY) * progress
    }
    const emScrollStyles = {
        top: `${emScrollParameters.currentY}%`,
        left: `${emScrollParameters.currentX}%`,
        color: `rgb(${currentLetterColour[0]}, ${currentLetterColour[1]}, ${currentLetterColour[2]})` // Change color for fun
    };

    const esScrollConfig = {
        startX: 62, // Starting at 50% (center)
        startY: 50, // Starting at 50% (center)
        endX: 20, // Ending at 0% (left)
        endY: 20 // Ending at 100% (bottom)
    }
    const esScrollParameters = {
        currentX: esScrollConfig.startX + (esScrollConfig.endX - esScrollConfig.startX) * progress,
        currentY: esScrollConfig.startY + (esScrollConfig.endY - esScrollConfig.startY) * progress
    }
    const esScrollStyles = {
        top: `${esScrollParameters.currentY}%`,
        left: `${esScrollParameters.currentX}%`,
        color: `rgb(${currentLetterColour[0]}, ${currentLetterColour[1]}, ${currentLetterColour[2]})` // Change color for fun
    };
    
    const myProgress = 1 - (Math.min(scrollY / 300, 1));
    const myScrollStyles = {
        opacity: `${myProgress}`,
        color: `rgb(${currentLetterColour[0]}, ${currentLetterColour[1]}, ${currentLetterColour[2]})` // Change color for fun
    };
    
    const journeyScrollStyles = {
        opacity: `${myProgress}`
    }
    
    const anogramProgress = scrollY > 700 ? Math.min((scrollY - 700) / (maxScroll - 700), 1) : 0;
    const anogramScrollStyles = {
        opacity: `${anogramProgress}`
    }

    const changeBackgroundColourOnScroll = {
        startColor: [255, 255, 255],
        endColor: [0, 172, 160],
    }
    const currentBackgroundColour = changeBackgroundColourOnScroll.startColor.map((start, index) => {
        const end = changeBackgroundColourOnScroll.endColor[index];
        return Math.round(start + (end - start) * progress);
    });
    const componentProgress = scrollY >  1200 ? 1 - ( Math.min((scrollY - 1200) / (1600 - 1200), 1)) : 1;
    const backgroundStyles  = {
        // opacity: `${componentProgress}`,
        backgroundColor: `rgb(${currentBackgroundColour[0]}, ${currentBackgroundColour[1]}, ${currentBackgroundColour[2]})`
    }
    
    return (
        <div className={'w-[100vw] h-[220vh] flex justify-center'} style={backgroundStyles}>
            <div>
                <div className={'top-64 ml-[-180px] font-bold text-6xl letter'} style={myScrollStyles}>My</div>
                <div className={'flex'}>
                    <div className={'font-black text-12xl letter'} style={elScrollStyles}>L</div>
                    <div className={'font-black text-12xl letter'} style={emScrollStyles}>M</div>
                    <div className={'font-black text-12xl letter'} style={esScrollStyles}>S</div>
                </div>
                <div className={'bottom-48 text-[#F7941D] ml-32 font-bold text-6xl letter'}
                     style={journeyScrollStyles}>Journey
                </div>

                <div className={`font-black text-10xl letter text-white top-44 mt-[5px] ml-[-180px]`} style={anogramScrollStyles}>pace</div>
                <div className={'font-black text-10xl letter text-white top-80 mt-[105px] ml-[-105px]'} style={anogramScrollStyles}>anager</div>
                <div className={'font-black text-10xl fixed transition-transform duration-1000 ease-in-out text-white bottom-0 mb-[10px] ml-[-380px]'} style={anogramScrollStyles}>over</div>
                
            </div>
        </div>
    )
}