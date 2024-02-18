// import logo from './logo.svg';
import "./css/bootstrap.css";
import "./css/style.css";
import Header from "./component/Header";
import Youtube from "./component/pages/youtube/Youtube";
// import Youtube from './component/main/Youtube';
import Footer from "./component/Footer";
import Main from "./component/Main";
import Mac from "./component/pages/mac/Mac";
import Ipad from "./component/pages/ipad/Ipad";
import Iphone from "./component/pages/iphone/Iphone";
import Watch from "./component/pages/watch/Watch";
import Product from "./component/pages/product/Product";
import { Route, Routes } from "react-router-dom";
import Four404 from "./component/four404/Four404";
import Sharedlayout from "./component/Sharedlayout";

function App() {
  return (
    <Routes>
      {/* nested page create */}
      <Route path="/" element={<Sharedlayout />}>
        <Route path="/" element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:productID" element={<Product />} />
        <Route path="watch" element={<Watch />} />
        <Route path="*" element={<Four404 />} />
      </Route>
    </Routes>
  );
}

export default App;
