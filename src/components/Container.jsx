import Footer from "./Footes";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
