import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      
      <Container className="md-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Head>
          <title>ReactJS with react-bootstrap</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <h1>Bienvenue au Summer Camp RGU</h1>
        <p>Let's get started !!!</p>
      </Container>
    </>
  );
}
