import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const Course = lazy(() => import("./Course"));

export { Home, Register, Login, Course };
