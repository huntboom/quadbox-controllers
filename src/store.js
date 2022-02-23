import React from "react";
import create from 'zustand';
export const useStore = create(set => ({ 
    color:"lightgreen",
    changePink: () => set({ color:'#FD788B'}),
    changeBlue: () => set({ color:'#6EB5FF'}),
    changeGreen: () => set({ color:'lightgreen'}),
    changeWhite: () => set({ color:'white'}),
    changeYellow: () => set({ color:'yellow'}),
    changeRed: () => set({ color:'red'}),
    changePurple: () => set({ color:'purple'}),
    changeOrange: () => set({ color:'orange'}),
}))

