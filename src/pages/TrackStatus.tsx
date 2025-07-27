import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const TrackStatus: React.FC = () => {
  const [applicationId, setApplicationId] = useState("");
  const [status, setStatus] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus(null);
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .eq("id", applicationId)
      .single();
    if (error) {
      setError("Application not found.");
      return;
    }
    setStatus(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form className="corporate-card w-full max-w-md space-y-4" onSubmit={handleCheck}>
        <h1 className="text-2xl font-bold text-center text-[var(--primary)]">Track Application Status</h1>
        <input
          type="text"
          placeholder="Enter Application ID"
          className="w-full px-4 py-2 border rounded"
          value={applicationId}
          onChange={e => setApplicationId(e.target.value)}
          required
        />
        <button type="submit" className="corporate-btn w-full text-lg">Check Status</button>
        {error && <div className="text-red-600 text-center">{error}</div>}
        {status && (
          <div className="mt-4 text-center">
            <div><b>Name:</b> {status.name}</div>
            <div><b>Type:</b> {status.loan_type}</div>
            <div><b>Status:</b> {status.status}</div>
            <div><b>Submitted:</b> {new Date(status.created_at).toLocaleString()}</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TrackStatus; 