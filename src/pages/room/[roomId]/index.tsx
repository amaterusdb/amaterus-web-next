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
import Head from 'next/head'
import NextLink from 'next/link'
import Script from 'next/script'
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
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const room = data?.room
  if (room == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such room found.
      </Box>
    )
  }

  const roomCommunities = room.roomCommunities
  const firstCommunity = roomCommunities.length > 0 ? roomCommunities[0].community : null

  return (
    <>
      <Head>
        <title>部屋/{room.name} - Amaterus</title>
      </Head>
      <Script src='https://platform.twitter.com/widgets.js' strategy='lazyOnload' />
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label='breadcrumb'>
          <NextLink href='/' passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              Amaterus
            </MuiLink>
          </NextLink>
          <Typography>コミュニティ</Typography>
          {firstCommunity == null ? (
            <Typography>未設定</Typography>
          ) : (
            <NextLink href={`/community/${firstCommunity.id}/`} passHref legacyBehavior>
              <MuiLink underline='hover' color='inherit'>
                {firstCommunity.name}
              </MuiLink>
            </NextLink>
          )}
          <Typography>部屋</Typography>
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
          試合
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>開始日時</TableCell>
                <TableCell>終了日時</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {room.matches.map((match) => (
                <TableRow key={match.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    {match.startTime != null ? (
                      <NextLink href={`/match/${match.id}/`} passHref legacyBehavior>
                        <MuiLink>
                          {format(parseISO(match.startTime), 'yyyy-MM-dd HH:mm:ss')}
                        </MuiLink>
                      </NextLink>
                    ) : (
                      ''
                    )}
                  </TableCell>
                  <TableCell>
                    {match.endTime != null ? (
                      <>{format(parseISO(match.endTime), 'yyyy-MM-dd HH:mm:ss')}</>
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
          放送アーカイブ
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>放送タイトル</TableCell>
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
      </Box>
    </>
  )
}
