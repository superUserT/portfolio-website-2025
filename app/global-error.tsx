"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    fontFamily: "system-ui, sans-serif",
                    display: "flex",
                    minHeight: "100vh",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    textAlign: "center",
                    padding: "1rem",
                }}
            >
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    Something went wrong
                </h2>
                <p style={{ color: "#666", maxWidth: "28rem" }}>
                    A critical error occurred. Please reload the page.
                </p>
                <button
                    onClick={reset}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
