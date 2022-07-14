import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { userFormData } from '../App';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
// let navigate = useNavigate();
// const columns = [
//     // { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130,editable:true },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//     { field: 'email', headerName: 'Email', width: 170 },
//     {
//         field: 'action',
//         headerName: 'Action',
//         sortable: false,
//         renderCell: (params) => {
//           const onClick = (e) => {
//             e.stopPropagation(); // don't select this row after clicking
//     // navigate('/edituser')
//             // const api: GridApi = params.api;
//             // const thisRow: Record<string, GridCellValue> = {};
    
//             // api
//             //   .getAllColumns()
//             //   .filter((c) => c.field !== '__check__' && !!c)
//             //   .forEach(
//             //     (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
//             //   );
    
//             // return alert(JSON.stringify(thisRow, null, 4));
//           };
    
//           return <Button onClick={useNavigate('/edituser')}>Edit</Button>;
//         },
//       },
//     // {
//     //     name: "Edit",
//     //     options: {
//     //       filter: true,
//     //       sort: false,
//     //       empty: true,
//     //       customBodyRender: (value, tableMeta, updateValue) => {
//     //         return (
//     //           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
//     //             Edit
//     //           </button>
//     //         );
//     //       }
//     //     }
//     // }
// ];

// const getRowId={rows => rows.id}
function UserList(props) {
    let navigate = useNavigate();
    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130,editable:true },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { field: 'email', headerName: 'Email', width: 170 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            sortable: false,
            renderCell: (params) => {
              const onClick = (e) => {
                // e.stopPropagation(); // don't select this row after clicking
        navigate('/edituser')
                // const api: GridApi = params.api;
                // const thisRow: Record<string, GridCellValue> = {};
        
                // api
                //   .getAllColumns()
                //   .filter((c) => c.field !== '__check__' && !!c)
                //   .forEach(
                //     (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                //   );
        
                // return alert(JSON.stringify(thisRow, null, 4));
              };
              function deleteUserData(){

              }
        
              return (  <>
                <Button onClick={onClick}>Edit</Button>
                {/* <Button type ="button" onClick={deleteUserData}>Delete</Button> */}
           </>
     )
            
            },
          },
        // {
        //     name: "Edit",
        //     options: {
        //       filter: true,
        //       sort: false,
        //       empty: true,
        //       customBodyRender: (value, tableMeta, updateValue) => {
        //         return (
        //           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
        //             Edit
        //           </button>
        //         );
        //       }
        //     }
        // }
    ];

    const  userData = useContext(userFormData);
    console.log(userData);
    console.log(props);
    return (
        <>
      
            <h2>UserLists</h2>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={userData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default UserList