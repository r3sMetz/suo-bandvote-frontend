import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import GlobalStyles from '../components/GlobalStyles';

class BandVotingApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
        <GlobalStyles />
      </Container>
    );
  }
}

export default BandVotingApp;
