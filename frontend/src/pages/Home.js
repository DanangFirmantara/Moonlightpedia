import React, { useEffect } from 'react';
import '../App.css';
import './styling.css';
import { fetchHello } from '../services/api';
import CustomNavbar from '../components/CustomNavbar';
import dashboardImg from '../assets/dashboard.png';
import footerBg from '../assets/footer.png';

function Home() {
  useEffect(() => {
    // You can keep your fetchHello logic here if needed
  }, []);

  return (
    <>
      <CustomNavbar />
      <div className="dashboard-bg">
        <div className="dashboard-breadcrumb">Dashboard</div>
        <div className="dashboard-title">Dashboard</div>
        <div>
            <img src={dashboardImg} alt="dashboard" className='dashboard-card-img' />
        </div>
      </div>
      <div className="footer">
        <div className="footer-caption">2023 PT. Bank Mandiri (Persero) Tbk.</div>
      </div>
    </>
  );
}
export default Home;
