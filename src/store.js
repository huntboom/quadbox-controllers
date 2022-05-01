import React from "react";
import create from 'zustand';
export const useStore = create(set => ({ 
    buttoncolor:"#6EB5FF",
    color:"#FD788B",
    clearness:1.0,
    clearnessshell:1.0,
    switchcolor:"lightblue",
    changeSwitchPink: () => set({ switchcolor:'#FD788B'}),
    changeSwitchBrown: () => set({ switchcolor:'brown'}),
    changeSwitchCyan: () => set({ switchcolor:'cyan'}),
    changeSwitchRed: () => set({ switchcolor:'red'}),
    changeSwitchPurple: () => set({ switchcolor:'purple'}),
    changeSwitchBurgundy: () => set({ switchcolor:'burgundy'}),
    changeSwitchOrange: () => set({ switchcolor:'orange'}),
    changeSwitchYellow: () => set({ switchcolor:'yellow'}),
    changeSwitchSilver: () => set({ switchcolor:'silver'}),
    changePink: () => set({ color:'#FD788B',clearnessshell:1.0}),
    changeBlue: () => set({ color:'#6EB5FF',clearnessshell:1.0}),
    changeGreen: () => set({ color:'lightgreen',clearnessshell:1.0}),
    changeWhite: () => set({ color:'white',clearnessshell:1.0}),
    changeYellow: () => set({ color:'yellow',clearnessshell:1.0}),
    changeRed: () => set({ color:'red',clearnessshell:1.0}),
    changePurple: () => set({ color:'purple',clearnessshell:1.0}),
    changeOrange: () => set({ color:'orange',clearnessshell:1.0}),
    changeClear: () => set({ color:'grey',clearnessshell:0.5}),

    changeButtonPink: () => set({ buttoncolor:'#FD788B', clearness:1.0}),
    changeButtonBlue: () => set({ buttoncolor:'#6EB5FF', clearness:1.0}),
    changeButtonGreen: () => set({ buttoncolor:'lightgreen', clearness:1.0}),
    changeButtonWhite: () => set({ buttoncolor:'white', clearness:1.0}),
    changeButtonYellow: () => set({ buttoncolor:'yellow', clearness:1.0}),
    changeButtonRed: () => set({ buttoncolor:'red', clearness:1.0}),
    changeButtonPurple: () => set({ buttoncolor:'purple', clearness:1.0}),
    changeButtonOrange: () => set({ buttoncolor:'orange', clearness:1.0}),
    changeButtonClear: () => set({ buttoncolor:'grey',clearness:0.2}),

}))

