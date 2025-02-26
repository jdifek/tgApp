import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookie, Users, Users2, ShoppingBag, Egg } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function MainPage() {
  const navigate = useNavigate();
  const [cookies] = useState(149493);
  const [level] = useState(1);
  const [eggsPerDay] = useState(1454);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 flex flex-col items-center pb-20">
      {/* Top Navigation */}
      <nav className="w-full px-4 py-2 flex justify-between">
        <button 
          className="bg-yellow-300 p-2 rounded-lg flex flex-col items-center"
          onClick={() => navigate('/friends')}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Друзья</span>
        </button>
        
        <div className="flex items-center gap-2">
          <Cookie className="w-6 h-6" />
          <span className="text-white font-bold">{cookies}</span>
        </div>
        
        <button 
          className="bg-yellow-300 p-2 rounded-lg flex flex-col items-center"
          onClick={() => navigate('/quests')}
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs">Квесты</span>
        </button>
      </nav>

      {/* Second Row Navigation */}
      <div className="w-full px-4 py-2 flex justify-between">
        <button 
          className="bg-yellow-300 p-2 rounded-lg flex flex-col items-center"
          onClick={() => navigate('/clans')}
        >
          <Users2 className="w-6 h-6" />
          <span className="text-xs">Кланы</span>
        </button>
        
        <button 
          className="bg-yellow-300 p-2 rounded-lg flex flex-col items-center opacity-50"
          onClick={() => navigate('/market')}
          disabled
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs">Рынок</span>
        </button>
      </div>

      {/* Main Chicken */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center relative">
          <div className="absolute w-full h-full">
            {/* Egg shell bottom half */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gray-100 rounded-b-full"></div>
            {/* Egg shell cracks */}
            <div className="absolute bottom-1/2 w-full flex justify-center">
              <div className="w-20 h-4 bg-gray-100 transform -rotate-45 translate-x-2"></div>
              <div className="w-20 h-4 bg-gray-100 transform rotate-45 -translate-x-2"></div>
            </div>
          </div>
          {/* 2D Chicken */}
          <div className="relative z-10 w-32 h-32">
            <div className="w-full h-full bg-yellow-300 rounded-full flex flex-col items-center justify-center">
              {/* Eyes */}
              <div className="flex gap-4 mb-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              {/* Beak */}
              <div className="w-4 h-4 bg-orange-500 rotate-45"></div>
            </div>
          </div>
        </div>
        
        {/* Level Info */}
        <div className="mt-4 bg-brown-800 rounded-lg p-2 w-64 flex justify-between items-center">
          <div className="text-white">
            <div>Уровень {level}</div>
            <div className="flex items-center gap-1">
              <Egg className="w-4 h-4" />
              <span>{eggsPerDay} в день</span>
            </div>
          </div>
          <button className="bg-green-500 px-4 py-1 rounded flex items-center gap-1">
            <Cookie className="w-4 h-4" />
            <span>100</span>
          </button>
        </div>

        <button className="mt-4 bg-yellow-400 w-64 py-3 rounded-lg font-bold">
          Начать сбор
        </button>
      </div>

      <BottomNav />
    </div>
  );
}