import TableStyles from '../components/TableStyles';

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

  render() {
    const { bands } = this.state;
    return (
      <div className="container">
        <h2>Alle Bands ({bands.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Links</th>
              <th>Gesamteindruck</th>
              <th>Sänger</th>
              <th>Qualität</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band, index) => (
              <tr key={index}>
                <td>{band.name}</td>
                <td>{band.genre}</td>
                <td>
                  {band.links.map(link => (
                    <>
                      {link}
                      <br />
                    </>
                  ))}
                </td>
                <td>{band.rating.overall}</td>
                <td>{band.rating.singer}</td>
                <td>{band.rating.quality}</td>
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
