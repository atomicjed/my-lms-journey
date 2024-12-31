import {useEffect, useState} from "react";

export default function FinalBosses() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 8056);
    }

    const screenHeight = window.innerHeight;

    const appearWhenInView = scrollY > 500 ? Math.min((scrollY - 500) / (900 - 500), 1) : 0;
    const collapse = scrollY > 1500 ? Math.min((scrollY - 1500) / (1600 - 1500), 1) : 0;

    const progress = scrollY > screenHeight ? Math.min((scrollY - screenHeight) / (1200 - screenHeight), 1) : 0;
    const auth0Styles = {
        position: 'fixed',
        transform: `${scrollY > 1500 ? `scale(${1 - collapse})` : `scale(${progress * 1})`}`,
        right: `${scrollY > 1500 ? 10 + (22 * collapse) : 15 - 5 * progress}%`,
        opacity: appearWhenInView,
        zIndex: 10,
        top: '40%',
        transformOrigin: 'center',
    }
    const firebaseStyles = {
        position: 'fixed',
        transform: `${scrollY > 1500 ? `scale(${1 - collapse})` : `scale(${progress * 1})`}`,
        left: `${scrollY > 1500 ? 10 + (30 * collapse) : 15 - 5 * progress}%`,
        opacity: appearWhenInView,
        zIndex: 10,
        top: '40%',
        transformOrigin: 'center',
    }

    const goBlack = scrollY > 1550 ? Math.min((scrollY - 1550) / (1700 - 1550), 1) : 0;
    const changeBackgroundColourOnScroll = {
        startColor: [255, 255, 255],
        endColor: [0, 0, 0],
    }
    const currentBackgroundColour = changeBackgroundColourOnScroll.startColor.map((start, index) => {
        const end = changeBackgroundColourOnScroll.endColor[index];
        return Math.round(start + (end - start) * goBlack);
    });
    const goWhite =  Math.min((scrollY - 2100) / (2200 - 2100), 1);
    const changeToWhite = {
        startColor: [0, 0, 0],
        endColor: [255, 255, 255],
    }
    const currentWhite = changeToWhite.startColor.map((start, index) => {
        const end = changeToWhite.endColor[index];
        return Math.round(start + (end - start) * goWhite);
    });
    const backgroundStyles  = {
        backgroundColor: scrollY > 2100 ? `rgb(${currentWhite[0]}, ${currentWhite[1]}, ${currentWhite[2]})` : `rgb(${currentBackgroundColour[0]}, ${currentBackgroundColour[1]}, ${currentBackgroundColour[2]})`
    }

    const showFinalBossText = scrollY > 1700 ? Math.min((scrollY - 1700) / (1800 - 1700), 1) : 0;
    const fadeOutFinalBoss = Math.min((scrollY - 1900) / (2000 - 1900), 1);
    
    const showSpaceManager = scrollY > 2200 ? Math.min((scrollY - 2200) / (2500 - 2200), 1) : 0;
    const spaceManagerStyles = {
        opacity: showSpaceManager
    }
    
    return (
        <div style={backgroundStyles} className={'w-[100vw] h-[320vh] relative'}>
            <img style={firebaseStyles} className={'object-cover w-[400px] -translate-y-1/2'}
                 src={'https://pages.okta.com/rs/855-QAH-699/images/email-main-template_auth0-by-okta-logo_black_279x127_3x.png'}
                 alt={'Auth0 Logo'}/>
            <img style={auth0Styles} className={'scale-50 object-cover w-[500px]'}
                 src={'https://www.gstatic.com/devrel-devsite/prod/v80280542cfb431993d6ccf12e26a1c5862cffb314c3cfae3ff08e8374a93b7f7/firebase/images/lockup.svg'}
                 alt={'Firebase Logo'}/>

            <div className={'font-bold text-white text-5xl'} style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY < 1900 ? showFinalBossText : 1 - fadeOutFinalBoss
            }}>Final Boss</div>
            
            <img style={spaceManagerStyles} className={'w-[600px] z-10 object-cover fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} src={'https://fedessa-sweden.pixl8.cloud/static/453c57a5-9c6f-4714-9ad3beb42e98bd69/Radical-Systems-Logo-Custom.jpg'} alt={'Space Manager Logo'} />
        </div>
    )
}