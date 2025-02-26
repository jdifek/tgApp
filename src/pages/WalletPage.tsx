import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cookie, Egg, Upload, Download } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function WalletPage() {
  const navigate = useNavigate();
  const [balances] = useState({
    cookies: 149493,
    goldenEggs: 1000,
    eggs: 500,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col pb-20">
      {/* Header */}
      <div className="w-full px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-bold ml-4">Кошелек</h1>
      </div>

      {/* Balances */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="font-bold mb-4">Баланс</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                <span>Печеньки</span>
              </div>
              <span className="font-bold">{balances.cookies}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Egg className="w-5 h-5 text-yellow-500" />
                <span>Золотые яйца</span>
              </div>
              <span className="font-bold">{balances.goldenEggs}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Egg className="w-5 h-5" />
                <span>Яйца</span>
              </div>
              <span className="font-bold">{balances.eggs}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-green-500 text-white p-4 rounded-lg flex flex-col items-center">
            <Upload className="w-6 h-6 mb-2" />
            <span>Депозит</span>
          </button>
          <button className="bg-blue-500 text-white p-4 rounded-lg flex flex-col items-center">
            <Download className="w-6 h-6 mb-2" />
            <span>Вывод</span>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}