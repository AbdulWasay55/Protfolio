'use client'; 

import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); 
    }, []);

    return (
        <div>
            {children} 
        </div>
    );
};

export default ClientLayout;
