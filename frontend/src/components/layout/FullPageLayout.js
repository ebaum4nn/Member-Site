import React from 'react';
import './layout.css'; // Ensure you have this CSS file in the same directory
import NavBar from "./Navbar";
import { AuthProvider } from '../../context/authContext';

function FullPageLayout({ children }) {
    return (
        <div className="layout">
            <AuthProvider>
                <header>
                    <NavBar />
                </header>
                <main className="content">
                    {children}
                </main>
            </AuthProvider>
            <footer className="footer">
                © 2024
            </footer>
        </div>
    );
}

export default FullPageLayout;
