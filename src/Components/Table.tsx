import React from 'react'; 
import User from "../utils/user.ts"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const Table: React.FC<{data: User[]}> = ({data}) => {

   
         const rows = data.map((d:User)=> {
                 
                const  obj:User =    {
                   id:d.id, 
                   name: d.name, 
                   username: d.username,
                   phone: d.phone, 
                   website: d.website 


                   }
                    return obj; 
            
             } ); 

             const columns: GridColDef[] = [
              { field: 'id', headerName: 'ID', width: 90 },
              
              {
                field: 'name',
                headerName: 'Name',
                width: 150,
                
              },
              {
                field: 'username',
                headerName: 'Username',
                width: 150,
                
              },
              {
                field: 'phone',
                headerName: 'Phone',
                width: 200,
                
              },
              {
                field: 'website',
                headerName: 'Website',
                width: 200,
                
              },
            ];

  return (
    <>
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}

export default Table