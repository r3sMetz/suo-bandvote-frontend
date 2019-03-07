import PropTypes from 'prop-types';
import TableStyles from './TableStyles';

class ResultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: []
    };
  }

  componentDidMount() {
    const bandsFromStorage = localStorage.getItem('suobands');

    // Filter and order Bands
    if (bandsFromStorage) {
      const allBands = JSON.parse(bandsFromStorage);
      const filteredAndOrderedBands = allBands
        .filter(band => band.stage === this.props.stage)
        .map(band => {
          const { overall, singer, quality } = band.rating;
          const result = overall + singer + quality;
          return { ...band, result };
        })
        .sort(this.sortFunction);

      this.setState({ bands: filteredAndOrderedBands });
    }
  }

  sortFunction = (a, b) => {
    if (a.result > b.result) return -1;
    if (a.result < b.result) return 1;

    return 0;
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Platz</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Punkte</th>
          </tr>
        </thead>
        <tbody>
          {this.state.bands.map((band, index) => {
            const { overall, singer, quality } = band.rating;
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{band.name}</td>
                <td>{band.genre}</td>
                <td>{overall + singer + quality}</td>
              </tr>
            );
          })}
        </tbody>
        <TableStyles />
      </table>
    );
  }
}

// PropTypes + Default Props
ResultTable.defaultProps = {
  stage: ''
};

ResultTable.propTypes = {
  stage: PropTypes.string.isRequired
};

export default ResultTable;
