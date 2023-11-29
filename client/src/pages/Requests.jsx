import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { requestsData, contextMenuItems, requestsGrid} from '../data/dummy';
import { Header } from '../components';

const Requests = () => {
  // Initialize state with a status field for each row
  const [data, setData] = useState(requestsData.map(item => ({
    ...item,
    rowStatus: item.status || 'Pending' // Replace 'status' with your actual field name for the initial status
  })));

  // Function to update the status of a specific row
  const updateRowStatus = (rowId, newStatus) => {
    const updatedData = data.map(item => {
      if (item.id === rowId) { // Assuming each row has a unique 'id'
        return { ...item, rowStatus: newStatus };
      }
      return item;
    });
    setData(updatedData);
  };

  // Custom column template for the Status column
  const statusTemplate = ({ rowStatus, id }) => {
    if (rowStatus === 'Pending') {
      return (
        <div>
          <button onClick={() => updateRowStatus(id, 'Accepted')}>✔️ Accept</button>
          <button onClick={() => updateRowStatus(id, 'Rejected')}>❌ Reject</button>
        </div>
      );
    }
    return <span>{rowStatus}</span>;
  };

  // Modify the 'Status' column in your columns configuration
  const modifiedColumns = requestsGrid.map(col => {
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
