import { create } from 'zustand';

interface navbarState {
    navbarState:number | null;
    setNavbarState: (navbarState: number | null) => void
}

export const getNavbarState = create<navbarState>()((set) => ({
    navbarState: null,
    setNavbarState: (navbarState: number | null) => set({ navbarState })
}))

interface caseStudyStateInterface {
    caseStudyState: string | null;
    setCaseStudyState: (caseStudyState: string | null) => void
}

export const getCaseStudyState = create<caseStudyStateInterface>()((set) => ({
    caseStudyState: null,
    setCaseStudyState: (caseStudyState: string | null) => set({ caseStudyState })
}))