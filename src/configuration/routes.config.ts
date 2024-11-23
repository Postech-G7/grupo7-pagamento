import { Router } from "express";
import helthCheckRoutes from "../domains/suporte/adapter/driver/rest/routes/health-check.route";

const routes = Router();

routes.use("/api/health-check", helthCheckRoutes);

export default routes;
