import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const Course = lazy(() => import("./Course"));
const ThankYou = lazy(() => import("./ThankYou"));
const CourseList = lazy(() => import("./CourseList"));

export { Home, Register, Login, Course, ThankYou, CourseList };
