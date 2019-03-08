class Choice extends React.Component {
  constructor() {
    super();
    this.state = {
      bands: []
    };
  }

  rebuildBandArrayWithBand = band => {
    // Rebuild BandArray
    const bands = this.state.bands;
    bands[band.id] = band;
    this.setState({ bands });

    localStorage.setItem('suobands', JSON.stringify(this.state.bands));
  };

  render() {
    return (
      <div className="container">
        <h2>Auswahl Hauptbühne</h2>
        <h2>Auswahl Club</h2>
      </div>
    );
  }
}

export default Choice;
