import React from "react";
import create from 'zustand';
export const useStore = create(set => ({ 
    color:"blue",
    changePink: () => set({ color:'#FD788B'}),
}))

