import React from 'react';
import Sidebaruser from './sidebarUser';
function UserDashboard() {
  return (
      <div   >
        <Sidebaruser />
    <div className="flex justify-center">
      <div className="flex justify-center items-center h-screen ">
      <p className="text-2xl font-bold">Welcome to your Dashboard !</p>
    </div>


    </div>
      </div>
  );
}

export default UserDashboard;
