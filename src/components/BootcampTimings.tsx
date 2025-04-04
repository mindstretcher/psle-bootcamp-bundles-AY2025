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

  const SubjectIcon = ({ initial, color, name }) => (
    <div className="flex items-center">
      <span
        className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
        style={{ backgroundColor: color }}
      >
        {initial}
      </span>
      <span className="ml-3 font-medium">{name}</span>
    </div>
  );

  const TabButton = ({ id, label }) => (
    <button
      id={`${id}-tab`}
      className={`tab-button px-6 py-3 text-sm font-medium transition ${
        activeTab === id
          ? 'border-b-2 border-blue-500 text-blue-600 active'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  const ModeButton = ({ mode, label }) => (
    <button
       className={`mode-button px-4 py-1.5 rounded-md text-sm font-medium transition ${
           activeMode === mode
           ? 'bg-white shadow text-blue-600 active'
           : 'text-gray-500'
       }`}
       onClick={() => setActiveMode(mode)}
     >
       {label}
     </button>
 );

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Bootcamp Dates & Timings</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            View the bootcamps' schedules and details.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-container mb-8 overflow-x-auto">
          <div className="flex justify-center border-b border-gray-200 min-w-max">
            <TabButton id="power-up" label="Power Up" />
            <TabButton id="last-lap" label="Last Lap" />
            <TabButton id="english-oral" label="English Oral" />
            <TabButton id="chinese-oral" label="Chinese Oral" />
            <TabButton id="qa-consults" label="Q&A Consults" />
          </div>
        </div>

        {/* --- Content Sections --- */}

        {/* Power Up Section */}
        {activeTab === 'power-up' && (
          <div id="power-up-section" className="bootcamp-content">
            {/* Core Subject Workshop Section */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-semibold mr-4">Power Up Workshops</h2>
                {/* Mode Toggle */}
                <div className="bg-gray-100 rounded-lg p-1 flex items-center">
                  <ModeButton mode="online" label="Online" />
                  <ModeButton mode="physical" label="Physical" />
                </div>
              </div>

              {/* Physical mode notice */}
              {activeMode === 'physical' && (
                  <div id="physical-notice" className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                      <p><span className="font-medium">Note:</span> You may attend each subject at either Tampines Junction or Toa Payoh HDB Hub (e.g., English at Tampines, Maths at Toa Payoh). For an additional $50 per subject, you can also join the online sessions (same bootcamp materials) — ideal for reinforcing learning.</p>
                  </div>
              )}

              <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="table-container overflow-x-auto">
                  <table className="w-full min-w-[600px]"> {/* Added min-width for smaller screens */}
                    <thead>
                      <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                        <th className="px-6 py-4 font-medium col-subject">Subject</th>
                        <th className={`px-6 py-4 font-medium col-timing ${activeMode === 'online' ? '' : 'hidden'}`}>Timing</th>
                        <th className={`px-6 py-4 font-medium col-timing ${activeMode === 'physical' ? '' : 'hidden'}`}>Timing</th>
                        <th className={`px-6 py-4 font-medium col-date ${activeMode === 'online' ? '' : 'hidden'}`}>Date</th>
                        <th className={`px-6 py-4 font-medium col-location ${activeMode === 'physical' ? '' : 'hidden'}`}>Tampines Junction</th>
                        <th className={`px-6 py-4 font-medium col-location ${activeMode === 'physical' ? '' : 'hidden'}`}>Toa Payoh HDB Hub</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* English */}
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="E" color="#3b82f6" name="English" />
                        </td>
                        <td className={`px-6 py-4 text-sm text-gray-600 ${activeMode === 'online' ? '' : 'hidden'}`} rowSpan={4}>8:30am - 4:30pm</td>
                        <td className={`px-6 py-4 text-sm text-gray-600 ${activeMode === 'physical' ? '' : 'hidden'}`} rowSpan={4}>8:30am - 4:30pm</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'online' ? '' : 'hidden'}`}>4-Jun (Wed)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>11-Jun (Wed)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>17-Jun (Tue)</td>
                      </tr>
                      {/* Maths */}
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="M" color="#ec4899" name="Maths" />
                        </td>
                        {/* Timing cells covered by rowspan */}
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'online' ? '' : 'hidden'}`}>5-Jun (Thu)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>12-Jun (Thu)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>16-Jun (Mon)</td>
                      </tr>
                      {/* Science */}
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="S" color="#10b981" name="Science" />
                        </td>
                        {/* Timing cells covered by rowspan */}
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'online' ? '' : 'hidden'}`}>3-Jun (Tue)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>10-Jun (Tue)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>18-Jun (Wed)</td>
                      </tr>
                      {/* Chinese */}
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="C" color="#f59e0b" name="Chinese" />
                        </td>
                        {/* Timing cells covered by rowspan */}
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'online' ? '' : 'hidden'}`}>2-Jun (Mon)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>9-Jun (Mon)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>19-Jun (Thu)</td>
                      </tr>
                      {/* Higher Chinese */}
                      <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="HC" color="#8b5cf6" name="Higher Chinese" />
                        </td>
                        <td className={`px-6 py-4 text-sm text-gray-600 ${activeMode === 'online' ? '' : 'hidden'}`}>8:30am - 12pm</td>
                        <td className={`px-6 py-4 text-sm text-gray-600 ${activeMode === 'physical' ? '' : 'hidden'}`}>8:30am - 12pm</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'online' ? '' : 'hidden'}`}>6-Jun (Fri)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>13-Jun (Fri)</td>
                        <td className={`px-6 py-4 text-sm text-blue-600 font-medium ${activeMode === 'physical' ? '' : 'hidden'}`}>20-Jun (Fri)</td>
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
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4 font-medium">Science, Maths</td>
                          <td className="px-6 py-4 text-sm text-gray-600">10:00am - 12:45pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">21-Jun (Sat)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 font-medium">English, Chinese</td>
                          <td className="px-6 py-4 text-sm text-gray-600">2:30pm - 5:15pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">21-Jun (Sat)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>

            {/* Motivational Segment Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">Motivational Segment</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 font-medium">Reach for the Skies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">2:00pm - 4:00pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">22-Jun (Sun)</td>
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
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Subject</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">
                              <SubjectIcon initial="E" color="#3b82f6" name="English" />
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600" rowSpan={3}>7:30pm - 9:00pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">12, 19-Jul (Sat)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">
                            <SubjectIcon initial="M" color="#ec4899" name="Maths" />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">10, 17-Jul (Thu)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">
                              <SubjectIcon initial="S" color="#10b981" name="Science" />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">8, 15-Jul (Tue)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>
          </div>
        )}

        {/* Last Lap Section */}
        {activeTab === 'last-lap' && (
          <div id="last-lap-section" className="bootcamp-content">
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Last Lap Workshops</h2>
              <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="table-container overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                        <th className="px-6 py-4 font-medium col-subject">Subject</th>
                        <th className="px-6 py-4 font-medium col-timing">Timing</th>
                        <th className="px-6 py-4 font-medium col-date">Only Run</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="E" color="#3b82f6" name="English" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600" rowSpan={4}>8:30am - 4:30pm</td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">10-Sep (Wed)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="M" color="#ec4899" name="Maths" />
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">11-Sep (Thu)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="S" color="#10b981" name="Science" />
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">9-Sep (Tue)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="C" color="#f59e0b" name="Chinese" />
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">8-Sep (Mon)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <SubjectIcon initial="HC" color="#8b5cf6" name="Higher Chinese" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">8:30am - 12pm</td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">12-Sep (Fri)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* English Oral Section */}
        {activeTab === 'english-oral' && (
          <div id="english-oral-section" className="bootcamp-content">
            {/* Introduction Webinar Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">Introduction Webinar</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">Helping Your Child Ace PSLE English Oral Exam</td>
                          <td className="px-6 py-4 text-sm text-gray-600">7:30pm - 9pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">23-May (Fri)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>

              {/* PSLE English Oral Pack Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">PSLE English Oral Pack</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">PSLE English Oral Workshop</td>
                          <td className="px-6 py-4 text-sm text-gray-600">9am - 4pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">8 OR 15-Jun (Sun)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">1-to-1 English Oral Mock Tests (2x)</td>
                          <td className="px-6 py-4 text-sm text-gray-600">1 hour</td>
                          <td className="px-6 py-4 text-sm text-gray-600">To be scheduled in early June based on parent and teacher availability</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">Live demonstration, mass consultations and additional teachings</td>
                          <td className="px-6 py-4 text-sm text-gray-600">7pm - 9:30pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">6, 13, 20, 27-Jul (Sun)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>

              {/* PSLE English Oral SBC Workshops Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">PSLE SBC Workshops</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">PSLE SBC Workshops</td>
                          <td className="px-6 py-4 text-sm text-gray-600">7:30pm - 9:30pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">18, 25-Jul, 1-Aug (Fri)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>
          </div>
        )}

        {/* Chinese Oral Section */}
        {activeTab === 'chinese-oral' && (
          <div id="chinese-oral-section" className="bootcamp-content">
            {/* Introduction Webinar Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">Introduction Webinar</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">Helping Your Child Ace PSLE Chinese Oral Exam</td>
                          <td className="px-6 py-4 text-sm text-gray-600">2pm - 3:30pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">24-May (Sat)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>

              {/* PSLE Chinese Oral Pack Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">PSLE Chinese Oral Pack</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">PSLE Chinese Oral Workshop</td>
                          <td className="px-6 py-4 text-sm text-gray-600">9am - 4pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">14-Jun (Sat)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">1-to-1 Chinese Oral Mock Tests (2x)</td>
                          <td className="px-6 py-4 text-sm text-gray-600">1 hour</td>
                          <td className="px-6 py-4 text-sm text-gray-600">To be scheduled in early June based on parent and teacher availability</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>

              {/* PSLE Chinese Oral Final Sprint Section */}
              <div className="mb-12">
                  <h2 className="text-xl font-semibold mb-6">PSLE Final Sprint Workshop</h2>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Session</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">PSLE Final Sprint Workshop</td>
                          <td className="px-6 py-4 text-sm text-gray-600">7pm - 10pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">2-Aug (Sat)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>
          </div>
        )}

        {/* Q&A Consults Section */}
        {activeTab === 'qa-consults' && (
          <div id="qa-consults-section" className="bootcamp-content">
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Q&A Consultations</h2>
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                  <p><span className="font-medium">Note:</span> Q&A Consultations are only available as part of any Bootcamp Bundles.</p>
                  </div>
                  <div className="section-card bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="table-container overflow-x-auto">
                      <table className="w-full min-w-[400px]">
                      <thead>
                          <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                          <th className="px-6 py-4 font-medium col-subject">Subject</th>
                          <th className="px-6 py-4 font-medium col-timing">Timing</th>
                          <th className="px-6 py-4 font-medium col-date">Date</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">
                              <SubjectIcon initial="E" color="#3b82f6" name="English" />
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600" rowSpan={4}>7pm - 9:30pm</td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">20 Sep (Fri)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">
                              <SubjectIcon initial="M" color="#ec4899" name="Mathematics" />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">18 Sep (Thu)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 border-b border-gray-50 transition">
                          <td className="px-6 py-4">
                              <SubjectIcon initial="S" color="#10b981" name="Science" />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">15 Sep (Mon)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4">
                            <SubjectIcon initial="C" color="#f59e0b" name="Chinese" />
                          </td>
                          <td className="px-6 py-4 text-sm text-blue-600 font-medium">17 Sep (Wed)</td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
                  </div>
              </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BootcampTimings;
