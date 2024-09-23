import express from "express";
import {introduccion, formularioDijkstra, aplicaciones} from '../controller/userController.js'

const router = express.Router()

// Routing

router.get('/introduccion', introduccion);
router.get('/algoritmo-dijkstra', formularioDijkstra);
router.get('/aplicaciones', aplicaciones);

export default router