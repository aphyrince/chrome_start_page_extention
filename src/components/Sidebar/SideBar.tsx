import React from 'react';
import useSidebarStore from '../../hooks/useSidebarStore';
import BookMarkSetting from '../BookMark/BookMarkSetting';

const SideBar = () => {
    const open = useSidebarStore((s) => s.open);

    return (
        <div
            className='absolute right-0 top-0 bottom-0 flex flex-col justify-start items-center gap-0 py-4 m-0 h-full w-100 overflow-y-auto bg-black/70 text-white duration-300'
            style={{ transform: `${open ? 'translateX(0)' : 'translateX(100rem)'}` }}
        >
            <BookMarkSetting />
        </div>
    );
};

export default SideBar;
