"use client"

import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { useGetRoomListPageQuery } from '@/generated/graphql'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'


export default function RoomList() {
  const { data } = useGetRoomListPageQuery();
  const rooms = data?.rooms;

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h4" component="h2">
          部屋リスト
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>部屋名</TableCell>
                <TableCell>開催日時</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms?.map(room => ((
                <>
                  <TableRow
                    key={room.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Link href={`/room/${room.id}/`}>
                        {room.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {format(parseISO(room.startTime), "yyyy-MM-dd HH:mm:SS")}
                    </TableCell>
                  </TableRow>
                </>
              )))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}
