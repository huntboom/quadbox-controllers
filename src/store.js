import React from "react";
import create from 'zustand';
export const useStore = create(set => ({ 
    buttoncolor:"cyan",
    color:"lightgreen",
    changePink: () => set({ color:'#FD788B'}),
    changeBlue: () => set({ color:'#6EB5FF'}),
    changeGreen: () => set({ color:'lightgreen'}),
    changeWhite: () => set({ color:'white'}),
    changeYellow: () => set({ color:'yellow'}),
    changeRed: () => set({ color:'red'}),
    changePurple: () => set({ color:'purple'}),
    changeOrange: () => set({ color:'orange'}),
    changeButtonPink: () => set({ buttoncolor:'#FD788B'}),
    changeButtonBlue: () => set({ buttoncolor:'#6EB5FF'}),
    changeButtonGreen: () => set({ buttoncolor:'lightgreen'}),
    changeButtonWhite: () => set({ buttoncolor:'white'}),
    changeButtonYellow: () => set({ buttoncolor:'yellow'}),
    changeButtonRed: () => set({ buttoncolor:'red'}),
    changeButtonPurple: () => set({ buttoncolor:'purple'}),
    changeButtonOrange: () => set({ buttoncolor:'orange'}),
}))

