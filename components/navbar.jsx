import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      padding: '16px 24px',
      backgroundColor: '#b0e0a8', // vert amande
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      margin: '20px auto',
      width: '80%',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <NavItem href="/" label="Home" />
      <NavItem href="/about" label="About" />
      <NavItem href="/login" label="Login" />
      <NavItem href="/todo" label="Todo" />
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <Link href={href} legacyBehavior>
      <a style={{
        color: '#2d4032',
        padding: '6px 12px',
        borderRadius: '6px',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease-in-out',
      }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#a1d89c'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        {label}
      </a>
    </Link>
  );
}
