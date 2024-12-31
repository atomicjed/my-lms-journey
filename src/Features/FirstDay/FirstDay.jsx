import {useEffect, useState} from "react";
import newSlider from "../../assets/new-size-slider.mp4";
import oldSlider from "../../assets/original-size-slider.mp4";
import LevelComponent from "../../components/LevelComponent";

export default function FirstDay() {
    const [scrollY, setScrollY] = useState(0);
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [stopDateAnimation, setStopDateAnimation] = useState(false);

    useEffect(() => {
        if (scrollY > 400) {
            setStopDateAnimation(true);
        }
    }, [scrollY]);

    useEffect(() => {
        let interval;
        if (!stopDateAnimation) {
            interval = setInterval(() => {
                setDay(Math.floor(Math.random() * 31) + 1);
                setMonth(Math.floor(Math.random() * 12) + 1);
                setYear(Math.floor(Math.random() * 2024));
            }, 100);
        } else {
            setDay(20);
            setMonth(2);
            setYear(2024);
        }
        return () => clearInterval(interval);
    }, [stopDateAnimation]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 957);
    }

    const screenHeight = window.innerHeight;

    const oldSliderProgress = scrollY > 600 ? Math.min((scrollY - 600) / (screenHeight - 600), 1) : 0;
    const moveLeft = scrollY > 1000 ? Math.min((scrollY - 1000) / (1200 - 1000), 1) : 0;
    const leftPosition = `calc(50% - ${moveLeft * (50 - 30)}%)`;
    const oldSliderScrollStyles = {
        opacity: `${oldSliderProgress}`,
        position: 'fixed',
        top: '50%',
        left: leftPosition,
        transform: 'translate(-50%, -50%)',
        width: '550px',
        height: '350px',
        overflow: 'hidden',
    }

    const newSliderProgress = scrollY > 1000 ? Math.min((scrollY - 1000) / (1200 - 1000), 1) : 0;
    const rightPosition = `calc(50% + ${newSliderProgress * (50 - 30)}%)`;
    const newSliderScrollStyles = {
        opacity: `${newSliderProgress}`,
        position: 'fixed',
        top: '50%',
        left: rightPosition,
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '400px',
        overflow: 'hidden',
    }

    const changeBackgroundColourOnScroll = {
        startColor: [255, 255, 255],
        endColor: [0, 172, 160],
    }
    const currentBackgroundColour = changeBackgroundColourOnScroll.startColor.map((start, index) => {
        const end = changeBackgroundColourOnScroll.endColor[index];
        return Math.round(start + (end - start) * oldSliderProgress);
    });
    const componentProgress = scrollY >  1200 ? 1 - ( Math.min((scrollY - 1200) / (1600 - 1200), 1)) : 1;
    const backgroundStyles  = {
        // opacity: `${componentProgress}`,
        backgroundColor: `rgb(${currentBackgroundColour[0]}, ${currentBackgroundColour[1]}, ${currentBackgroundColour[2]})`
    }

    const changeDateColourOnScroll = {
        startColor: [0, 0, 0],
        endColor: [255, 255, 255],
    }
    const currentDateColour = changeDateColourOnScroll.startColor.map((start, index) => {
        const end = changeDateColourOnScroll.endColor[index];
        return Math.round(start + (end - start) * oldSliderProgress);
    });
    const dateStyles  = {
        // opacity: `${componentProgress}`,
        color: `rgb(${currentDateColour[0]}, ${currentDateColour[1]}, ${currentDateColour[2]})`
    }

    const levelProgress = scrollY > 1400 ? Math.min((scrollY - 1400) / (1500 - 1400), 1) : 0;
    
    return (
        <div style={backgroundStyles} className={'h-[200vh] w-[100vw] bg-green-300 relative flex flex-col items-center'}>
            <div style={dateStyles}
                className={'font-medium text-5xl mt-16 sticky top-12'}>{day < 10 && '0'}{day}/{month < 10 && '0'}{month}/{year < 1000 && '0'}{year}</div>
            <div style={oldSliderScrollStyles}>
                <video
                    src={oldSlider}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >Your browser does not support the video tag.</video>
            </div>
            <div style={newSliderScrollStyles}>
                <video
                    src={newSlider}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                >Your browser does not support the video tag.</video>
            </div>
            
            <LevelComponent progress={levelProgress} isGreen={false} header={'Level One'} subHeader={'Complete'} isFirst={true} />
        </div>
    )
}