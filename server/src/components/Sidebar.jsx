import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../../../client/src/contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  const activeLinkCss = 'flex items-center pt-9 pb-9 rounded-lg text-gray-400 text-md hover:bg-light-gray underline';
  const normalLinkCss = 'flex items-center pt-9 pb-9 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hovertext-black hover:bg-light-gray';

  return (
    <div className='flex-1 flex flex-col md:overflow-hidden overflow-auto md:hover:overflow-auto pt-3 pb-8 pw- justify-between bg-white rounded-3xl drop-shadow-xl max-h-screen'>
      {activeMenu && (<>
        <div className='flex justify-between items-center mx-auto'>
          <div to="/" className='text-xl items-center gap-3 m-4 mt-6 flex font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> <span>RepoManager</span>
          </div>
          {/* <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent> */}
        </div>
        <div className='flex flex-col'>
          {links.map(item => (
            <NavLink to={`${item.name}`} key='link.name' onClick={() => {}} className={({isActive}) => isActive ? activeLinkCss : normalLinkCss}>
              <span className='capitalize mx-auto'>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </>)}

    </div>
  )
}

export default Sidebar