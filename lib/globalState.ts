import { create } from 'zustand';

interface navbarState {
    navbarState:number | null;
    setNavbarState: (navbarState: number | null) => void
}

export const getNavbarState = create<navbarState>()((set) => ({
    navbarState: null,
    setNavbarState: (navbarState: any) => set({ navbarState })
}))