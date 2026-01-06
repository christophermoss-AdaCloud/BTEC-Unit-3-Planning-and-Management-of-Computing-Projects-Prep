import React, { useState } from 'react';
import { User, Users, Briefcase, Network, Database, ChevronRight, AlertTriangle, CheckCircle, Lock, HelpCircle, ArrowRight } from 'lucide-react';

const VisualAids = () => {
  const [activeTab, setActiveTab] = useState('hierarchy');

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen font-sans text-slate-800">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">BTEC Unit 3: Visual Revision Aids</h1>
        <p className="text-slate-600">Interactive tools for the Battleford Surgery Scenario</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('hierarchy')}
          className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
            activeTab === 'hierarchy' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-blue-50'
          }`}
        >
          <Users size={18} />
          Project Team Structure
        </button>
        <button
          onClick={() => setActiveTab('cycle')}
          className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
            activeTab === 'cycle' ? 'bg-purple-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-purple-50'
          }`}
        >
          <CheckCircle size={18} />
          The Distinction Cycle
        </button>
        <button
          onClick={() => setActiveTab('traffic')}
          className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors ${
            activeTab === 'traffic' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-emerald-50'
          }`}
        >
          <Lock size={18} />
          Traffic Light Definitions
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        
        {/* TAB 1: HIERARCHY */}
        {activeTab === 'hierarchy' && (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Who is in the Project?</h2>
            <div className="text-sm text-slate-500 mb-8 italic">Use this chart for your "Resources" list and "Stakeholders" table.</div>

            {/* Level 1: The Client */}
            <div className="flex flex-col items-center mb-8 relative">
              <div className="w-64 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg text-center shadow-sm z-10">
                <div className="font-bold text-yellow-900 text-lg">Dr. Tate</div>
                <div className="text-sm text-yellow-700">Senior Partner (The Client)</div>
                <div className="text-xs mt-1 bg-yellow-200 inline-block px-2 py-1 rounded">Approves Budget & Scope</div>
              </div>
              <div className="h-8 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 2: The Boss */}
            <div className="flex flex-col items-center mb-8 relative">
              <div className="w-64 p-4 bg-orange-100 border-2 border-orange-400 rounded-lg text-center shadow-sm z-10">
                <div className="font-bold text-orange-900 text-lg">Bob Jackson</div>
                <div className="text-sm text-orange-700">Office Manager (Sponsor)</div>
                <div className="text-xs mt-1 bg-orange-200 inline-block px-2 py-1 rounded">Employed You</div>
              </div>
              <div className="h-8 w-0.5 bg-slate-300"></div>
            </div>

            {/* Level 3: YOU */}
            <div className="flex flex-col items-center mb-12 relative">
              <div className="w-64 p-4 bg-blue-600 text-white border-2 border-blue-800 rounded-lg text-center shadow-lg z-10 transform scale-110">
                <div className="font-bold text-xl">YOU</div>
                <div className="text-blue-100">Project Manager</div>
                <div className="text-xs mt-1 bg-blue-500 inline-block px-2 py-1 rounded">Responsible for Everything</div>
              </div>
              {/* Connector Lines to sub-teams */}
              <div className="absolute top-full left-1/2 w-full h-8 border-l-2 border-t-2 border-r-2 border-slate-300 rounded-t-xl -translate-x-1/2"></div>
            </div>

            {/* Level 4: The Teams */}
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
              
              {/* Team A */}
              <div className="flex-1 max-w-sm bg-indigo-50 p-4 rounded-xl border border-indigo-200">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-indigo-200">
                  <Briefcase className="text-indigo-600" />
                  <h3 className="font-bold text-indigo-900">Smarter Designs Ltd</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">A</div>
                    <div>
                      <div className="font-semibold text-slate-800">Aisha Azam</div>
                      <div className="text-xs text-slate-500">Senior Software Engineer (£35/hr)</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">J</div>
                    <div>
                      <div className="font-semibold text-slate-800">Joseph Powell</div>
                      <div className="text-xs text-slate-500">Junior Software Engineer (£20/hr)</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">S</div>
                    <div>
                      <div className="font-semibold text-slate-800">Suzanne Jenson</div>
                      <div className="text-xs text-slate-500">SQL Developer (£25/hr)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Team B */}
              <div className="flex-1 max-w-sm bg-teal-50 p-4 rounded-xl border border-teal-200">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-teal-200">
                  <Network className="text-teal-600" />
                  <h3 className="font-bold text-teal-900">Elves Network Solutions</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">T</div>
                    <div>
                      <div className="font-semibold text-slate-800">Tommy Elves</div>
                      <div className="text-xs text-slate-500">Senior Network Engineer (£35/hr)</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-2 rounded shadow-sm">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">L</div>
                    <div>
                      <div className="font-semibold text-slate-800">Lewis Jameson</div>
                      <div className="text-xs text-slate-500">Junior Network Engineer (£18/hr)</div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: DISTINCTION CYCLE */}
        {activeTab === 'cycle' && (
          <div className="flex flex-col items-center">
             <h2 className="text-2xl font-bold mb-2 text-purple-800">The "So What?" Cycle</h2>
             <p className="text-slate-600 mb-8 text-center max-w-2xl">To get a Distinction, you must move from describing what happened to explaining <span className="font-bold">future impact</span>.</p>

             <div className="flex flex-col md:flex-row gap-4 items-stretch w-full">
               
               {/* Step 1 */}
               <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-6 relative group hover:border-purple-300 transition-colors">
                 <div className="absolute -top-4 left-6 bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-bold text-sm">Step 1: The Event</div>
                 <h3 className="font-bold text-lg mb-2 text-slate-800">What happened?</h3>
                 <p className="text-sm text-slate-500 mb-4">(Pass/Merit Level)</p>
                 <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700 border-l-4 border-slate-400 italic">
                   "We had software bugs because the staff rushed the work."
                 </div>
               </div>

               <div className="hidden md:flex items-center justify-center text-slate-300">
                 <ArrowRight size={32} />
               </div>

               {/* Step 2 */}
               <div className="flex-1 bg-white border-2 border-purple-200 rounded-xl p-6 relative group hover:border-purple-400 transition-colors">
                <div className="absolute -top-4 left-6 bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold text-sm">Step 2: The Impact</div>
                 <h3 className="font-bold text-lg mb-2 text-purple-900">Use Data</h3>
                 <p className="text-sm text-purple-600 mb-4">(Specific Detail)</p>
                 <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-800 border-l-4 border-purple-400 italic">
                   "This caused a 3-day delay and cost £800 in extra testing time."
                 </div>
               </div>

               <div className="hidden md:flex items-center justify-center text-slate-300">
                 <ArrowRight size={32} />
               </div>

               {/* Step 3 */}
               <div className="flex-1 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl p-6 relative shadow-lg transform hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-6 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold text-sm shadow-sm">Step 3: The Distinction</div>
                 <h3 className="font-bold text-lg mb-2">So What?</h3>
                 <p className="text-sm text-purple-100 mb-4">(Future Lesson)</p>
                 <div className="bg-white/10 p-3 rounded-lg text-sm text-white border-l-4 border-yellow-400 italic">
                   "In future projects, I would extend the testing phase by 20% to prevent rushing, ensuring quality is met without extra costs."
                 </div>
               </div>

             </div>

             <div className="mt-10 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm flex items-start gap-3 max-w-2xl">
                <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                <p><strong>Examiner Tip:</strong> Never stop at Step 1. Always ask yourself "So what?" until you reach Step 3.</p>
             </div>
          </div>
        )}

        {/* TAB 3: TRAFFIC LIGHTS */}
        {activeTab === 'traffic' && (
          <div className="flex flex-col items-center">
             <h2 className="text-2xl font-bold mb-2 text-emerald-800">Traffic Light Terminology</h2>
             <p className="text-slate-600 mb-8">Don't mix these up! Use the colors to remember the definitions.</p>

             <div className="grid md:grid-cols-3 gap-6 w-full">
               
               {/* Red Light */}
               <div className="border-t-8 border-red-500 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                   <Lock className="text-red-600" size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">CONSTRAINT</h3>
                 <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4">STOP! CANNOT CHANGE</span>
                 <p className="text-sm text-slate-600">
                   A limitation set by the client that you must work within. You have no choice.
                 </p>
                 <div className="mt-4 text-xs font-mono bg-slate-100 p-2 rounded w-full">
                   Example: "Budget is £45,000"
                 </div>
               </div>

               {/* Amber Light */}
               <div className="border-t-8 border-amber-500 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                   <AlertTriangle className="text-amber-600" size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">RISK</h3>
                 <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold mb-4">WARNING! MIGHT HAPPEN</span>
                 <p className="text-sm text-slate-600">
                   Something bad that <em>might</em> happen in the future. You need a "Plan B".
                 </p>
                 <div className="mt-4 text-xs font-mono bg-slate-100 p-2 rounded w-full">
                   Example: "Staff might be sick"
                 </div>
               </div>

               {/* Green Light */}
               <div className="border-t-8 border-emerald-500 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                 <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                   <HelpCircle className="text-emerald-600" size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">ASSUMPTION</h3>
                 <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">GO! (BUT CHECK)</span>
                 <p className="text-sm text-slate-600">
                   Something you believe is true so you can start planning, but it isn't 100% guaranteed yet.
                 </p>
                 <div className="mt-4 text-xs font-mono bg-slate-100 p-2 rounded w-full">
                   Example: "Staff work 5 days/week"
                 </div>
               </div>

             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default VisualAids;
