import React, { useState } from 'react';
import TopBar from './TopBar'; // Adjust the import path as needed
import Auth from '../studentAuth/Auth';
import signIn from '../studentAuth/signIn'; // to be removed
//import LoginPage from '../../hostelOwnerDashoard/hostelOwnerAuth/LoginPage';
import ChoiceModal from './choiceModal.jsx';
import SignIn from './Sign-in';

export default function UserProfileDesktopHomePage() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSelect = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <TopBar />
      <ChoiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSelect={handleSelect} />
      <div className="flex flex-col w-full mt-[9vh]">
        {selectedProfile === 'student' && (
          <div className="w-full p-4">
            <Auth />
          </div>
        )}
        {selectedProfile === 'hostelOwner' && (
          <div className="w-full p-4">
            < SignIn/>
          </div>
        )}
      </div>
    </div>
  );
}
