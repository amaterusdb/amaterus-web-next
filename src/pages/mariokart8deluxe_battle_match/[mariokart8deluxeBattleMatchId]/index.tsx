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
import { parseISO, format, intervalToDuration, isBefore } from 'date-fns'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetMariokart8deluxeBattleMatchPageStaticParamDocument,
  GetMariokart8deluxeBattleMatchPageStaticParamQuery,
  useGetMariokart8deluxeBattleMatchPageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetMariokart8deluxeBattleMatchPageStaticParamQuery>({
    query: GetMariokart8deluxeBattleMatchPageStaticParamDocument,
  })
  const mariokart8deluxeBattleMatches = data?.mariokart8deluxeBattleMatches
  if (mariokart8deluxeBattleMatches == null) {
    throw Error('Invalid response for GetMariokart8deluxeBattleMatchPageStaticParamQuery')
  }

  const paths = mariokart8deluxeBattleMatches.map((mariokart8deluxeBattleMatch) => ({
    params: {
      mariokart8deluxeBattleMatchId: String(mariokart8deluxeBattleMatch.id),
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
    mariokart8deluxeBattleMatchId: string
  }
}) {
  const mariokart8deluxeBattleMatchId = params.mariokart8deluxeBattleMatchId

  return {
    props: {
      mariokart8deluxeBattleMatchId,
    },
  }
}

export default function Mariokart8deluxeBattleMatchPage({
  mariokart8deluxeBattleMatchId,
}: {
  mariokart8deluxeBattleMatchId: string
}) {
  const { data, loading } = useGetMariokart8deluxeBattleMatchPageQuery({
    variables: {
      mariokart8deluxeBattleMatchId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const mariokart8deluxeBattleMatch = data?.mariokart8deluxeBattleMatch
  if (mariokart8deluxeBattleMatch == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Mariokart 8 Deluxe battle match found.
      </Box>
    )
  }

  const program = mariokart8deluxeBattleMatch.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>
          バトル/{format(parseISO(mariokart8deluxeBattleMatch.startTime), 'yyyy-MM-dd HH:mm:ss')} -
          日程/
          {mariokart8deluxeBattleMatch.program.title} - Amaterus
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
          <Typography>企画</Typography>
          {firstProject == null ? (
            <Typography>未設定</Typography>
          ) : (
            <NextLink href={`/project/${firstProject.id}/`} passHref legacyBehavior>
              <MuiLink underline='hover' color='inherit'>
                {firstProject.name}
              </MuiLink>
            </NextLink>
          )}
          <Typography>日程</Typography>
          <NextLink
            href={`/program/${mariokart8deluxeBattleMatch.program.id}/`}
            passHref
            legacyBehavior
          >
            <MuiLink underline='hover' color='inherit'>
              {mariokart8deluxeBattleMatch.program.title}
            </MuiLink>
          </NextLink>
          <Typography>バトル</Typography>
          <Typography color='text.primary'>
            バトル {format(parseISO(mariokart8deluxeBattleMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          バトル {format(parseISO(mariokart8deluxeBattleMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {mariokart8deluxeBattleMatch.mariokart8deluxeBattleRule != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    ルール
                  </TableCell>
                  <TableCell>
                    {mariokart8deluxeBattleMatch.mariokart8deluxeBattleRule.name}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    コース
                  </TableCell>
                  <TableCell>
                    {mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse.name}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {mariokart8deluxeBattleMatch.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(mariokart8deluxeBattleMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {mariokart8deluxeBattleMatch.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(mariokart8deluxeBattleMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
            </TableBody>
          </Table>
        </Box>
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
              {mariokart8deluxeBattleMatch.mariokart8deluxeBattleMatchPlayers.map(
                (mariokart8deluxeBattleMatchPlayer) => {
                  return (
                    <TableRow
                      key={mariokart8deluxeBattleMatchPlayer.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {mariokart8deluxeBattleMatchPlayer.person?.id != null ? (
                          <NextLink
                            href={`/person/${mariokart8deluxeBattleMatchPlayer.person.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{mariokart8deluxeBattleMatchPlayer.nickname}</MuiLink>
                          </NextLink>
                        ) : (
                          <>{mariokart8deluxeBattleMatchPlayer.nickname}</>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                },
              )}
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
                {mariokart8deluxeBattleMatch.endTime != null ? <TableCell>終了時間</TableCell> : ''}
              </TableRow>
            </TableHead>
            <TableBody>
              {mariokart8deluxeBattleMatch.program.programLiveArchives
                .filter(
                  (programLiveArchive) =>
                    programLiveArchive.startTime != null &&
                    !isBefore(
                      parseISO(mariokart8deluxeBattleMatch.startTime),
                      parseISO(programLiveArchive.startTime),
                    ),
                )
                .map((programLiveArchive) => {
                  const localStartTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(mariokart8deluxeBattleMatch.startTime),
                  })
                  const localEndTime =
                    mariokart8deluxeBattleMatch.endTime != null
                      ? intervalToDuration({
                          start: parseISO(programLiveArchive.startTime),
                          end: parseISO(mariokart8deluxeBattleMatch.endTime),
                        })
                      : null

                  const localStartTimeHours = localStartTime.hours ?? 0
                  const localStartTimeMinutes = localStartTime.minutes ?? 0
                  const localStartTimeSeconds = localStartTime.seconds ?? 0
                  const localStartTimeTotalSeconds =
                    localStartTimeHours * 3600 + localStartTimeMinutes * 60 + localStartTimeSeconds

                  const localEndTimeHours = localEndTime?.hours ?? 0
                  const localEndTimeMinutes = localEndTime?.minutes ?? 0
                  const localEndTimeSeconds = localEndTime?.seconds ?? 0
                  const localEndTimeTotalSeconds =
                    localEndTimeHours * 3600 + localEndTimeMinutes * 60 + localEndTimeSeconds

                  return (
                    <TableRow
                      key={programLiveArchive.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {programLiveArchive.youtubeLive != null ? (
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeLive.remoteYoutubeVideoId}`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{programLiveArchive.youtubeLive.title}</MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                        {programLiveArchive.youtubeVideo != null ? (
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeVideo.remoteYoutubeVideoId}`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{programLiveArchive.youtubeVideo.title}</MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {programLiveArchive.person != null ? (
                          <NextLink
                            href={`/person/${programLiveArchive.person.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{programLiveArchive.person.name}</MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {programLiveArchive.youtubeLive != null ? (
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeLive.remoteYoutubeVideoId}&t=${localStartTimeTotalSeconds}s`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {String(localStartTimeHours).padStart(2, '0')}:
                              {String(localStartTimeMinutes).padStart(2, '0')}:
                              {String(localStartTimeSeconds).padStart(2, '0')}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                        {programLiveArchive.youtubeVideo != null ? (
                          <NextLink
                            href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeVideo.remoteYoutubeVideoId}&t=${localStartTimeTotalSeconds}s`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {String(localStartTimeHours).padStart(2, '0')}:
                              {String(localStartTimeMinutes).padStart(2, '0')}:
                              {String(localStartTimeSeconds).padStart(2, '0')}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      {mariokart8deluxeBattleMatch.endTime != null ? (
                        <TableCell>
                          {programLiveArchive.youtubeLive != null && localEndTime != null ? (
                            <NextLink
                              href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeLive.remoteYoutubeVideoId}&t=${localEndTimeTotalSeconds}s`}
                              passHref
                              legacyBehavior
                            >
                              <MuiLink>
                                {String(localEndTimeHours).padStart(2, '0')}:
                                {String(localEndTimeMinutes).padStart(2, '0')}:
                                {String(localEndTimeSeconds).padStart(2, '0')}
                              </MuiLink>
                            </NextLink>
                          ) : (
                            ''
                          )}
                          {programLiveArchive.youtubeVideo != null && localEndTime != null ? (
                            <NextLink
                              href={`https://www.youtube.com/watch?v=${programLiveArchive.youtubeVideo.remoteYoutubeVideoId}&t=${localEndTimeTotalSeconds}s`}
                              passHref
                              legacyBehavior
                            >
                              <MuiLink>
                                {String(localEndTimeHours).padStart(2, '0')}:
                                {String(localEndTimeMinutes).padStart(2, '0')}:
                                {String(localEndTimeSeconds).padStart(2, '0')}
                              </MuiLink>
                            </NextLink>
                          ) : (
                            ''
                          )}
                        </TableCell>
                      ) : (
                        ''
                      )}
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
