import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container className="md-container">
        <Head>
          <title>ReactJS with react-bootstrap</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <h1>This is the Home Page</h1>
        <p>Let's get started !!!</p>
      </Container>
    </>
  );
}
