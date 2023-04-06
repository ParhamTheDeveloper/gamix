const { Router } = require("express");
const { CourseModel } = require("../model/course.model");
const {
  getCourses,
  getCourseByName,
  newCourse,
  deleteCourseById,
  updateCourseById,
  addNewEpisodeToCourseById,
  deleteEpisodeFromCourseById,
} = require("../controllers/course.controller");
const router = Router();

router.get("/", getCourses);

router.get("/:name", getCourseByName);

router.post("/new", newCourse);

router.delete("/", deleteCourseById);

router.patch("/", updateCourseById);

router.patch("/new/episode", addNewEpisodeToCourseById);

router.patch("/delete/episode", deleteEpisodeFromCourseById);

module.exports = router;
