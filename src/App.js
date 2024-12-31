import SlideshowWrapper from "./Features/Layout/SlideshowWrapper";
import MyLmsJourney from "./Features/MyLmsJourney/MyLmsJourney";
import FirstDay from "./Features/FirstDay/FirstDay";
import DontMessUp from "./Features/DontMessUp/DontMessUp";
import Clock from "./Features/Clock/Clock";
import UiTasks from "./Features/UiTasks/UiTasks";
import FinalBosses from "./Features/FinalBosses/FinalBosses";
import ThanksForListening from "./Features/ThanksForListening/ThanksForListening";
import Benefits from "./Features/Benefits/Benefits";

function App() {
  return (
      <>
          <MyLmsJourney/>
          <FirstDay />
          <Clock />
          <DontMessUp />
          <UiTasks />
          <FinalBosses />
          <Benefits />
          <ThanksForListening />
      </>
)
  ;
}

export default App;
