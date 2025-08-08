import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 5 }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 4 }}>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginBottom: 12 }}
          />

          <label htmlFor="password" style={{ display: 'block', marginBottom: 4 }}>Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginBottom: 12 }}
          />

          <button type="submit" style={{ padding: '8px 16px' }}>Log In</button>
        </form>
      </main>
    </>
  );
}
