import React from 'react'
import { useState } from "react";
import { Header } from "../../components/ui/Header";
import DashboardHeader from './DashboardHeader';
import DashboardStats from './DashboardStats';
import DashboardFooter from './DashboardFooter';



const Dashboard = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-[#120411] to-[#250a23]">
      <Header/>
      <main className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col gap-10">
        <DashboardHeader />
        <DashboardStats />
      </main>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;