import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function MarketPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col items-center justify-center pb-20">
      <div className="absolute top-4 left-4">
        <button onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center px-4">
        <Lock className="w-16 h-16 text-white mx-auto mb-4" />
        <h1 className="text-white text-2xl font-bold mb-2">Рынок закрыт</h1>
        <p className="text-white opacity-80">
          Эта функция будет доступна в ближайшем обновлении
        </p>
      </div>

      <BottomNav />
    </div>
  );
}