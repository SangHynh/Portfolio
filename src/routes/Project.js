import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
    }}>
      <Navbar />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        marginTop: '90px', // Đảm bảo không bị đè bởi navbar
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2rem', 
        }}>
          Updating...
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
