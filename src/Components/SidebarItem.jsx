import React from 'react';

const SidebarItem = ({ title, icon }) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-300 cursor-pointer">
      <span className="mr-2">{icon}</span>
      <span className="text-gray-800">{title}</span>
    </div>
  );
};

export default SidebarItem;