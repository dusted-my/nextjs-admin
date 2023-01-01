import { DashboardLayout } from "../layouts";
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const rows: GridRowsProp = [
  { id: 1, col1: 'Allyson Lim Kai Sheng', col2: 'allyson@gmail.com', col3: 'No 11, Jalan Abell, 93100 Kuching, Sarawak', col4: '0193467456', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'true', col7: 'Deep cleaning, Washing dishes, Laundry', col8: '5', col9: 'Active', col10:'3 January 2022 at 08:43:09 UTC+8', col11:'4 January 2022 at 09:51:00 UTC+8' },
  { id: 2, col1: 'Lisa Munisah Binti Aman', col2: 'lisa12@gmail.com', col3: 'No 34, Jalan Batu Kawa, 93250 Kuching, Sarawak', col4: '0123890537', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', col6: 'true', col7: 'Mopping Floor, Vacuuming', col8: '5', col9: 'Active', col10:'16 February 2022 at 23:09:46 UTC+8', col11:'16 February 2022 at 23:10:00 UTC+8' },
  { id: 3, col1: 'Yuna Ting Ying Hui', col2: 'yuna99@gmail.com', col3: 'No 14, Jalan Deshon, 93100 Kuching, Sarawak', col4: '0194578903', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'8 March 2022 2022 at 17:40:49 UTC+8', col11:'8 March 2022 at 17:42:50 UTC+8' },
  { id: 4, col1: 'Lam Kim San', col2: 'kimsan@gmail.com', col3: 'No 90, Jalan Green, 93150 Kuching, Sarawak', col4: '0194347890', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'true', col7: 'Washing windows, Dusting, Mopping Floor', col8: '3', col9: 'Active', col10:'18 March 2022 at 20:00:56 UTC+8', col11:'18 March 2022 at 20:02:09 UTC+8' },
  { id: 5, col1: 'Ahmed Hassin Bin Abdullah', col2: 'ahmed02@gmail.com', col3: 'No 10, Jalan Enggang, 83050 Kuching, Sarawak', col4: '0102341208', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'09 April 2022 at 05:38:02 UTC+8', col11:'09 April 2022 at 05:40:29 UTC+8' },
  { id: 6, col1: 'Halison Phang Ming Li', col2: 'halison678@gmail.com', col3: 'No 15, Jalan Muhibbah, 93400 Kuching, Sarawak', col4: '0131578938', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'14 May 2022 at 13:16:08 UTC+8', col11:'14 May 2022 at 13:17:57 UTC+8' },
  { id: 7, col1: 'Amirah Aisyah Binti Karul', col2: 'amirah@gmail.com', col3: 'No 18, Jalan Gani, 93050 Kuching, Sarawak', col4: '0125674598', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', col6: 'true', col7: 'Vacuuming, Daily cleaning, Mopping, Washing windows', col8: '4', col9: 'Active', col10:'12 August 2022 at 10:56:04 UTC+8', col11:'12 August 2022 at 10:58:13 UTC+8' },
  { id: 8, col1: 'Muhammad Nassir Bin Hussein', col2: 'nassir22@gmail.com', col3: 'No 76, Jalan Nanas, 93400 Kuching Sarawak', col4: '0197653789', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'true', col7: 'Daily cleaning, Bathroom cleaning', col8: '5', col9: 'Active', col10:'14 October 2022 at 08:13:46 UTC+8', col11:'14 October 2022 at 09:14:23 UTC+8' },
  { id: 9, col1: 'Lim Jun Wei', col2: 'junwei@gmail.com', col3: 'No 90, Jalan Merdeka, 93050 Kuching, Sarawak', col4: '0121246543', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'16 October 2022 at 14:34:07 UTC+8', col11:'16 October 2022 at 14:37:15 UTC+8' },
  { id: 10, col1: 'Amir Haji Bin Kharul', col2: 'amir13@gmail.com', col3: 'No 88, Jalan Helang, 93050 Kuching, Sarawak', col4: '0179023125', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'15 November 2022 at 20:07:10 UTC+8', col11:'15 November 2022 at 21:36:09 UTC+8' },
  { id: 11, col1: 'Abdul Alim Bin Masjid', col2: 'alim@gmail.com', col3: 'No 9, Jalan Merbau, 93450 Kuching, Sarawak', col4: '0105897654', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'2 December 2022 at 12:04:25 UTC+8', col11:'2 December 2022 at 13:12:45 UTC+8' },
  { id: 12, col1: 'Lau Wei Ming', col2: 'lau@gmail.com', col3: 'No 66, Jalan Hijau, 93150 Kuching, Sarawak', col4: '0129032125', col5: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', col6: 'false', col7: '-', col8: '-', col9: 'Active', col10:'12 December 2022 at 22:40:46 UTC+8', col11:'12 December 2022 at 22:40:57 UTC+8' },

];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'fullName', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 250 },
  { field: 'col2', headerName: 'email', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 180 },
  { field: 'col3', headerName: 'address', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 350 },
  { field: 'col4', headerName: 'phoneNo', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 120 },
  { field: 'col5', headerName: 'imageUrl', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 150, renderCell: (params) => <img src={params.value} width="50" height="50" alt="Profile pic" /> },
  { field: 'col6', headerName: 'isCleaner', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 100 },
  { field: 'col7', headerName: 'skills', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 450 },
  { field: 'col8', headerName: 'stars', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 100 },
  { field: 'col9', headerName: 'status', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 100 },
  { field: 'col10', headerName: 'createdAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },
  { field: 'col11', headerName: 'updatedAt', headerAlign: 'center', headerClassName: 'super-app-theme--header', width: 280 },


];

export default function Users() {
  const { status, data } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  if (status === "authenticated") 
    return (
      <DashboardLayout>
        <div>
        This page is Protected for special people. like{"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
      
         <Box
      sx={{
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#d1c4e9',
        },
        }}
        >
          <DataGrid rows={rows} columns={columns} autoHeight={true}/>
        </Box>
        
      </DashboardLayout>
      
    );
    return <div>You should probably to login to view this page.</div>;
  }