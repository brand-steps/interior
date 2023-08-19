import React from 'react';
import Sidebaruser from './sidebarUser';
function UserDashboard() {
  return (
    <div className="flex">
      <Sidebaruser />
      <div className="flex justify-center items-center h-screen w-3/4">
      <p className="text-4xl font-bold">Welcome to your Dashboard !</p>
    </div>


    </div>
  );
}

export default UserDashboard;
