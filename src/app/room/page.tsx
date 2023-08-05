"use client"

import Button from '@mui/material/Button'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Toolbar, Typography } from '@mui/material'
import { useGetRoomListPageQuery } from '@/generated/graphql'

export default function RoomList() {
  const { data } = useGetRoomListPageQuery();
  const rooms = data?.rooms;

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h4" component="h2">
          Room List
        </Typography>
        <Box sx={{ mt: 2 }}>
          {rooms?.map(room => ((
            <>
              {room.id}
            </>
          )))}
          <Button variant="contained">Hello World</Button>
        </Box>
      </Box>
    </>
  )
}
