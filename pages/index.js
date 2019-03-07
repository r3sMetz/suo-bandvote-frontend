import TableStyles from '../components/TableStyles';
import Rating from '../components/Rating';
import SafetyButton from '../components/SafetyButton';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      bands: []
    };
  }

  componentDidMount() {
    const bandsFromStorage = localStorage.getItem('suobands');
    if (bandsFromStorage)
      this.setState({ bands: JSON.parse(bandsFromStorage) });
  }

  changeRating = (band, property, newRatingValue) => {
    band.rating[property] = newRatingValue;

    this.rebuildBandArrayWithBand(band);
  };

  changeStage = (event, band) => {
    band.stage = event.target.value;
    this.rebuildBandArrayWithBand(band);
  };

  rebuildBandArrayWithBand = band => {
    // Rebuild BandArray
    const bands = this.state.bands;
    bands[band.id] = band;
    this.setState({ bands });

    localStorage.setItem('suobands', JSON.stringify(this.state.bands));
  };

  render() {
    const { bands } = this.state;
    return (
      <div className="container">
        <h2>
          Alle Bands ({bands.length})&nbsp;
          <SafetyButton />
        </h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Links</th>
              <th>Gesamt</th>
              <th>Sänger</th>
              <th>Qualität</th>
              <th>Bühne</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band, index) => (
              <tr key={index}>
                <td>{band.name}</td>
                <td>{band.genre}</td>
                <td>
                  {band.links.map((link, index) => (
                    <span key={index}>
                      <a target="_blank" href={link}>
                        Link {index + 1}
                      </a>
                      <br />
                    </span>
                  ))}
                </td>
                <td>
                  <Rating
                    ratingChangeHandler={this.changeRating}
                    ratingBand={band}
                    ratingProperty="overall"
                    rating={band.rating.overall}
                  />
                </td>
                <td>
                  <Rating
                    ratingChangeHandler={this.changeRating}
                    ratingBand={band}
                    ratingProperty="singer"
                    rating={band.rating.singer}
                  />
                </td>
                <td>
                  <Rating
                    ratingChangeHandler={this.changeRating}
                    ratingBand={band}
                    ratingProperty="quality"
                    rating={band.rating.quality}
                  />
                </td>
                <td>
                  <select
                    value={band.stage}
                    onChange={() => this.changeStage(event, band)}
                  >
                    <option value="Keine">Keine</option>
                    <option value="HB">HB</option>
                    <option value="Club">Club</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
          <TableStyles />
        </table>
      </div>
    );
  }
}

export default Index;
