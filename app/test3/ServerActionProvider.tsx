'use client'
import React from 'react';

export const ServerActionContext = React.createContext<{
    serverAction: () => void;
} | null>(null);

export const useServerAction = () => {
    const context = React.useContext(ServerActionContext);
    if (!context) {
        throw new Error('useServerAction must be used within a ServerActionProvider');
    }
    return context;
}

export const ServerActionProvider: React.FC<{ serverAction: () => void }> = ({ serverAction, children }) => {
    return <ServerActionContext.Provider value={{ serverAction }}>{children}</ServerActionContext.Provider>
}