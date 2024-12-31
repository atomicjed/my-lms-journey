import {useEffect, useState} from "react";

export default function Benefits() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 10550);
    }

    const middleOpacity = scrollY > 400 ? Math.min((scrollY - 400) / (600 - 400), 1) : 0;
    const first = scrollY > 800 ? Math.min((scrollY - 800) / (1000 - 800), 1) : 0;
    const second = scrollY > 1000 ? Math.min((scrollY - 1000) / (1200 - 1000), 1) : 0;
    const third = scrollY > 1200 ? Math.min((scrollY - 1200) / (1400 - 1200), 1) : 0;
    const fourth = scrollY > 1400 ? Math.min((scrollY - 1400) / (1600 - 1400), 1) : 0;
    const disappear = scrollY > 1800 ? Math.min((scrollY - 1800) / (2000 - 1800), 1) : 0;
    const spaceManager = scrollY > 2000 ? Math.min((scrollY - 2000) / (2200 - 2000), 1) : 0;
    
    return (
        <div className={'relative z-30 bg-[rgb(0,172,160)] text-center h-[300vh] w-[100vw]'}>
            <div className={'font-bold text-white text-5xl'} style={{
                position: 'fixed',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: middleOpacity
            }}>Benefits I've taken away with me:
            </div>
            <div className={'font-bold text-white text-3xl'} style={{
                position: 'fixed',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY > 1800 ? (1 - disappear) : first
            }}>- How to be collaborative in a team
            </div>
            <div className={'font-bold text-white text-3xl'} style={{
                position: 'fixed',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY > 1800 ? (1 - disappear) : second
            }}>- Learnt how different teams come together to deliver a project in an agile way
            </div>
            <div className={'font-bold text-white text-3xl'} style={{
                position: 'fixed',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY > 1800 ? (1 - disappear) : third
            }}>- How to stick to project requirements
            </div>
            <div className={'font-bold text-white text-3xl'} style={{
                position: 'fixed',
                top: '75%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY > 1800 ? (1 - disappear) : fourth
            }}>- Invaluable expertise/guidance from peers
            </div>

            <div className={'font-bold text-white text-3xl'} style={{
                position: 'fixed',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: spaceManager
            }}>- If I'm starting up a self storage company, I'm not using Space Manager as it's backend
            </div>
        </div>
    )
}