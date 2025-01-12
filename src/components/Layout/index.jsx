import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./index.module.css";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
