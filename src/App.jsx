import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import StoreDetails from "./pages/StoreDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./components/AppLayout.jsx";
import MapPage from "./pages/MapPage.jsx";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // 在JS檔案中引入

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store-details" element={<StoreDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
