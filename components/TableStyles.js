const TableStyles = props => (
  <style jsx="true">{`
    table {
      border-collapse: collapse;
      width: 100%;
    }
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: black;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  `}</style>
);

export default TableStyles;
