import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { recentFilesData, contextMenuItems, overviewRecentFilesGrid } from '../data/dummy';
import { Header } from '../components';

const Requests = () => {
  // Create a state to manage the grid data
  const [data, setData] = useState(recentFilesData);

  // Function to update the status
  const updateStatus = (rowId, newStatus) => {
    const updatedData = data.map(item => {
      if (item.id === rowId) { // Assuming each row has a unique 'id'
        return { ...item, status: newStatus }; // Replace 'status' with your actual field name
      }
      return item;
    });
    setData(updatedData);
  };

  // Custom column template for the Status column
  const statusTemplate = ({ status, id }) => {
    if (status === 'Pending') {
      return (
        <div>
          <button onClick={() => updateStatus(id, 'Accepted')}>✔️ Accept</button>
          <button onClick={() => updateStatus(id, 'Rejected')}>❌ Reject</button>
        </div>
      );
    }
    return <span>{status}</span>;
  };

  // Modify the 'Status' column in your columns configuration
  const modifiedColumns = overviewRecentFilesGrid.map(col => {
    if (col.field === 'status') { // Replace 'status' with your actual field name
      return { ...col, template: statusTemplate };
    }
    return col;
  });

  return (
    <div className='flex p-3 pl-0 h-screen'>
      <div className='flex flex-col rounded-3xl bg-white drop-shadow-xl overflow-auto'>
        <Header title="All Requests" />
        <div className="bg-white overflow-auto">
          <GridComponent
            id="gridcomp"
            dataSource={data}
            allowPaging
            allowSorting
            pageSettings={{ pageSize: 16 }}
            gridLines='None'
            rowHeight={37}
            contextMenuItems={contextMenuItems}
          >
            <ColumnsDirective>
              {modifiedColumns.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
          </GridComponent>
        </div>
      </div>
    </div>
  )
}

export default Requests;
