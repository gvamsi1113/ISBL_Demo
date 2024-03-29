import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { recentFilesData, contextMenuItems, employeeViewFilesGrid } from '../data/dummy';
import { Header, SidebarEmp } from '../components';
import globalUser, { updateUser } from './globalUser';

const EmployeeView = () => {
  return (
    <div className='flex p-3 pl-0 h-screen gap-3'>
      <div>
        {globalUser.role === 1 && (<SidebarEmp />)}
      </div>
      <div className='flex flex-col rounded-3xl bg-white drop-shadow-xl overflow-auto'>
        <Header title="All Files" />
        <div className="bg-white overflow-clip">
          <GridComponent
            id="gridcomp"
            dataSource={recentFilesData}
            allowPaging
            allowSorting
            pageSettings={{ pageSize: 16 }}
            gridLines='None'
            rowHeight={37}
            // allowExcelExport
            // allowPdfExport
            contextMenuItems={contextMenuItems}
            // editSettings={editing}
          >
            <ColumnsDirective>
              {employeeViewFilesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
          </GridComponent>
        </div>
      </div>
    </div>
  )
}

export default EmployeeView