// eslint-disable-next-line @typescript-eslint/no-unused-vars
import 'antd/dist/reset.css';
import Header from '../components/Header/index'
import HomePage from './HomePage/index'
import { Route, Routes, Link } from "react-router-dom";

export function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
