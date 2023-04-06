const { CourseModel } = require("../model/course.model");
const { UserModel } = require("../model/user.model");

const getUsers = async (req, res) => {
  const users = await UserModel.find({});
  res.send(users);
};

const addCourseUsers = async (req, res, next) => {
  try {
    const { username, courseId } = req.query;
    const course = await CourseModel.find({ _id: courseId });
    if (course.length) {
      const foundUserWithTheCourse = await UserModel.find({
        "registeredCourses._id": courseId,
      });
      if (!foundUserWithTheCourse.length) {
        const updatedCourse = await CourseModel.findOneAndUpdate(
          { _id: courseId },
          { $inc: { studentsCount: 1 } }
        );
        if (updatedCourse) {
          await UserModel.findOneAndUpdate(
            { username },
            {
              $push: { registeredCourses: updatedCourse },
            }
          );
        }
      }
      res.end();
    } else {
      throw {
        status: 400,
        message: "دوره ای با این ایدی وجود ندارد",
      };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  addCourseUsers,
};
