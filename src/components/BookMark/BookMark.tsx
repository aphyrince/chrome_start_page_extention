import React, { useCallback } from 'react';
import useBookmarkStore from '../../hooks/useBookmarkStore';
import getFaviconUrl from '../../utils/getFaviconUrl';

const BookMark = () => {
    const bookmarkList = useBookmarkStore((s) => s.list);

    const handleBookmarkClick = useCallback((url: string) => {
        window.open(url, '_blank');
    }, []);

    return (
        <div className='grid grid-cols-3 gap-2 text-white'>
            {bookmarkList.map((item) => (
                <div key={item.id} className='flex flex-col justify-center items-center'>
                    <button
                        className='box-content p-2 rounded-md bg-white/30 hover:scale-90 duration-200 cursor-pointer'
                        onClick={() => handleBookmarkClick(item.url)}
                    >
                        <img src={getFaviconUrl(item.url)} alt={item.url}></img>
                    </button>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default BookMark;
