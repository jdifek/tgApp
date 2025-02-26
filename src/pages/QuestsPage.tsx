import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cookie, ExternalLink } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function QuestsPage() {
  const navigate = useNavigate();
  const [quests] = useState([
    { id: 1, channel: '@chickenfarm', reward: 100, completed: false },
    { id: 2, channel: '@farmNews', reward: 150, completed: false },
    { id: 3, channel: '@eggMarket', reward: 200, completed: true },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col pb-20">
      {/* Header */}
      <div className="w-full px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-bold ml-4">Квесты</h1>
      </div>

      {/* Quests List */}
      <div className="flex-1 px-4 py-4">
        <div className="bg-white rounded-lg overflow-hidden">
          {quests.map((quest, index) => (
            <div
              key={quest.id}
              className={`p-4 flex items-center justify-between ${
                index !== quests.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-bold">{quest.channel}</h3>
                  <div className="text-sm text-gray-600">Подписаться на канал</div>
                </div>
              </div>
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded ${
                  quest.completed
                    ? 'bg-gray-200 text-gray-500'
                    : 'bg-yellow-400'
                }`}
                disabled={quest.completed}
              >
                <Cookie className="w-4 h-4" />
                <span>{quest.reward}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}