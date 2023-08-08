import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Link as MuiLink,
  Breadcrumbs,
} from '@mui/material'
import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Tweet } from '@/components/tweet'
import {
  useGetRoomPageQuery,
  GetRoomPageStaticParamDocument,
  GetRoomPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetRoomPageStaticParamQuery>({
    query: GetRoomPageStaticParamDocument,
  })
  const rooms = data?.rooms
  if (rooms == null) {
    throw Error('Invalid response for GetRoomPageStaticParamQuery')
  }

  const paths = rooms.map((room) => ({
    params: {
      roomId: String(room.id),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: {
    roomId: string
  }
}) {
  const roomId = params.roomId

  return {
    props: {
      roomId,
    },
  }
}

export default function RoomPage({ roomId }: { roomId: string }) {
  const { data, loading } = useGetRoomPageQuery({
    variables: {
      roomId,
    },
  })

  if (loading) {
    return <>Loading...</>
  }

  const room = data?.room
  if (room == null) {
    return <>No such room found.</>
  }

  return (
    <>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label='breadcrumb'>
          <NextLink href='/' passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              Amaterus
            </MuiLink>
          </NextLink>
          <NextLink href='/room/' passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              部屋リスト
            </MuiLink>
          </NextLink>
          <Typography color='text.primary'>{room.name}</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          {room.name}
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          開催日時: {format(parseISO(room.startTime), 'yyyy-MM-dd HH:mm')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          告知
        </Typography>
        {room.roomTwitterAnnouncements.map((roomTwitterAnnouncement) => (
          <Box key={roomTwitterAnnouncement.id} sx={{ mt: 2 }}>
            <Tweet tweetId={roomTwitterAnnouncement.tweetId} />
          </Box>
        ))}
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          参加者
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {room.roomPersons.map((roomPerson) => (
                <TableRow
                  key={roomPerson.person.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink href={`/person/${roomPerson.person.id}/`} passHref legacyBehavior>
                      <MuiLink>{roomPerson.person.name}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          放送アーカイブ
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>タイトル</TableCell>
                <TableCell>放送者</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {room.roomYouTubeLives.map((youtubeLive) => (
                <TableRow
                  key={youtubeLive.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`https://www.youtube.com/watch?v=${youtubeLive.youtubeVideoId}`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{youtubeLive.title}</MuiLink>
                    </NextLink>
                  </TableCell>
                  <TableCell>
                    {youtubeLive.person != null ? (
                      <NextLink href={`/person/${youtubeLive.person.id}/`} passHref legacyBehavior>
                        <MuiLink>{youtubeLive.person.name}</MuiLink>
                      </NextLink>
                    ) : (
                      ''
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          試合
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>開始時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {room.matches.map((match) => (
                <TableRow key={match.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    {match.start_time != null ? (
                      <NextLink href={`/match/${match.id}/`} passHref legacyBehavior>
                        <MuiLink>
                          {format(parseISO(match.start_time), 'yyyy-MM-dd HH:mm:ss')}
                        </MuiLink>
                      </NextLink>
                    ) : (
                      ''
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}
