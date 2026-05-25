import React from 'react';
import useBookmarkStore from '../../hooks/useBookmarkStore';
import getFaviconUrl from '../../utils/getFaviconUrl';

const BookMark = () => {
    const bookmarkList = useBookmarkStore((s) => s.list);

    return (
        <div>
            {bookmarkList.map((item) => (
                <div key={item.id} className='flex flex-col justify-center items-center'>
                    <button className='p-2 rounded-md bg-white/30'>
                        <img src={getFaviconUrl(item.url)} alt={item.url}></img>
                    </button>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default BookMark;
