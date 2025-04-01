import React, { useState, useEffect } from 'react';
import './BootcampTimings.css';

const BootcampTimings: React.FC = () => {
  // State for active tab and mode
  const [activeTab, setActiveTab] = useState('power-up');
  const [activeMode, setActiveMode] = useState('online');

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Handle mode toggle
  const handleModeToggle = (mode: string) => {
    setActiveMode(mode);
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Bootcamp Dates & Timings</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            View the bootcamps' schedules and details.
          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="tabs-container mb-8 overflow-x-auto">
          <div className="flex justify-center border-b border-gray-200 min-w-max">
            <button 
              onClick={() => handleTabClick('power-up')}
              className={`tab-button px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'power-up' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Power Up
            </button>
            <button 
              onClick={() => handleTabClick('last-lap')}
              className={`tab-button px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'last-lap' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Last Lap
            </button>
            <button 
              onClick={() => handleTabClick('english-oral')}
              className={`tab-button px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'english-oral' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              English Oral
            </button>
            <button 
              onClick={() => handleTabClick('chinese-oral')}
              className={`tab-button px-6 py-3 text-sm font-medium border-b-2 ${activeTab === 'chinese-oral' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Chinese Oral
            </button>
          </div>
        </div>
        
        {/* Power Up Section */}
        <div className={`bootcamp-content ${activeTab === 'power-up' ? 'block' : 'hidden'}`}>
          {/* Core Subject Workshop Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-semibold mr-4">Power Up Workshops</h2>
              {/* Mode Toggle */}
              <div className="bg-gray-100 rounded-lg p-1 flex items-center">
                <button 
                  onClick={() => handleModeToggle('online')}
                  className={`mode-button px-4 py-1.5 rounded-md text-sm font-medium transition ${activeMode === 'online' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
                >
                  Online
                </button>
                <button 
                  onClick={() => handleModeToggle('physical')}
                  className={`mode-button px-4 py-1.5 rounded-md text-sm font-medium transition ${activeMode === 'physical' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
                >
                  Physical
                </button>
              </div>
            </div>
            
            {/* Physical mode notice */}
            {activeMode === 'physical' && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                <p><span className="font-medium">Note:</span> You may choose either Tampines Junction or Toa Payoh HDB Hub for each subject. For example, you can attend English at Tampines and Maths at Toa Payoh. For an additional $50 per subject, you can also attend the online sessions for subjects you've selected physically.</p>
              </div>
            )}
            
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium col-subject">Subject</th>
                      <th className="px-6 py-4 font-medium col-timing">Timing</th>
                      {activeMode === 'online' ? (
                        <th className="px-6 py-4 font-medium col-date">Date</th>
                      ) : (
                        <>
                          <th className="px-6 py-4 font-medium col-location">Tampines Junction</th>
                          <th className="px-6 py-4 font-medium col-location">Toa Payoh HDB Hub</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#3b82f6' }}>E</span>
                          <div className="ml-3">
                            <div className="font-medium">English</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      {activeMode === 'online' ? (
                        <td className="px-6 py-4 text-sm">June 3, 2025</td>
                      ) : (
                        <>
                          <td className="px-6 py-4 text-sm">June 4, 2025</td>
                          <td className="px-6 py-4 text-sm">June 5, 2025</td>
                        </>
                      )}
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#ef4444' }}>M</span>
                          <div className="ml-3">
                            <div className="font-medium">Mathematics</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      {activeMode === 'online' ? (
                        <td className="px-6 py-4 text-sm">June 10, 2025</td>
                      ) : (
                        <>
                          <td className="px-6 py-4 text-sm">June 11, 2025</td>
                          <td className="px-6 py-4 text-sm">June 12, 2025</td>
                        </>
                      )}
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#10b981' }}>S</span>
                          <div className="ml-3">
                            <div className="font-medium">Science</div>
                            <div className="text-xs text-gray-500">MCQ & Open-ended</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      {activeMode === 'online' ? (
                        <td className="px-6 py-4 text-sm">June 17, 2025</td>
                      ) : (
                        <>
                          <td className="px-6 py-4 text-sm">June 18, 2025</td>
                          <td className="px-6 py-4 text-sm">June 19, 2025</td>
                        </>
                      )}
                    </tr>
                    <tr className="hover-row transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#8b5cf6' }}>HC</span>
                          <div className="ml-3">
                            <div className="font-medium">Higher Chinese</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">2:00 PM - 5:00 PM</td>
                      {activeMode === 'online' ? (
                        <td className="px-6 py-4 text-sm">June 24, 2025</td>
                      ) : (
                        <>
                          <td className="px-6 py-4 text-sm">June 25, 2025</td>
                          <td className="px-6 py-4 text-sm">June 26, 2025</td>
                        </>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Parent Debriefing Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Parent Debriefing</h2>
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Subject</th>
                      <th className="px-6 py-4 font-medium">Timing</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#3b82f6' }}>E</span>
                          <div className="ml-3">
                            <div className="font-medium">English</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">June 3, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#ef4444' }}>M</span>
                          <div className="ml-3">
                            <div className="font-medium">Mathematics</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">June 10, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#10b981' }}>S</span>
                          <div className="ml-3">
                            <div className="font-medium">Science</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">June 17, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#8b5cf6' }}>HC</span>
                          <div className="ml-3">
                            <div className="font-medium">Higher Chinese</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">June 24, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Practice Papers Live Q&A Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Practice Papers Live Q&A</h2>
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Subject</th>
                      <th className="px-6 py-4 font-medium">Timing</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#3b82f6' }}>E</span>
                          <div className="ml-3">
                            <div className="font-medium">English</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">July 8, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#ef4444' }}>M</span>
                          <div className="ml-3">
                            <div className="font-medium">Mathematics</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">July 15, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#10b981' }}>S</span>
                          <div className="ml-3">
                            <div className="font-medium">Science</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">July 22, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#8b5cf6' }}>HC</span>
                          <div className="ml-3">
                            <div className="font-medium">Higher Chinese</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">July 29, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Last Lap Section */}
        <div className={`bootcamp-content ${activeTab === 'last-lap' ? 'block' : 'hidden'}`}>
          {/* Last Lap content will be added here */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Last Lap Workshops</h2>
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Subject</th>
                      <th className="px-6 py-4 font-medium">Timing</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#3b82f6' }}>E</span>
                          <div className="ml-3">
                            <div className="font-medium">English</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 text-sm">August 5, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#ef4444' }}>M</span>
                          <div className="ml-3">
                            <div className="font-medium">Mathematics</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 text-sm">August 12, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#10b981' }}>S</span>
                          <div className="ml-3">
                            <div className="font-medium">Science</div>
                            <div className="text-xs text-gray-500">MCQ & Open-ended</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">9:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 text-sm">August 19, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                    <tr className="hover-row transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
                            style={{ backgroundColor: '#8b5cf6' }}>HC</span>
                          <div className="ml-3">
                            <div className="font-medium">Higher Chinese</div>
                            <div className="text-xs text-gray-500">Paper 1 & 2</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">2:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 text-sm">August 26, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* English Oral Section */}
        <div className={`bootcamp-content ${activeTab === 'english-oral' ? 'block' : 'hidden'}`}>
          {/* English Oral content will be added here */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Introduction Webinar</h2>
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Session</th>
                      <th className="px-6 py-4 font-medium">Timing</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div>
                            <div className="font-medium">English Oral Introduction</div>
                            <div className="text-xs text-gray-500">For students & parents</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">May 6, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chinese Oral Section */}
        <div className={`bootcamp-content ${activeTab === 'chinese-oral' ? 'block' : 'hidden'}`}>
          {/* Chinese Oral content will be added here */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Introduction Webinar</h2>
            <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="table-container">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="px-6 py-4 font-medium">Session</th>
                      <th className="px-6 py-4 font-medium">Timing</th>
                      <th className="px-6 py-4 font-medium">Date</th>
                      <th className="px-6 py-4 font-medium">Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover-row border-b border-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div>
                            <div className="font-medium">Chinese Oral Introduction</div>
                            <div className="text-xs text-gray-500">For students & parents</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">7:30 PM - 9:00 PM</td>
                      <td className="px-6 py-4 text-sm">May 13, 2025</td>
                      <td className="px-6 py-4 text-sm">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampTimings;
