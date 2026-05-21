import { BookmarkPlus, Import } from 'lucide-react';
import React from 'react';

const BookMarkSetting = () => {
    return (
        <div className='flex flex-col gap-4 w-full p-4'>
            <h1 className='text-xl font-bold'>바로가기</h1>
            <button className='ml-20 flex justify-between items-center p-2 bg-black/50 rounded-md'>
                <BookmarkPlus />
                <p>직접 추가</p>
            </button>
            <button className='ml-20 flex justify-between items-center p-2 bg-black/50 rounded-md'>
                <Import />
                <p>북마크에서 가져오기</p>
            </button>
        </div>
    );
};

export default BookMarkSetting;
