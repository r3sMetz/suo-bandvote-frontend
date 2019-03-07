import TableStyles from '../../TableStyles';
import { saveStorage } from '../../../utilities';
import SafetyButton from '../../SafetyButton';

class BandTable extends React.Component {
  constructor() {
    super();
    this.state = {
      bands: []
    };
  }

  componentDidMount() {
    if (localStorage.getItem('suobands'))
      this.setState({ bands: JSON.parse(localStorage.getItem('suobands')) });
  }

  rebuildBandArrayWithBand = band => {
    // Rebuild BandArray
    const bands = this.state.bands;
    bands[band.id] = band;
    this.setState({ bands });

    localStorage.setItem('suobands', JSON.stringify(this.state.bands));
  };

  addLink = band => {
    const newLink = window.prompt('Link eingeben');
    band.links.push(newLink);

    this.rebuildBandArrayWithBand(band);
  };

  removeLink = (band, index) => {
    if (window.confirm('Link entfernen?')) {
      band.links.splice(index, 1);
      this.rebuildBandArrayWithBand(band);
    }
  };

  editGenre = band => {
    const newGenre = window.prompt('Genre eingeben', band.genre);
    band.genre = newGenre;

    this.rebuildBandArrayWithBand(band);
  };

  render() {
    const { bands } = this.state;
    return (
      <div className="container">
        <h2>
          Bands bearbeiten&nbsp;
          <SafetyButton />
        </h2>
        {bands.length ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Links</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band, index) => (
                <tr key={index}>
                  <td>{band.name}</td>
                  <td>
                    {band.links.map((link, index) => (
                      <span key={index}>
                        {link}&nbsp;
                        <button onClick={() => this.removeLink(band, index)}>
                          X
                        </button>
                        <br />
                      </span>
                    ))}
                    <button onClick={() => this.addLink(band)}>Add</button>
                  </td>
                  <td>
                    {band.genre}
                    <br />
                    <button onClick={() => this.editGenre(band)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Keine Bands vorhanden</p>
        )}
        <TableStyles />
      </div>
    );
  }
}

export default BandTable;
