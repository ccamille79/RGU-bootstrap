import Head from "next/head";
import Navbar from '../components/navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <h1>About us</h1>
        <p>This is the about page.</p>
      </main>
    </>
  );
}
