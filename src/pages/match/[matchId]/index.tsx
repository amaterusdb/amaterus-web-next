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
  const { data } = useGetMatchPageQuery({
    variables: {
      matchId,
    },
  })

  const match = data?.match

  return (
    <>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        {match != null ? (
          <>
            <Typography variant='h4' component='h2'>
              {match.room.name} {format(parseISO(match.startTime), 'yyyy-MM-dd HH:mm')}
            </Typography>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              放送アーカイブ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>放送タイトル</TableCell>
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
                      localStartTimeHours * 3600 +
                      localStartTimeMinutes * 60 +
                      localStartTimeSeconds

                    return (
                      <TableRow
                        key={roomYoutubeLive.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component='th' scope='row'>
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}`}
                            passHref
                          >
                            <MuiLink>{roomYoutubeLive.title}</MuiLink>
                          </NextLink>
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}&t=${localStartSeconds}s`}
                            passHref
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
          </>
        ) : (
          ''
        )}
      </Box>
    </>
  )
}
