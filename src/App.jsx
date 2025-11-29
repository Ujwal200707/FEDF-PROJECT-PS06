import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FundsList from "./pages/FundsList";
import FundDetails from "./pages/FundDetails";
import CompareFunds from "./pages/CompareFunds";
import AdminDashboard from "./pages/AdminDashboard";
import InvestorDashboard from "./pages/InvestorDashboard";
import AdvisorDashboard from "./pages/AdvisorDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";
import Menu from "./pages/Menu";
import Courses from "./pages/Courses";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import { FundsProvider } from "./context/FundsContext";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FundsProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funds" element={<FundsList />} />
            <Route path="/funds/:id" element={<FundDetails />} />
            <Route path="/compare" element={<CompareFunds />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/investor" element={<InvestorDashboard />} />
            <Route path="/advisor" element={<AdvisorDashboard />} />
            <Route path="/analyst" element={<AnalystDashboard />} />
          </Routes>
        </Router>
      </FundsProvider>
    </ThemeProvider>
  );
}
