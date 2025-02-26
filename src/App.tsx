import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FriendsPage from "./pages/FriendsPage";
import ClansPage from "./pages/ClansPage";
import QuestsPage from "./pages/QuestsPage";
import MarketPage from "./pages/MarketPage";
import FarmPage from "./pages/FarmPage";
import WalletPage from "./pages/WalletPage";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Разворачивает WebApp на весь экран
    console.log("Telegram WebApp data:", tg.initData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/clans" element={<ClansPage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/farm" element={<FarmPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
