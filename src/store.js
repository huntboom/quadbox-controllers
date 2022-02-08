import React from "react";
import create from 'zustand';
export const useStore = create(set => ({ 
    color:"blue",
    changeColor: (selectedColor) => set(state => ({ color:selectedColor})),
}))

