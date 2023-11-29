import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const SidebarEmp = () => {
  const {activeMenu, setActiveMenu} = useStateContext();
  const activeLinkCss = 'flex items-center pt-9 pb-9 rounded-lg text-gray-400 text-md hover:bg-light-gray underline';
  const normalLinkCss = 'flex items-center pt-9 pb-9 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hovertext-black hover:bg-light-gray';

  return (
    <div className='flex-1 flex flex-col md:overflow-hidden overflow-auto md:hover:overflow-auto p-3 pb-8 justify-between bg-white rounded-3xl drop-shadow-xl max-h-screen'>

      {activeMenu && (<>
        <div className='flex justify-between items-center mx-auto'>
          <div className='flex flex-col items-center'>
            <div to="/" className='text-xl items-center gap-3 m-4 mt-6 flex font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware /> <span>Hi</span><span>Rakesh</span>
            </div>
            <span className='text-gray-400 pb-4 font-medium'> CL: 3</span>
            <NavLink onClick={() => {}}>
              <span className='font-extrabold text-gray-500'>Logout</span>
            </NavLink>
          </div>
          

          {/* <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent> */}
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-white p-8 flex flex-col justify-between min-w-fit items-center'>
              <p className='font-bold text-gray-400 pr-1'>Requested</p>
              <p className='font-bold text-5xl pb-8 text-blue-950'>4</p>
              <p className='font-bold text-gray-400 pr-1'>Rejected</p>
              <p className='font-bold text-5xl pb-8 text-red-600'>3</p>
              <p className='font-bold text-gray-400'>Pending</p>
              <p className='font-bold text-5xl pb-8 text-yellow-500'>0</p>
              <p className='font-bold text-gray-400 '>Accepted</p>
              <p className='font-bold text-5xl text-green-600'>1</p>
          </div>
        </div>
      </>)}

    </div>
  )
}

export default SidebarEmp