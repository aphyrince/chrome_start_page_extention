import { create } from 'zustand';

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

const useBookmarkStore = create<BookmarkStore>()((set) => ({
    list: [],
    add: (title: string, url: string) => {
        const newBookmark = {
            id: new Date().toDateString() + '_bookmark',
            title,
            url,
        };
        set((state) => ({ list: [...state.list, newBookmark] }));
    },
    remove: (id: string) => {
        set((state) => ({ list: [...state.list.filter((item) => item.id !== id)] }));
    },
}));

export default useBookmarkStore;
export type { Bookmark };
