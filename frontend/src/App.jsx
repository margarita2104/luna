import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RegistrationValidation from './pages/RegistrationValidation';
import ErrorPage from './pages/ErrorPage';

import ProfileBase from './pages/ProfileBase.jsx';
import RestaurantPage from './pages/RestaurantPage';
import CreateRestaurant from './pages/CreateRestaurant';
import { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import GlobalStyle from '../GlobalStyles';
// import WriteReview from './pages/WriteReview.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/restaurant/:restaurantId"
              element={<RestaurantPage />}
            />

            <Route path="/profile" element={<ProfileBase />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            {/* <Route path="/writeReview" element={<WriteReview />} /> */}
            <Route
              path="/registrationValidation"
              element={<RegistrationValidation />}
            />
            <Route path="/createRestaurant" element={<CreateRestaurant />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
