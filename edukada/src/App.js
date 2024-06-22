import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Authentication/login';
import Register from './Authentication/register';
import Resetpassword from './Authentication/resetpassword';
import Profile from './Content/profile';
import CourseDetailsScreen from './Content/CourseDetailsScreen';
import Activation from './Authentication/activation';
import ExploreQuiz from './Content/ExploreQuiz';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset" element={<Resetpassword />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Course" element={<CourseDetailsScreen />} />
          <Route path="/activate/:uid/:token" element={<Activation />} />
          <Route path="/quiz" element={<ExploreQuiz />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}
