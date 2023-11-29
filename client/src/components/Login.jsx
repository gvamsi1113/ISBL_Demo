import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { recentFilesData, contextMenuItems, overviewRecentFilesGrid, requestsData, requestsGrid } from '../data/dummy';
import { Header } from '../components';

const Login = () => {
  return (
    <div className='flex p-3 pl-0 h-screen'>
        <div className="flex-1 flex gap-3 pb-3 overflow-clip">
        </div>
        <div className="flex-4 bg-white rounded-3xl border drop-shadow-xl overflow-clip">
        </div>
      </div>
  )
}

export default Login