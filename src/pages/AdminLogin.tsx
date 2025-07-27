import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [session, setSession] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      return;
    }
    setSession(data.session);
    // Optionally: save session in localStorage or context
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form className="corporate-card w-full max-w-sm space-y-4" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold text-center text-[var(--primary)]">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-600 text-center">{error}</div>}
        <button type="submit" className="corporate-btn w-full text-lg">Login</button>
        {session && <div className="text-green-600 text-center">Logged in!</div>}
      </form>
    </div>
  );
};

export default AdminLogin; 