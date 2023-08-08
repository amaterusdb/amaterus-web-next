import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { GetMatchPageStaticParamDocument, GetMatchPageStaticParamQueryResult, useGetMatchPageQuery } from '@/generated/graphql'
import Link from 'next/link'
import { parseISO, format, intervalToDuration } from 'date-fns'
import { createApolloClient } from '@/lib/apollo'


export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetMatchPageStaticParamQueryResult>({
    query: GetMatchPageStaticParamDocument
  })
  const matches = data.data?.matches
  if (matches == null) {
    throw Error()
  }

  const paths = matches.map(match => ({
    params: {
      matchId: String(match.id),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function MatchPage({
  params
}: {
  params: {
    matchId: string
  }
}) {
  const { data } = useGetMatchPageQuery({
    variables: {
      matchId: params.matchId,
    },
  });

  const match = data?.match;

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {match != null ? (
          <>
            <Typography variant="h4" component="h2">
              {match.room.name} {format(parseISO(match.startTime), "yyyy-MM-dd HH:mm")}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
              放送アーカイブ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>放送タイトル</TableCell>
                    <TableCell>開始時間</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {match.room.roomYoutubeLives.map(roomYoutubeLive => {
                    const duration = intervalToDuration({
                      start: parseISO(roomYoutubeLive.startTime),
                      end: parseISO(match.startTime),
                    })

                    const localStartTimeHours = duration.hours ?? 0;
                    const localStartTimeMinutes = duration.minutes ?? 0;
                    const localStartTimeSeconds = duration.seconds ?? 0;
                    const localStartSeconds = localStartTimeHours * 3600 + localStartTimeMinutes * 60 + localStartTimeSeconds;

                    return (
                      <TableRow
                        key={roomYoutubeLive.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Link href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}`}>
                            {roomYoutubeLive.title}
                          </Link>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Link href={`https://www.youtube.com/watch?v=${roomYoutubeLive.youtubeVideoId}&t=${localStartSeconds}s`}>
                            {String(localStartTimeHours).padStart(2, "0")}:{String(localStartTimeMinutes).padStart(2, "0")}:{String(localStartTimeSeconds).padStart(2, "0")}
                          </Link>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : ""}
      </Box>
    </>
  )
}
