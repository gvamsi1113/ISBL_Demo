import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header, Sidebar } from '../components';

const Employees = () => {
  return (
    <div className='flex p-3 pl-0 h-screen'>
      
      <div className="w-72 flex max-h-screen p-3 pr-0 bg-gray-100 z-40">
              <Sidebar />
          </div>
      <div className='flex flex-col rounded-3xl bg-white drop-shadow-xl overflow-auto'>
        <Header title="Employees" />
        <div className="bg-white overflow-auto">
          <GridComponent
            id="gridcomp"
            dataSource={employeesData}
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
              {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
          </GridComponent>
        </div>
      </div>
    </div>
  )
}

export default Employees