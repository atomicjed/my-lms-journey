import NPU from '../../assets/NPU.png';
import NCSOD from '../../assets/NCSOD.png';
import NCSP from '../../assets/NCSP.png';
import NFPE from '../../assets/NFPE.png';
import NSA from '../../assets/NSA.png';
import NFP from '../../assets/NFP.png';
import NRPS from '../../assets/NRPS.png';

import OCSOD from '../../assets/OCSOD.png';
import OCSP from '../../assets/OCSP.jpg';
import OFPE from '../../assets/OFPE.png';
import OSA from '../../assets/OSA.png';
import OFP from '../../assets/OFP.jpg';
import ORPS from '../../assets/ORPS.jpg';
import {useEffect, useState} from "react";
import LevelComponent from "../../components/LevelComponent";


export default function UiTasks() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll() {
        setScrollY(window.scrollY - 5745);
    }
    
    const screenHeight = window.innerHeight;

    const middleOpacity = scrollY > 700 ? Math.min((scrollY - 700) / (900 - 700), 1) : 0;

    const firstImage = scrollY > screenHeight ? Math.min((scrollY - screenHeight) / (1200 - screenHeight), 1) : 0;
    const firstRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * firstImage}%`,
        opacity: `${1 - firstImage}`,
    }
    const firstLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * firstImage}%`,
        opacity: `${1 - firstImage}`,
    }

    const secondImage = scrollY > 1100 ? Math.min((scrollY - 1100) / (1300 - 1100), 1) : 0;
    const secondRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * secondImage}%`,
        opacity: `${1 - secondImage}`,
    }
    const secondLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * secondImage}%`,
        opacity: `${1 - secondImage}`,
    }

    const thirdImage = scrollY > 1400 ? Math.min((scrollY - 1400) / (1600 - 1400), 1) : 0;
    const thirdRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * thirdImage}%`,
        opacity: `${1 - thirdImage}`,
    }
    const thirdLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * thirdImage}%`,
        opacity: `${1 - thirdImage}`,
    }

    const fourthImage = scrollY > 1700 ? Math.min((scrollY - 1700) / (1900 - 1700), 1) : 0;
    const fourthRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * fourthImage}%`,
        opacity: `${1 - fourthImage}`,
    }
    const fourthLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * fourthImage}%`,
        opacity: `${1 - fourthImage}`,
    }

    const fiveImage = scrollY > 2000 ? Math.min((scrollY - 2000) / (2100 - 2000), 1) : 0;
    const fiveRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * fiveImage}%`,
        opacity: `${1 - fiveImage}`,
    }
    const fiveLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * fiveImage}%`,
        opacity: `${1 - fiveImage}`,
    }

    const sixImage = scrollY > 2300 ? Math.min((scrollY - 2300) / (2500 - 2300), 1) : 0;
    const sixRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * sixImage}%`,
        opacity: `${1 - sixImage}`,
    }
    const sixLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * sixImage}%`,
        opacity: `${1 - sixImage}`,
    }

    const sevenImage = scrollY > 2600 ? Math.min((scrollY - 2600) / (2800 - 2600), 1) : 0;
    const fadeEarly = scrollY > 2135 ? Math.min((scrollY - 2135) / (2235 - 2135), 1) : 0;
    const sevenRightImageStyles = {
        position: 'absolute',
        right: `${5 - 5 * sevenImage}%`,
        opacity: `${1 - fadeEarly}`,
    }
    const sevenLeftImageStyles = {
        position: 'absolute',
        left: `${5 - 5 * sevenImage}%`,
        opacity: `${1 - fadeEarly}`,
    }

    const levelProgress = scrollY > 2135 ? Math.min((scrollY - 2135) / (2235 - 2135), 1) : 0;
    
    const fadeOutOpacity = 1 - levelProgress;
    
    return (
        <div className={'h-[290vh] relative w-[100vw] bg-white pt-[200px]'}>

            <div className={'absolute top-32 left-0 ml-[240px] text-3xl font-bold text-[rgb(0,172,160)]'}>Old Attic UI</div>
            <div className={'left-column'}>
                <img style={firstLeftImageStyles} className={'object-cover w-[500px]'} src={OSA} alt={"Ui work"}/>
                <img style={secondLeftImageStyles} className={'mt-[300px] object-cover w-[500px]'} src={OCSOD}
                     alt={"Ui work"}/>
                <img style={thirdLeftImageStyles} className={'mt-[600px] object-cover w-[500px]'} src={OCSP}
                     alt={"Ui work"}/>
                <img style={fourthLeftImageStyles} className={'mt-[900px] object-cover w-[500px]'} src={OFP}
                     alt={"Ui work"}/>
                <img style={fiveLeftImageStyles} className={'mt-[1200px] object-cover w-[500px]'} src={OFPE}
                     alt={"Ui work"}/>
                <img style={sevenLeftImageStyles} className={'mt-[1500px] object-cover w-[500px]'} src={ORPS}
                     alt={"Ui work"}/>
            </div>

            <div className={'font-bold text-[rgb(0,172,160)] text-4xl'} style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                opacity: scrollY < 2000 ? middleOpacity : fadeOutOpacity
            }}>UI Tasks
            </div>

            <div className={'absolute top-32 right-0 mr-[220px] text-3xl font-bold text-[rgb(0,172,160)]'}>New Atomic UI</div>
            <div className={'right-column'}>
                <img style={firstRightImageStyles} className={'object-cover w-[500px]'} src={NSA} alt={"Ui work"}/>
                <img style={secondRightImageStyles} className={'mt-[300px] object-cover w-[500px]'} src={NCSOD}
                     alt={"Ui work"}/>
                <img style={thirdRightImageStyles} className={'mt-[600px] object-cover w-[500px]'} src={NCSP}
                     alt={"Ui work"}/>
                <img style={fourthRightImageStyles} className={'mt-[900px] object-cover w-[500px]'} src={NFP}
                     alt={"Ui work"}/>
                <img style={fiveRightImageStyles} className={'mt-[1200px] object-cover w-[500px]'} src={NPU}
                     alt={"Ui work"}/>
                <img style={sevenRightImageStyles} className={'mt-[1500px] object-cover w-[500px]'} src={NRPS}
                     alt={"Ui work"}/>
            </div>

            <LevelComponent progress={levelProgress} isGreen={true} header={'Level Two'}
                            subHeader={'Complete - Didn\'t mess up the project'}/>
        </div>
    )
}