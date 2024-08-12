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
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetFallguysMatchPageDocument,
  GetFallguysMatchPageQuery,
  GetFallguysMatchPageStaticParamDocument,
  GetFallguysMatchPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export default function FallguysMatchPage({
  fallguysMatch,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (fallguysMatch == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Fall guys match found.
      </Box>
    )
  }

  const program = fallguysMatch.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>
          マッチ/{format(parseISO(fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')} - 日程/
          {fallguysMatch.program.title} - Amaterus
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
          <NextLink href={`/program/${fallguysMatch.program.id}/`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              {fallguysMatch.program.title}
            </MuiLink>
          </NextLink>
          <Typography>マッチ</Typography>
          <Typography color='text.primary'>
            マッチ {format(parseISO(fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          マッチ {format(parseISO(fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {fallguysMatch.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {fallguysMatch.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(fallguysMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
            </TableBody>
          </Table>
        </Box>
        {fallguysMatch.fallguysMatchRounds.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              ラウンド
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>ラウンド</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fallguysMatch.fallguysMatchRounds.map((fallguysMatchRound, index) => (
                    <TableRow
                      key={fallguysMatchRound.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {fallguysMatchRound.fallguysRound != null ? (
                          <>{fallguysMatchRound.fallguysRound.name}</>
                        ) : (
                          ''
                        )}
                        {fallguysMatchRound.fallguysCustomRound != null ? (
                          <>{fallguysMatchRound.fallguysCustomRound.name}</>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {fallguysMatchRound.startTime != null ? (
                          <NextLink
                            href={`/fallguys_match_round/${fallguysMatchRound.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {format(
                                parseISO(fallguysMatchRound.startTime),
                                'yyyy-MM-dd HH:mm:ss',
                              )}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {fallguysMatchRound.endTime != null ? (
                          <>{format(parseISO(fallguysMatchRound.endTime), 'yyyy-MM-dd HH:mm:ss')}</>
                        ) : (
                          ''
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : (
          ''
        )}
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
              {fallguysMatch.program.programLiveArchives
                .filter(
                  (programLiveArchive) =>
                    programLiveArchive.startTime != null &&
                    !isBefore(
                      parseISO(fallguysMatch.startTime),
                      parseISO(programLiveArchive.startTime),
                    ),
                )
                .map((programLiveArchive) => {
                  const localStartTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(fallguysMatch.startTime),
                  })
                  const localEndTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(fallguysMatch.endTime),
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
                      <TableCell>
                        {programLiveArchive.youtubeLive != null ? (
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
                        {programLiveArchive.youtubeVideo != null ? (
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

export async function getStaticProps({
  params,
}: {
  params: {
    fallguysMatchId: string
  }
}) {
  const fallguysMatchId = params.fallguysMatchId
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetFallguysMatchPageQuery>({
    query: GetFallguysMatchPageDocument,
    variables: {
      fallguysMatchId,
    },
  })

  const fallguysMatch = data?.fallguysMatch

  return {
    props: {
      fallguysMatch,
    },
  }
}

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetFallguysMatchPageStaticParamQuery>({
    query: GetFallguysMatchPageStaticParamDocument,
  })
  const fallguysMatches = data?.fallguysMatches
  if (fallguysMatches == null) {
    throw Error('Invalid response for GetFallguysMatchPageStaticParamQuery')
  }

  const paths = fallguysMatches.map((fallguysMatch) => ({
    params: {
      fallguysMatchId: String(fallguysMatch.id),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
