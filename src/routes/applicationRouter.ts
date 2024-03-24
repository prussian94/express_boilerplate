import express from 'express';
import { healthCheck } from '@controllers/applicationController';
import AuthType from '@enums/auth/AuthType';
import AuthMiddleware from '@helpers/middleware/authMiddleware';
import { routeHelper } from 'src/helpers/routeHelper';

const router = express.Router();
const controllerPrefix = '/application';

router.get(
	`${controllerPrefix}/healthcheck`,
	AuthMiddleware(AuthType.NO_AUTH),
	routeHelper(healthCheck),
);

export default router;
