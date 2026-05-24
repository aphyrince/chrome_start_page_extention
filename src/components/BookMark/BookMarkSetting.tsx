import { Check } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import checkUrlWithRegex from '../../utils/urlValidate';
import useBookmarkStore from '../../hooks/useBookmarkStore';

const BookMarkSetting = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [isUrlCorrect, setIsUrlCorrect] = useState(false);
    const addBookmark = useBookmarkStore((s) => s.add);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setTitle(e.target.value);
    }, []);
    const handleUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setUrl(e.target.value);

        if (checkUrlWithRegex(e.target.value)) {
            setIsUrlCorrect(true);
        } else {
            setIsUrlCorrect(false);
        }
    }, []);
    const handleAddClick = useCallback(() => {
        addBookmark(title, url);
        setTitle('');
        setUrl('');
        setIsUrlCorrect(false);
    }, [title, url, addBookmark]);

    return (
        <div className='flex flex-col gap-4 w-9/10 mx-4 p-4 bg-black/50 rounded-xl'>
            <h1 className='text-xl font-bold'>바로가기</h1>
            <div className='w-full flex items-center text-sm'>
                <p className='min-w-10 '>추가</p>
                <div className='flex-1 flex justify-end-safe gap-1'>
                    <input
                        type='text'
                        className='w-1/3 px-1 border border-white/20 rounded-md focus:w-full duration-200'
                        placeholder='title'
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <input
                        type='url'
                        className='w-1/3 px-1 border border-white/20 rounded-md focus:w-full duration-200'
                        placeholder='url'
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <button
                        style={{
                            width: `${isUrlCorrect ? '20px' : '0px'}`,
                            height: `${isUrlCorrect ? '20px' : '0px'}`,
                            padding: `${isUrlCorrect ? '2px' : '0px'}`,
                        }}
                        className='w-0 h-0 overflow-hidden  shrink-0 duration-200 rounded-md bg-white/30 hover:bg-white hover:text-black hover:scale-110 cursor-pointer'
                        onClick={handleAddClick}
                    >
                        <Check size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookMarkSetting;
