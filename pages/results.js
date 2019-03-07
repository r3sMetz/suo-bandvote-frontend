import ResultTable from '../components/ResultTable';

const Results = () => (
  <div className="container">
    <h2>Hauptbühne</h2>
    <ResultTable stage="HB" />

    <h2>Club</h2>
    <ResultTable stage="Club" />

    <h2>Keine Bühne / Enthaltungen</h2>
    <ResultTable stage="Keine" />
    <style jsx="true">{`
      h2:not(:first-child) {
        margin-top: 45px;
      }
    `}</style>
  </div>
);

export default Results;
