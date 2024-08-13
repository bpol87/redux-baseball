import TotalPitchers from '../TotalPitchers/TotalPitchers.jsx';
import TotalCatchers from '../TotalCatchers/TotalCatchers.jsx';
import OnTheMound from '../OnTheMound/OnTheMound.jsx';
import BehindThePlate from '../BehindThePlate/BehindThePlate.jsx';
import PitcherForm from '../PitcherForm/PitcherForm.jsx';
import CatcherForm from '../CatcherForm/CatcherForm.jsx';
import PitcherList from '../PitcherList/PitcherList.jsx';
import CatcherList from '../CatcherList/CatcherList.jsx';

function App() {

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}

export default App;
