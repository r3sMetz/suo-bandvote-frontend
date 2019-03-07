import BandTable from '../components/partials/bands/BandTable';
import Initialize from '../components/partials/bands/Initialize';

class Bands extends React.Component {
  render() {
    return (
      <>
        <BandTable />
        <Initialize />
      </>
    );
  }
}

export default Bands;
