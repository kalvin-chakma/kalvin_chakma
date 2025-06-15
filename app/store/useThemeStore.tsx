import {create} from 'zustand';

interface ThemeState {
    darkMode: boolean;
    toggleTheme: () => void;
}

// Get initial theme from localStorage or default to false
const getInitialTheme = (): boolean => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    }
    return false;
};

const useThemeStore = create<ThemeState>((set) => ({
    darkMode: getInitialTheme(),
    toggleTheme: () => {
        set((state) => {
            const newMode = !state.darkMode;
            if (typeof window !== 'undefined') {
                // Update localStorage
                localStorage.setItem('theme', newMode ? 'dark' : 'light');
                // Update class on document
                document.documentElement.classList.toggle('dark', newMode);
            }
            return { darkMode: newMode }
        })
    }
}));

// Initialize theme on mount
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
}

export default useThemeStore;
