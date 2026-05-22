import { create } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';

interface Bookmark {
    id: string;
    title: string;
    url: string;
}

interface BookmarkStore {
    list: Bookmark[];
    add: (title: string, url: string) => void;
    remove: (id: string) => void;
}

const isExtension = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;

const chromeStorageAdapter: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        if (isExtension) {
            return new Promise((resolve) => {
                chrome.storage.local.get([name], (result) => {
                    resolve(result[name] ? JSON.stringify(result[name]) : null);
                });
            });
        }
        return localStorage.getItem(name);
    },
    setItem: async (name: string, value: string): Promise<void> => {
        const parsedValue = JSON.parse(value);
        if (isExtension) {
            return new Promise((resolve) => {
                chrome.storage.local.set({ [name]: parsedValue }, () => resolve());
            });
        }
        localStorage.setItem(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        if (isExtension) {
            return new Promise((resolve) => {
                chrome.storage.local.remove([name], () => resolve());
            });
        }
        localStorage.removeItem(name);
    },
};

const useBookmarkStore = create<BookmarkStore>()(
    persist(
        (set) => ({
            list: [],
            add: (title: string, url: string) => {
                const newBookmark = {
                    id: Date.now().toString() + '_bookmark',
                    title,
                    url,
                };
                set((state) => ({ list: [...state.list, newBookmark] }));
            },
            remove: (id: string) => {
                set((state) => ({ list: state.list.filter((item) => item.id !== id) }));
            },
        }),
        {
            name: 'bookmark-storage',
            storage: createJSONStorage(() => chromeStorageAdapter),
        },
    ),
);

export default useBookmarkStore;
export type { Bookmark };
