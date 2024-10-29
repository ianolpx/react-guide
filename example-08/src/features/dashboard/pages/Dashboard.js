import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import { fetchDashboardStats } from '../services/dashboardService';

function DashboardPage() {
  const [stats, setStats] = useState({ users: 0, sales: 0, visits: 0 });

  useEffect(() => {
    // 대시보드 통계 데이터를 가져옴
    const loadStats = async () => {
      const data = await fetchDashboardStats();
      setStats(data);
    };
    loadStats();
  }, []);

  return (
    <div>
      <h1>대시보드</h1>
      <StatsCard title="사용자 수" value={stats.users} />
      <StatsCard title="판매 수" value={stats.sales} />
      <StatsCard title="방문 수" value={stats.visits} />
    </div>
  );
}

export default DashboardPage;