const { CourseModel } = require("../model/course.model");
const omitEmpty = require("omit-empty");

const getCourses = async (req, res) => {
  const courses = await CourseModel.find({});
  res.send(courses);
};

const getCourseByName = async (req, res, next) => {
  try {
    const courses = await CourseModel.find({});
    const { name } = req.params;
    const course = courses.find(
      (course) => course.name.toLowerCase() == name.toLowerCase()
    );
    if (course) return res.send(course);
    throw {
      status: 400,
      message: "دوره ی مورد نظر شما پیدا نشد!",
    };
  } catch (error) {
    next(error);
  }
};

const newCourse = async (req, res, next) => {
  try {
    const { name, img, description, episodes, episodesCount, studentsCount } =
      req.body;
    const courses = await CourseModel.find({});
    const foundCourse = courses.find(
      (course) => course.name.toLowerCase() == name.toLowerCase()
    );

    if (!foundCourse) {
      const result = await CourseModel.create({
        name,
        img,
        description,
        episodes,
        episodesCount,
        studentsCount,
      });
      res.end();
    } else {
      throw {
        status: 400,
        message: "قبلا دوره ای با همین اسم ثبت شده",
      };
    }
  } catch (error) {
    next(error);
  }
};

const deleteCourseById = async (req, res, next) => {
  try {
    const { id } = req.query;
    const course = await CourseModel.findOneAndDelete({
      _id: id,
    });

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
};

const updateCourseById = async (req, res, next) => {
  try {
    const { id } = req.query;
    const newBody = omitEmpty(req.body);
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      { $set: newBody }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
};

const addNewEpisodeToCourseById = async (req, res, next) => {
  try {
    const { id } = req.query;
    const { video, title } = omitEmpty(req.body);
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: {
          episodes: {
            title,
            video,
          },
        },
        $inc: { episodesCount: 1 },
      }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
};

const deleteEpisodeFromCourseById = async (req, res, next) => {
  try {
    const { id, videoId } = req.query;
    const course = await CourseModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $pull: { "episodes._id": videoId },
        $inc: { episodesCount: -1 },
      }
    );

    if (course) {
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی تابحال ثبت نشده است!",
      };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCourses,
  getCourseByName,
  newCourse,
  deleteCourseById,
  updateCourseById,
  addNewEpisodeToCourseById,
  deleteEpisodeFromCourseById,
};
