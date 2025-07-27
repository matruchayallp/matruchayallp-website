import React, { useState } from "react";

const dummyStatusData = [
  { id: "12345", name: "John Doe", type: "Home Loan", status: "In Review" },
  { id: "67890", name: "Priya Sharma", type: "BGV", status: "Completed" },
];

const AdminPortal = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);

  // Dummy login for now; replace with Supabase Auth integration
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@matruchaya.com" && password === "admin123") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(dummyStatusData.filter(d => d.id === search || d.name.toLowerCase().includes(search.toLowerCase())));
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="corporate-card w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center text-[var(--primary)]">Admin/Track Portal</h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium">Password</label>
              <input type="password" id="password" name="password" required className="w-full px-4 py-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <button type="submit" className="corporate-btn w-full text-lg">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12">
      <div className="corporate-card w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-[var(--primary)]">Track Application Status</h1>
        <form className="flex flex-col sm:flex-row gap-4 mb-6" onSubmit={handleSearch}>
          <input type="text" placeholder="Enter Application ID or Name" className="flex-1 px-4 py-2 border rounded" value={search} onChange={e => setSearch(e.target.value)} />
          <button type="submit" className="corporate-btn">Search</button>
        </form>
        {results.length > 0 ? (
          <table className="w-full text-left border mt-4">
            <thead>
              <tr>
                <th className="p-2 border-b">ID</th>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Type</th>
                <th className="p-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, idx) => (
                <tr key={idx}>
                  <td className="p-2 border-b">{r.id}</td>
                  <td className="p-2 border-b">{r.name}</td>
                  <td className="p-2 border-b">{r.type}</td>
                  <td className="p-2 border-b">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-muted-foreground text-center">No results found.</div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal; 