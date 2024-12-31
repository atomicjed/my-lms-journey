import './SlideshowWrapper.css';
import MyLmsJourney from "../MyLmsJourney/MyLmsJourney";

export default function SlideshowWrapper() {
    return (
        <div className={'slideshow-wrapper'}>
            <div className={'content-wrapper'}>
                <div className={'flex'}>
                    <MyLmsJourney />
                </div>
            </div>
        </div>
    )
}