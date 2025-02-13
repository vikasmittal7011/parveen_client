import { useSelector } from "react-redux";
import { Header, Hero, Footer } from "../layout/index";
import { selectuser } from "../../features/user/userSlice";
import Loading from "./Loading";

const Layout = ({ children }) => {
  const { status } = useSelector(selectuser);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <div className="flex min-h-screen flex-col">
            <Header />
            {/* <Hero /> */}
            <div className="p-4 flex-1 py-10">{children}</div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
