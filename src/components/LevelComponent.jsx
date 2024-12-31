export default function LevelComponent({progress, isGreen, header, subHeader, isFirst}) {
    const rightPosition = `calc(-50% + ${progress * 50}%)`;
    const moveRightStyles = {
        left: rightPosition,
    }

    const leftPosition = `calc(-50% + ${progress * 50}%)`;
    const moveLeftStyles = {
        right: leftPosition,
    }
    
    const contentOpacity = progress > 0.8 ? Math.min((progress - 0.8) / (1 - 0.8), 1) : 0;
    const contentStyles = {
        opacity: progress,
    }
    return (
        <div>
            <div style={moveRightStyles} className={`fixed top-[25%] ${isGreen ? 'bg-[rgb(0,172,160)]' : 'bg-white'} h-[60vh] w-[50vw] text-green-300`}></div>
            <div style={moveLeftStyles} className={`fixed top-[25%] ${isGreen ? 'bg-[rgb(0,172,160)]' : 'bg-white'} h-[60vh] w-[50vw] text-green-300`}></div>
            <div style={contentStyles} className={`fixed top-[44%] ${isFirst ? 'left-[40%]' : 'left-[30%]'} text-center ${isGreen ? 'text-white' : 'text-[rgb(0,172,160)]' }`}>
                <div className={'text-7xl font-bold mb-[25px]'}>{header}</div>
                <div className={'text-4xl'}>{subHeader}</div>
            </div>
        </div>
    )
}