import { Route, Routes } from 'react-router-dom';
import { Footer } from '@/pages/public/components/Footer';
import SignIn from '@/pages/public/SignIn';
import SignUp from '@/pages/public/SignUp';
import CitySingle from '@/pages/public/CitySingle';
import AddEvent from '@/pages/public/AddEvent';
import ShareEvent from '@/pages/public/ShareEvent';
import Banned from '@/pages/public/Banned';
import Profile from '@/pages/public/Profile';
import Home from '@/pages/public/Home';
import EventList from '@/pages/public/EventList';
import EventSingle from '@/pages/public/EventSingle';
import PrivateOutlet from '@/components/PrivetOutlet/PrivetOutlet';

import './App.css';

const App = () => {
  return (
    <div className="bg-[#F2EBD9] min-h-[100vh] relative pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/city/:cityId" element={<CitySingle />} />
        <Route path="/share-event" element={<ShareEvent />} />
        <Route path="/banned" element={<Banned />} />
        <Route path="/city/:cityId/events" element={<EventList />} />
        <Route path="/city/:cityId/events/:id" element={<EventSingle />} />
        <Route path="*" element={<Home />} />
        <Route path="/private" element={<PrivateOutlet />}>
          <Route path="/private/profile" element={<Profile />} />
          <Route path="/private/add-event" element={<AddEvent />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
