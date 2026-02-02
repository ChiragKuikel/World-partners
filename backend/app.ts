import express, { type Express, type Request, type Response } from "express";
import cors from "cors"
import bodyParser from "body-parser"
import jobsRouter from "./routes/jobs"
import blogRouter from "./routes/blog"
import applicationsRouter from "./routes/applications"
import contactsRouter from "./routes/contacts"
import authRouter from './routes/auth'
import dotenv from 'dotenv'
import next from "next";
import path from "path";
dotenv.config()

const dev = false; // production
// Next.js app path is root (since .next and app/ are at root)
const nextApp = next({
  dev,
  dir: path.join(__dirname, '..','..'), // points to WORLD-PARTNERS-APP root
});

const handle = nextApp.getRequestHandler();

const app: Express = express()


// Middleware
app.use(cors({origin: true}))

app.use((req, res, next) => {
  if (req.url.startsWith("/api/auth")) {
    next(); // let Next.js handle it
  } else {
    bodyParser.json({ limit: "50mb" })(req, res, next);
  }
});

app.use((req, res, next) => {
  if (req.url.startsWith("/api/auth")) {
    next();
  } else {
    bodyParser.urlencoded({ extended: true, limit: "50mb" })(req, res, next);
  }
});


// Routes
app.use("/api/jobs", jobsRouter)
app.use("/api/blog", blogRouter)
app.use("/api/applications", applicationsRouter)
app.use("/api/contacts", contactsRouter)
app.use("/api/backend/auth",authRouter)

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" })
})

const PORT = process.env.PORT || 3001
// Serve Next.js pages
nextApp.prepare().then(() => {
  app.all(/.*/, (req, res) => {
  return handle(req, res)
})

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
})
})
export default app
