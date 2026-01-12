"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface GlobalContextType {
    isNewsletterOpen: boolean;
    setIsNewsletterOpen: (open: boolean) => void;
    isAIPanelOpen: boolean;
    setIsAIPanelOpen: (open: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
    const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);

    // Prevent scroll when modals are open
    useEffect(() => {
        if (isNewsletterOpen || isAIPanelOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isNewsletterOpen, isAIPanelOpen]);

    return (
        <GlobalContext.Provider value={{
            isNewsletterOpen,
            setIsNewsletterOpen,
            isAIPanelOpen,
            setIsAIPanelOpen
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobal must be used within a GlobalProvider');
    }
    return context;
}
