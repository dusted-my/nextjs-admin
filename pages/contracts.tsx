import { DashboardLayout } from "../layouts";
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";

const rows: GridRowsProp = [
  { id: 1, col1: 'No 15, Jalan Muhibbah, 93400 Kuching, Sarawak', col2: 'Please knock before entering the house.', col3: 'not_applicable', col4: 'RM300', col5: 'Sweeping floor, Mopping floor', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '16 March 2022 2022 at 08:00:00 UTC+8', col10: '16 March 2022 2022 at 10:00:00 UTC+8', col11: '20 March 2022 2022 at 10:35:55 UTC+8', col12: '20 March 2022 2022 at 10:35:55 UTC+8' },
  { id: 2, col1: 'No 14, Jalan Deshon, 93100 Kuching, Sarawak', col2: 'Do not smoke in home or surrounding property.', col3: 'Paid', col4: 'RM400', col5: 'Washing windows, Dusting', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '10 April 2022 at 14:00:00 UTC+8', col10: '10 April 2022 at 16:00:00 UTC+8', col11: '12 April 2022 at 16:24:10 UTC+8', col12: '12 April 2022 at 16:24:10 UTC+8' },
  { id: 3, col1: 'No 10, Jalan Enggang, 83050 Kuching, Sarawak', col2: 'Do not bring other people into the house.', col3: 'Paid', col4: 'RM500', col5: 'Daily cleaning', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '15 May 2022 at 13:00:10 UTC+8', col10: '15 May 2022 at 11:00:08 UTC+8', col11:'16 May 2022 at 13:16:08 UTC+8', col12: '16 May 2022 at 13:16:08 UTC+8' },
  { id: 4, col1: 'No 90, Jalan Merdeka, 93050 Kuching, Sarawak', col2: 'If you need to use house phone, ask for our permission.', col3: 'Paid', col4: 'RM350', col5: 'Dusting, Mopping floor', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '17 October 2022 at 13:00:07 UTC+8', col10: '17 October 2022 at 15:34:07 UTC+8', col11: '16 October 2022 at 14:34:07 UTC+8', col12: '16 October 2022 at 14:34:07 UTC+8' },
  { id: 5, col1: 'No 88, Jalan Helang, 93050 Kuching, Sarawak', col2: 'Ask for permission before you enter master room.', col3: 'Paid', col4: 'RM370', col5: 'Laundry, Washing windows', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '18 November 2022 at 20:00:10 UTC+8', col10: '18 November 2022 at 22:07:00 UTC+8', col11: '19 November 2022 at 20:07:10 UTC+8', col12: '19 November 2022 at 20:07:10 UTC+8' },
  { id: 6, col1: 'No 9, Jalan Merbau, 93450 Kuching, Sarawak', col2: 'Do inform us when you cannot do cleaning service.', col3: 'not_applicable', col4: 'RM450', col5: 'Deep cleaning, bathroom cleaning', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '3 December 2022 at 12:07:45 UTC+8', col10: '3 December 2022 at 10:04:25 UTC+8', col11: '4 December 2022 at 12:04:25 UTC+8', col12: '4 December 2022 at 12:04:25 UTC+8' },
  { id: 7, col1: 'No 66, Jalan Hijau, 93150 Kuching, Sarawak', col2: 'If you make mistake, do let us know honestly.', col3: 'Paid', col4: 'RM560', col5: 'Vacuuming, Daily cleaning, Mopping, Washing windows', col6: '/users/..', col7: '/users/..', col8: 'Active', col9: '15 December 2022 at 07:50:12 UTC+8', col10: '15 December 2022 at 09:46:50 UTC+8', col11: '18 December 2022 at 22:40:46 UTC+8', col12: '18 December 2022 at 22:40:46 UTC+8' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'address', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 350 },
  { field: 'col2', headerName: 'description', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 400 },
  { field: 'col3', headerName: 'paymentStatus', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150 },
  { field: 'col4', headerName: 'price', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 100 },
  { field: 'col5', headerName: 'skillsRequired', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 400 },
  { field: 'col6', headerName: 'cleanerDoc', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150 },
  { field: 'col7', headerName: 'clientDoc', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150 },
  { field: 'col8', headerName: 'status', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150 },
  { field: 'col9', headerName: 'startAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },
  { field: 'col10', headerName: 'endAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },
  { field: 'col11', headerName: 'createdAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },
  { field: 'col12', headerName: 'updatedAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },
];

export default function Contracts() {
    return (
      <DashboardLayout>
         <Box
            sx={{
              width: '100%',
              '& .super-app-theme--header': {
              backgroundColor: '#f8bbd0',
        },
        }}
        >
          <DataGrid rows={rows} columns={columns} autoHeight={true}/>
        </Box>
      </DashboardLayout>
    );
  }