import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import {
  AboutUs,
  Course,
  CourseList,
  Home,
  Login,
  PageNotFound,
  Register,
  ThankYou,
} from "./pages";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchUserDataAsync } from "./features/user/userSlice";
// import { selectauth } from "./features/auth/authSlice";
import Loading from "./components/common/Loading";
import CourseForm from "./pages/CourseForm";
// import { fetchCoursesAsync } from "./features/course/courseSlice";
import { getCategoriesAsync } from "./features/category/categorySlice";

const App = () => {
  // const { registerSuccess, loginSuccess, logoutSuccess } =
  //   useSelector(selectauth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // setTimeout(() => {
  //   dispatch(fetchUserDataAsync());
  //   // }, 1000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, loginSuccess, registerSuccess, logoutSuccess]);

  useEffect(() => {
    // dispatch(fetchCoursesAsync());
    dispatch(getCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout custome={false}>
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
            path="/our-courses/:category"
            element={
              <Layout>
                <CourseList />
              </Layout>
            }
          />
          <Route
            exact
            path="/our-course/:category/:title"
            element={
              <Layout>
                <Course />
              </Layout>
            }
          />
          <Route
            exact
            path="/about-us"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route exact path="/enrollment-success" element={<ThankYou />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
