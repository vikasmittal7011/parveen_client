import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { Course, Home, Login, Register } from "./pages";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataAsync } from "./features/user/userSlice";
import { selectauth } from "./features/auth/authSlice";
import Loading from "./components/common/Loading";
import CourseForm from "./pages/CourseForm";
import { fetchCoursesAsync } from "./features/course/courseSlice";

const App = () => {
  const { registerSuccess, loginSuccess, logoutSuccess } =
    useSelector(selectauth);

  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => {
    dispatch(fetchUserDataAsync());
    // }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, loginSuccess, registerSuccess, logoutSuccess]);

  useEffect(() => {
    dispatch(fetchCoursesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            exact
            path="/login/:token?"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            exact
            path="/add-cource"
            element={
              <Layout>
                <CourseForm />
              </Layout>
            }
          />
          <Route
            exact
            path="/course/:id"
            element={
              <Layout>
                <Course />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
