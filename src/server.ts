import app from "./app";
import prisma from "./config/prisma";

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to Postgres");
    app.listen(PORT, () => console.log(`🔥 Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start:", err);
    process.exit(1);
  }
};

start();
