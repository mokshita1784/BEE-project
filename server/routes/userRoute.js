import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

// Protected Routes
router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/removeBooking/:id",cancelBooking);
router.post("/toFav/:rid",toFav);
router.post("/allFav",getAllFavorites);

// Public Routes
router.post("/allBookings", getAllBookings);

export { router as userRoute };
