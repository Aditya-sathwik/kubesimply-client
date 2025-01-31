// src/components/CustomLayout.js
import React from 'react';
import CustomSidebar from '@site/src/theme/Navbar'; // Ensure this is imported
import './CustomLayout.css'; // Ensure this path is correct


function CustomLayout({ children }) {
  return (
    <div className="flex-container">
      <CustomSidebar />
      <main className="main-content">
        {children}
      </main>
        
    </div>
  );
}

export default CustomLayout;
