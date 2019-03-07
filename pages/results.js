import ResultTable from '../components/ResultTable';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      hb: [],
      club: [],
      misc: []
    };
  }

  componentWillMount() {
    const bandsFromStorage = localStorage.getItem('suobands');
    // Build stage related Arrays
    if (bandsFromStorage) {
      const allBands = JSON.parse(bandsFromStorage);
      const hb = allBands.filter(band => band.stage === 'HB');
      const club = allBands.filter(band => band.stage === 'Club');
      const misc = allBands.filter(band => band.stage === 'Keine');

      this.setState({ hb, club, misc });
    }
  }

  render() {
    const { hb, club, misc } = this.state;
    return (
      <div className="container">
        <h2>Hauptbühne</h2>
        <ResultTable deiMam="string" bands={hb} />

        <h2>Club</h2>
        <ResultTable deiMam="string" bands={club} />

        <h3>Keine Bühne / Enthaltungen</h3>
        <ResultTable deiMam="modda" bands={misc} />
      </div>
    );
  }
}

export default Results;
