"use client"

import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import { createApolloClient } from '@/lib/apollo'
import { useGetRoomPageQuery, GetRoomPageStaticParamDocument, GetRoomPageStaticParamQueryResult } from '@/generated/graphql'

export async function generateStaticParams() {
  const apolloClient = createApolloClient()
  
  const { data } = await apolloClient.query<GetRoomPageStaticParamQueryResult>({
    query: GetRoomPageStaticParamDocument
  })
  const rooms = data.data?.rooms
  if (rooms == null) {
    throw Error()
  }

  return rooms.map(room => ({
    roomId: String(room.id),
  }))
}

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
                  )))}
                </TableBody>
              </Table>
            </Box>
            <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
              放送アーカイブ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>タイトル</TableCell>
                    <TableCell>放送者</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.roomYouTubeLives.map(youtubeLive => ((
                    <TableRow
                      key={youtubeLive.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Link href={`https://www.youtube.com/watch?v=${youtubeLive.youtubeVideoId}`}>
                          {youtubeLive.title}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {youtubeLive.person != null ? (
                          <Link href={`/person/${youtubeLive.person.id}/`}>
                            {youtubeLive.person.name}
                          </Link>
                        ): ""}
                      </TableCell>
                    </TableRow>
                  )))}
                </TableBody>
              </Table>
            </Box>
            <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
              試合
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>開始時間</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {room.matches.map(match => ((
                    <TableRow
                      key={match.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        {match.start_time != null ? (
                          <Link href={`/match/${match.id}/`}>
                            {format(parseISO(match.start_time), "HH:mm")}
                          </Link>
                        ): ""}
                      </TableCell>
                    </TableRow>
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
