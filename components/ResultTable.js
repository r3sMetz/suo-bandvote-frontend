import PropTypes from 'prop-types';
import TableStyles from './TableStyles';

class ResultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: props.bands
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Platz</th>
            <th>Name</th>
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
  bands: []
};

ResultTable.propTypes = {
  bands: PropTypes.array.isRequired
};

export default ResultTable;
