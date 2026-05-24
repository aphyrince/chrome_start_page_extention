import { Settings } from 'lucide-react';
import React, { useCallback } from 'react';
import useSidebarStore from '../../hooks/useSidebarStore';

const SettingBtn = () => {
    const { open, toggle } = useSidebarStore();

    const handleClick = useCallback(() => {
        toggle();
    }, [toggle]);

    return (
        <button
            className='absolute right-4 bottom-4 p-4 rotate-0 hover:rotate-45 scale-100 hover:scale-125 cursor-pointer duration-300'
            style={{ right: `${open ? '400px' : '4px'}` }}
            onClick={handleClick}
        >
            <Settings size={40} color='#fff' />
        </button>
    );
};

export default SettingBtn;
