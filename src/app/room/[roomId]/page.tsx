"use client"

import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { useGetRoomPageQuery } from '@/generated/graphql'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'


export default function RoomPage({
  params
}: {
  params: {
    roomId: string
  }
}) {
  const { data } = useGetRoomPageQuery({
    variables: {
      roomId: params.roomId,
    },
  });

  const room = data?.room;

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {room != null ? (
          <>
            <Typography variant="h4" component="h2">
              {room.name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              開催日時: {format(parseISO(room.startTime), "yyyy-MM-dd HH:mm")}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
              参加者
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>名前</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.roomPersons.map(roomPerson => ((
                    <>
                      <TableRow
                        key={roomPerson.person.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Link href={`/person/${roomPerson.person.id}/`}>
                            {roomPerson.person.name}
                          </Link>
                        </TableCell>
                      </TableRow>
                    </>
                  )))}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : ""}
      </Box>
    </>
  )
}
