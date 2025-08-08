import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', backgroundColor: '#eee' }}>
      <Link href="/" style={{ marginRight: 20 }}>Home</Link>
      <Link href="/about" style={{ marginRight: 20 }}>About</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
