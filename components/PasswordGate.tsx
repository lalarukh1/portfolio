"use client";

import { useState, useEffect, type FormEvent } from "react";

type PasswordGateProps = {
  children: React.ReactNode;
  storageKey: string;
};

const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD ?? "";
const SESSION_VALUE = "granted";

export default function PasswordGate({ children, storageKey }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored === SESSION_VALUE) {
      setIsUnlocked(true);
    }
    setIsChecking(false);
  }, [storageKey]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputValue === CORRECT_PASSWORD) {
      sessionStorage.setItem(storageKey, SESSION_VALUE);
      setIsUnlocked(true);
    } else {
      setError("Incorrect password. Please try again.");
      setInputValue("");
    }
  }

  if (isChecking) {
    return null;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 px-6">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-medium mb-2">This case study is protected</h2>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          Enter the password to view. Reach out if you need access.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="password" className="block text-xs uppercase tracking-widest text-muted mb-3">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              setError("");
            }}
            autoFocus
            autoComplete="current-password"
            className="w-full bg-surface border border-border text-foreground px-4 py-3 text-sm outline-none focus:border-muted transition-colors duration-200 mb-4"
          />
          {error && (
            <p role="alert" className="text-sm text-red-400 mb-4">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-foreground text-background text-sm py-3 hover:opacity-80 transition-opacity duration-200"
          >
            View case study
          </button>
        </form>
      </div>
    </div>
  );
}
