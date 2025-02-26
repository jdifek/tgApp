import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Cookie, Egg } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function FriendsPage() {
  const navigate = useNavigate();
  const [refLink] = useState('https://chickenfarm.app/ref/123456');
  const [cookieProfit] = useState(1500);
  const [eggProfit] = useState(50);

  const copyRefLink = () => {
    navigator.clipboard.writeText(refLink);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col pb-20">
      {/* Header */}
      <div className="w-full px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-bold ml-4">Друзья</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6">
        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="font-bold mb-2">Реферальная ссылка</h2>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={refLink}
              readOnly
              className="flex-1 bg-gray-100 p-2 rounded"
            />
            <button
              onClick={copyRefLink}
              className="bg-yellow-400 p-2 rounded"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h2 className="font-bold mb-4">Прибыль от рефералов</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                <span>Печеньки</span>
              </div>
              <span className="font-bold">{cookieProfit}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Egg className="w-5 h-5" />
                <span>Яйца</span>
              </div>
              <span className="font-bold">{eggProfit}</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}