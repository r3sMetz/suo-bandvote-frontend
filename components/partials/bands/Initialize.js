import { initialBands } from '../../../utilities';

class Initialize extends React.Component {
  constructor() {
    super();
    this.state = {
      bandsInitialized: false,
      initialBands: initialBands
    };
  }

  componentDidMount() {
    if (localStorage.getItem('suobands'))
      this.setState({ bandsInitialized: true });
  }

  initBands = () => {
    const { bandsInitialized } = this.state;
    if (window.confirm(`${bandsInitialized ? 'Reset' : 'Init'} Bands?`)) {
      const newBandObject = [];

      // Build Band Array
      this.state.initialBands.forEach((band, index) => {
        const newBand = {
          id: index,
          name: band,
          genre: 'Musik',
          links: [],
          rating: {
            overall: 0,
            singer: 0,
            quality: 0
          }
        };
        newBandObject.push(newBand);
      });

      console.log(newBandObject);
      // Save bandarray to localStorage
      localStorage.setItem('suobands', JSON.stringify(newBandObject));
      this.setState({ bandsInitialized: true });
    }
  };

  render() {
    const { bandsInitialized } = this.state;
    return (
      <div className="container">
        <button onClick={this.initBands}>
          {bandsInitialized ? 'Reset' : 'Init'}
        </button>
      </div>
    );
  }
}

export default Initialize;
