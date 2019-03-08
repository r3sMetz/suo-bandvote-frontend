import ResultTable from '../components/ResultTable';

class Choice extends React.Component {
  constructor() {
    super();
    this.state = {
      bands: [],
      hb: [],
      club: []
    };
  }

  componentDidMount() {
    const bandsFromStorage = localStorage.getItem('suobands');
    if (bandsFromStorage) {
      const bands = JSON.parse(bandsFromStorage);
      const hb = bands.filter(band => band.choosen && band.stage === 'HB');
      const club = bands.filter(band => band.coosen && band.stage === 'Club');
      this.setState({ bands, hb, club });
    }
  }

  rebuildBandArrayWithBand = band => {
    // Rebuild BandArray
    const bands = this.state.bands;
    bands[band.id] = band;
    this.setState({ bands });

    localStorage.setItem('suobands', JSON.stringify(this.state.bands));
  };

  render() {
    const { hb, club } = this.state;
    return (
      <div className="container">
        <h2>Auswahl Hauptbühne</h2>
        <ResultTable bands={hb} />
        <h2>Auswahl Club</h2>
        <ResultTable bands={club} />
      </div>
    );
  }
}

export default Choice;
