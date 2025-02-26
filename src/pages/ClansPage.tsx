import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Plus, Trophy, Egg } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function ClansPage() {
  const navigate = useNavigate();
  const [clans] = useState([
    { id: 1, name: 'Egg Masters', eggs: 150000, members: 10 },
    { id: 2, name: 'Chicken Squad', eggs: 120000, members: 8 },
    { id: 3, name: 'Farm Kings', eggs: 100000, members: 12 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col pb-20">
      {/* Header */}
      <div className="w-full px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-bold ml-4">Кланы</h1>
      </div>

      {/* Search and Create */}
      <div className="px-4 py-2 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Поиск клана"
            className="w-full pl-10 pr-4 py-2 rounded-lg"
          />
        </div>
        <button className="bg-yellow-400 p-2 rounded-lg">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Clans List */}
      <div className="flex-1 px-4 py-4">
        <div className="bg-white rounded-lg overflow-hidden">
          {clans.map((clan, index) => (
            <div
              key={clan.id}
              className={`p-4 flex items-center justify-between ${
                index !== clans.length - 1 ? 'border-b' : ''
              }`}
            >
              <div>
                <h3 className="font-bold">{clan.name}</h3>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>{clan.members} участников</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Egg className="w-4 h-4" />
                <span className="font-bold">{clan.eggs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}