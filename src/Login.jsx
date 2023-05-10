import { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email and password to server for authentication
    console.log(`email: ${email}, password: ${password}`);

    // If login is successful, call onLogin
    onLogin();
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;