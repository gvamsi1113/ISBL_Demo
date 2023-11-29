import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { recentFilesData, contextMenuItems, overviewRecentFilesGrid } from '../data/dummy';
import { Header } from '../components';

const Files = () => {
  return (
    <div className='flex p-3 pl-0 h-screen'>
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
              {overviewRecentFilesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
          </GridComponent>
        </div>
      </div>
    </div>
  )
}

export default Files