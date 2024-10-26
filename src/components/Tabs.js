import React, { useState } from 'react';

const Tabs = ({ tabs, setActiveTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
