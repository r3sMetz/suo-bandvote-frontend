import { saveStorage } from '../utilities';

const SafetyButton = () => (
  <button onClick={() => saveStorage(localStorage.getItem('suobands'))}>
    Sicherheitskopie anfertigen
  </button>
);

export default SafetyButton;
