import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import GlobalStyles from '../components/GlobalStyles';

class BandVotingApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Meta />
        <GlobalStyles />
        <Layout>
          <Component />
        </Layout>
      </Container>
    );
  }
}

export default BandVotingApp;
