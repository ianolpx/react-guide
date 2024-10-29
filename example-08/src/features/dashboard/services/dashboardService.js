import axios from 'axios';

export const fetchDashboardStats = async () => {
  try {
    const response = await axios.get('http://localhost:3003/api/sample');
    // const response = { data: { users: 100, sales: 200, visits: 300 } };
    console.log('response.data:', response.data);
    return response.data;
  } catch (error) {
    console.error('대시보드 통계 데이터 가져오기 실패:', error);
    return { users: 0, sales: 0, visits: 0 }; 
  }
};

