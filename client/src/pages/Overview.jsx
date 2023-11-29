import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { recentFilesData, contextMenuItems, overviewRecentFilesGrid, requestsData, requestsGrid } from '../data/dummy';
import { Header } from '../components';

const Overview = () => {
  return (
    <div className='flex flex-col p-3 pl-0 h-screen'>
        <div className="flex-1 flex gap-3 pb-3 overflow-clip">
          <div className='rounded-3xl bg-white drop-shadow-xl p-8 flex flex-col justify-between min-w-fit'>
              <p className='font-bold text-5xl text-red-600'>4</p>
              <p className='font-bold text-gray-400 pr-1'>OUT FOR 2+ Days</p>
              <p className='font-bold text-5xl pt-8 text-yellow-500'>15</p>
              <p className='font-bold text-gray-400'>REQUESTS PENDING</p>
              <p className='font-bold text-5xl pt-8 text-green-600'>0</p>
              <p className='font-bold text-gray-400 '>Errors Reported</p>
          </div>

          <div className='rounded-3xl bg-white drop-shadow-xl overflow-clip max-w-4xl'>
            <div className="bg-white overflow-auto">
              <Header title="Recently Accessed Files" />
              <GridComponent
                id="gridcomp"
                dataSource={recentFilesData}
                allowPaging
                allowSorting
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
          
          <div className='rounded-3xl bg-white drop-shadow-xl flex flex-col justify-between p-8'>
            <p className='font-bold text-5xl'>234</p>
            <p className='font-bold text-gray-400'>EMPLOYEES</p>
            <p className='font-bold text-5xl pt-8'>479</p>
            <p className='font-bold text-gray-400'>REQUESTS</p>
            <p className='font-bold text-5xl pt-8'>983</p>
            <p className='font-bold text-gray-400'>FILES</p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-3xl border drop-shadow-xl overflow-clip">
        <div className="bg-white overflow-auto h-full">
              <Header title="Requests" />
              <GridComponent
                id="gridcomp"
                dataSource={requestsData}
                allowPaging
                allowSorting
                // allowExcelExport
                // allowPdfExport
                contextMenuItems={contextMenuItems}
                // editSettings={editing}
              >
                <ColumnsDirective>
                  {requestsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
              </GridComponent>
            </div>
        </div>
      </div>
  )
}

export default Overview