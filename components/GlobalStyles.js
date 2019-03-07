const GlobalStyles = () => (
  <style jsx global>{`
    html,
    body {
      margin: 0;
      padding: 0;
    }

    *  {
      box-sizing: border-box;
    }

    body {
      font-family: Roboto, Helvetica, sans-serif;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 15px;
    }
  `}</style>
);

export default GlobalStyles;
