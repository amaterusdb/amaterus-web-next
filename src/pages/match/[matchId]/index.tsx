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
import { parseISO, format, intervalToDuration } from 'date-fns'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetMatchPageStaticParamDocument,
  GetMatchPageStaticParamQuery,
  useGetMatchPageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetMatchPageStaticParamQuery>({
    query: GetMatchPageStaticParamDocument,
  })
  const matches = data?.matches
  if (matches == null) {
    throw Error('Invalid response for GetMatchPageStaticParamQuery')
  }

  const paths = matches.map((match) => ({
    params: {
      matchId: String(match.id),
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
    matchId: string
  }
}) {
  const matchId = params.matchId

  return {
    props: {
      matchId,
    },
  }
}

export default function MatchPage({ matchId }: { matchId: string }) {
  const { data, loading } = useGetMatchPageQuery({
    variables: {
      matchId,
    },
  })

  if (loading) {
    return <>Loading...</>
  }

  const match = data?.match
  if (match == null) {
    return <>No such match found.</>
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
          <NextLink href={`/room/${match.room.id}/`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              {match.room.name}
            </MuiLink>
          </NextLink>
          <NextLink href={`/room/${match.room.id}/#matches`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              試合リスト
            </MuiLink>
          </NextLink>
          <Typography color='text.primary'>
            試合 {format(parseISO(match.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          試合 {format(parseISO(match.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          プレイヤー
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {match.matchPlayers.map((matchPlayer) => {
                return (
                  <TableRow
                    key={matchPlayer.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {matchPlayer.person?.id != null ? (
                        <NextLink
                          href={`/person/${matchPlayer.person.id}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{matchPlayer.nickname}</MuiLink>
                        </NextLink>
                      ) : (
                        <>{matchPlayer.nickname}</>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
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
                <TableCell>開始時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {match.room.roomYoutubeLives.map((roomYoutubeLive) => {
                const duration = intervalToDuration({
                  start: parseISO(roomYoutubeLive.startTime),
                  end: parseISO(match.startTime),
                })

                const localStartTimeHours = duration.hours ?? 0
                const localStartTimeMinutes = duration.minutes ?? 0
                const localStartTimeSeconds = duration.seconds ?? 0
                const localStartSeconds =
                  localStartTimeHours * 3600 + localStartTimeMinutes * 60 + localStartTimeSeconds

                return (
                  <TableRow
                    key={roomYoutubeLive.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <NextLink
                        href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}`}
                        passHref
                        legacyBehavior
                      >
                        <MuiLink>{roomYoutubeLive.title}</MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      {roomYoutubeLive.person != null ? (
                        <NextLink
                          href={`/person/${roomYoutubeLive.person.id}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{roomYoutubeLive.person.name}</MuiLink>
                        </NextLink>
                      ) : (
                        ''
                      )}
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      <NextLink
                        href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}&t=${localStartSeconds}s`}
                        passHref
                        legacyBehavior
                      >
                        <MuiLink>
                          {String(localStartTimeHours).padStart(2, '0')}:
                          {String(localStartTimeMinutes).padStart(2, '0')}:
                          {String(localStartTimeSeconds).padStart(2, '0')}
                        </MuiLink>
                      </NextLink>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}
