import { useSelector } from "react-redux";
import { Header,  Footer } from "../layout/index";
import { selectuser } from "../../features/user/userSlice";
import Loading from "./Loading";

const Layout = ({ children, custome = true }) => {
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
            <div className={`${custome && "p-4 py-10"} flex-1`}>{children}</div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
