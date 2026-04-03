import { use } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="centered-page">
      <div className="card">
        <h1>Register Page</h1>
        <form>
          <div className="form-group">
            <label htmlFor="reg-email">Email:</label>
            <input
              type="email"
              autoComplete="email"
              id="reg-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-username">Username:</label>
            <input
              type="username"
              autoComplete="username"
              id="reg-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Password:</label>
            <input
              type="password"
              autoComplete="password"
              id="reg-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn--primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
