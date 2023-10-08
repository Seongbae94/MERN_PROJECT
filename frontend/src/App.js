import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/:userId/places" exact element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="/places/:placeId" element={<UpdatePlace />} exact />
          <Route path="/auth" element={<Auth />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
