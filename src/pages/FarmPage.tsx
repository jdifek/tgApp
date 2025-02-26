import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Egg, Lock } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function FarmPage() {
  const navigate = useNavigate();
  const [chickens] = useState([
    { id: 1, name: 'Обычная курица', price: 100, production: 10, image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80' },
    { id: 2, name: 'Супер курица', price: 200, production: 20, locked: true },
    { id: 3, name: 'Мега курица', price: 500, production: 50, locked: true },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col pb-20">
      {/* Header */}
      <div className="w-full px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-bold ml-4">Ферма</h1>
      </div>

      {/* Chickens Grid */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-4">
        {chickens.map((chicken) => (
          <div
            key={chicken.id}
            className={`bg-white rounded-lg p-4 flex flex-col items-center ${
              chicken.locked ? 'opacity-50' : ''
            }`}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              {chicken.locked ? (
                <Lock className="w-8 h-8 text-gray-400" />
              ) : (
                <img
                  src={chicken.image}
                  alt={chicken.name}
                  className="w-20 h-20 object-contain"
                />
              )}
            </div>
            <h3 className="font-bold text-center mb-2">{chicken.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Egg className="w-4 h-4" />
              <span>{chicken.production} в день</span>
            </div>
            <button
              className={`mt-3 w-full py-2 rounded ${
                chicken.locked
                  ? 'bg-gray-200'
                  : 'bg-yellow-400'
              }`}
              disabled={chicken.locked}
            >
              {chicken.locked ? 'Закрыто' : `${chicken.price} 🥚`}
            </button>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}