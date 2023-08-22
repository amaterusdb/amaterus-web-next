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
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetAmongusMatchPageStaticParamDocument,
  GetAmongusMatchPageStaticParamQuery,
  useGetAmongusMatchPageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetAmongusMatchPageStaticParamQuery>({
    query: GetAmongusMatchPageStaticParamDocument,
  })
  const amongusMatches = data?.amongusMatches
  if (amongusMatches == null) {
    throw Error('Invalid response for GetMatchPageStaticParamQuery')
  }

  const paths = amongusMatches.map((amongusMatch) => ({
    params: {
      amongusMatchId: String(amongusMatch.id),
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
    amongusMatchId: string
  }
}) {
  const amongusMatchId = params.amongusMatchId

  return {
    props: {
      amongusMatchId,
    },
  }
}

export default function MatchPage({ amongusMatchId }: { amongusMatchId: string }) {
  const { data, loading } = useGetAmongusMatchPageQuery({
    variables: {
      amongusMatchId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const amongusMatch = data?.amongusMatch
  if (amongusMatch == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Among Us match found.
      </Box>
    )
  }

  const program = amongusMatch.program
  const programCommunities = program?.programCommunities ?? []
  const firstCommunity = programCommunities.length > 0 ? programCommunities[0].community : null

  return (
    <>
      <Head>
        <title>
          試合/{format(parseISO(amongusMatch.startTime), 'yyyy-MM-dd HH:mm:ss')} - 日程/
          {amongusMatch.program.title} - Amaterus
        </title>
      </Head>
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
          <Typography>日程</Typography>
          <NextLink href={`/program/${amongusMatch.program.id}/`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              {amongusMatch.program.title}
            </MuiLink>
          </NextLink>
          <Typography>試合</Typography>
          <Typography color='text.primary'>
            試合 {format(parseISO(amongusMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          試合 {format(parseISO(amongusMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
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
              {amongusMatch.amongusMatchPlayers.map((amongusMatchPlayer) => {
                return (
                  <TableRow
                    key={amongusMatchPlayer.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {amongusMatchPlayer.person?.id != null ? (
                        <NextLink
                          href={`/person/${amongusMatchPlayer.person.id}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{amongusMatchPlayer.nickname}</MuiLink>
                        </NextLink>
                      ) : (
                        <>{amongusMatchPlayer.nickname}</>
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
                <TableCell>終了時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amongusMatch.program.programYoutubeLives.map((programYoutubeLive) => {
                const localStartTime = intervalToDuration({
                  start: parseISO(programYoutubeLive.youtubeLive.startTime),
                  end: parseISO(amongusMatch.startTime),
                })
                const localEndTime = intervalToDuration({
                  start: parseISO(programYoutubeLive.youtubeLive.startTime),
                  end: parseISO(amongusMatch.endTime),
                })

                const localStartTimeHours = localStartTime.hours ?? 0
                const localStartTimeMinutes = localStartTime.minutes ?? 0
                const localStartTimeSeconds = localStartTime.seconds ?? 0
                const localStartTimeTotalSeconds =
                  localStartTimeHours * 3600 + localStartTimeMinutes * 60 + localStartTimeSeconds

                const localEndTimeHours = localEndTime.hours ?? 0
                const localEndTimeMinutes = localEndTime.minutes ?? 0
                const localEndTimeSeconds = localEndTime.seconds ?? 0
                const localEndTimeTotalSeconds =
                  localEndTimeHours * 3600 + localEndTimeMinutes * 60 + localEndTimeSeconds

                return (
                  <TableRow
                    key={programYoutubeLive.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <NextLink
                        href={`https://www.youtube.com/watch?v=${programYoutubeLive.youtubeLive.remoteYoutubeVideoId}`}
                        passHref
                        legacyBehavior
                      >
                        <MuiLink>{programYoutubeLive.youtubeLive.title}</MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>
                      {programYoutubeLive.person != null ? (
                        <NextLink
                          href={`/person/${programYoutubeLive.person.id}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{programYoutubeLive.person.name}</MuiLink>
                        </NextLink>
                      ) : (
                        ''
                      )}
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      <NextLink
                        href={`https://www.youtube.com/watch?v=${programYoutubeLive.youtubeLive.remoteYoutubeVideoId}&t=${localStartTimeTotalSeconds}s`}
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
                    <TableCell component='th' scope='row'>
                      <NextLink
                        href={`https://www.youtube.com/watch?v=${programYoutubeLive.youtubeLive.remoteYoutubeVideoId}&t=${localEndTimeTotalSeconds}s`}
                        passHref
                        legacyBehavior
                      >
                        <MuiLink>
                          {String(localEndTimeHours).padStart(2, '0')}:
                          {String(localEndTimeMinutes).padStart(2, '0')}:
                          {String(localEndTimeSeconds).padStart(2, '0')}
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
