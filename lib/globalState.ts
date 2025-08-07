import { create } from 'zustand';

interface navbarState {
    navbarState: number | null;
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

interface FooterScrollState {
    footerScrollPosition: number | null;
    setFooterScrollPosition: (position: number | null) => void;
    scrollPositions: Record<string, number>;
    setScrollPosition: (key: string, position: number) => void;
    getScrollPosition: (key: string) => number | null;
    clearScrollPosition: (key: string) => void;
}

export const useFooterScrollState = create<FooterScrollState>()((set, get) => ({
    footerScrollPosition: null,
    setFooterScrollPosition: (position: number | null) => set({ footerScrollPosition: position }),
    scrollPositions: {},
    setScrollPosition: (key: string, position: number) =>
        set((state) => ({
            scrollPositions: { ...state.scrollPositions, [key]: position }
        })),
    getScrollPosition: (key: string) => {
        const state = get();
        return state.scrollPositions[key] || null;
    },
    clearScrollPosition: (key: string) =>
        set((state) => {
            const newPositions = { ...state.scrollPositions };
            delete newPositions[key];
            return { scrollPositions: newPositions };
        }),
}));
