import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Egg, Wallet } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full bg-brown-900 p-4 flex justify-between fixed bottom-0">
      <button 
        className={`flex flex-col items-center text-white ${!isActive('/') && 'opacity-50'}`}
        onClick={() => navigate('/')}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs">Главная</span>
      </button>
      
      <button 
        className={`flex flex-col items-center text-white ${!isActive('/farm') && 'opacity-50'}`}
        onClick={() => navigate('/farm')}
      >
        <Egg className="w-6 h-6" />
        <span className="text-xs">Ферма</span>
      </button>
      
      <button 
        className={`flex flex-col items-center text-white ${!isActive('/wallet') && 'opacity-50'}`}
        onClick={() => navigate('/wallet')}
      >
        <Wallet className="w-6 h-6" />
        <span className="text-xs">Кошелек</span>
      </button>
    </div>
  );
}