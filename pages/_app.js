import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

class BandVotingApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Meta />
        <Layout>
          <Component />
        </Layout>
      </Container>
    );
  }
}

export default BandVotingApp;
