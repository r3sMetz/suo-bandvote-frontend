class Initialize extends React.Component {
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

  render() {
    const { bands } = this.state;
    return (
      <>
        <h2>Bands bearbeiten</h2>
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
                  <td>Links</td>
                  <td>Genre</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Keine Bands vorhanden</p>
        )}
      </>
    );
  }
}

export default Initialize;
