import "dotenv/config";
import app from "./app";

// const PORT = process.env.PORT || 3001;
const PORT = Number(process.env.PORT) || 3001;

const dbUrl = process.env.DATABASE_URL;

if (dbUrl) {
  const parsed = new URL(dbUrl);

  console.log("Database connection configuration:", {
    hostname: parsed.hostname,
    port: parsed.port,
    database: parsed.pathname,
    usernamePresent: Boolean(parsed.username),
    passwordPresent: Boolean(parsed.password),
  });
} else {
  console.error("DATABASE_URL is missing!");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});



