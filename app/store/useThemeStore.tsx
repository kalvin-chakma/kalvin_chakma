import {create} from 'zustand';

interface ThemeState {
    darkMode: boolean;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    darkMode: false,
    toggleTheme: () => {
        set((state) => {
            const newMode = !state.darkMode;
            if (typeof window !== 'undefined') {
                document.documentElement.classList.toggle('dark', newMode);
                localStorage.setItem('theme', newMode ? 'dark' : 'light');

            }
            return { darkMode: newMode }
        })
    }
}));

export default useThemeStore;
