import { create } from 'zustand';

interface Bookmark {
    id: string;
    title: string;
    url: string;
}

interface BookmarkStore {
    list: Bookmark[];
    add: (title: string, url: string) => void;
}

const useBookmarkStore = create<BookmarkStore>()((set) => ({
    list: [],
    add: (title: string, url) => {},
}));

export type { Bookmark };
