import PropTypes from 'prop-types';
import { saveStorage } from '../utilities';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    };
  }

  changeValue = e => {
    const { ratingChangeHandler, ratingProperty, ratingBand } = this.props;

    // Set Component State
    const rating = parseInt(event.target.value);
    this.setState({ rating });

    // Handle rating-change in parent-function
    ratingChangeHandler(ratingBand, ratingProperty, rating);
  };

  render() {
    return (
      <select value={this.state.rating} onChange={this.changeValue}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    );
  }
}

Rating.defaultProps = {
  rating: 0,
  ratingProperty: '',
  ratingChangeHandler: () => null,
  ratingBand: {}
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingProperty: PropTypes.string.isRequired,
  ratingChangeHandler: PropTypes.func.isRequired,
  ratingBand: PropTypes.object.isRequired
};

export default Rating;
