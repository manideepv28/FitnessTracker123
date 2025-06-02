import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a static fitness website, we don't need complex backend routes
  // The frontend will use static data for workouts and nutrition plans
  
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "FitTrack API is running" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
