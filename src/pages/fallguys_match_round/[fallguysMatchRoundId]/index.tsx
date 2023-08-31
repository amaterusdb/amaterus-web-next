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
import Script from 'next/script'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Tweet } from '@/components/tweet'
import {
  GetFallguysMatchRoundPageStaticParamDocument,
  GetFallguysMatchRoundPageStaticParamQuery,
  useGetFallguysMatchRoundPageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetFallguysMatchRoundPageStaticParamQuery>({
    query: GetFallguysMatchRoundPageStaticParamDocument,
  })
  const fallguysMatchRounds = data?.fallguysMatchRounds
  if (fallguysMatchRounds == null) {
    throw Error('Invalid response for GetFallguysMatchRoundPageStaticParamQuery')
  }

  const paths = fallguysMatchRounds.map((fallguysMatchRound) => ({
    params: {
      fallguysMatchRoundId: String(fallguysMatchRound.id),
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
    fallguysMatchRoundId: string
  }
}) {
  const fallguysMatchRoundId = params.fallguysMatchRoundId

  return {
    props: {
      fallguysMatchRoundId,
    },
  }
}

export default function FallguysMatchRoundPage({
  fallguysMatchRoundId,
}: {
  fallguysMatchRoundId: string
}) {
  const { data, loading } = useGetFallguysMatchRoundPageQuery({
    variables: {
      fallguysMatchRoundId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const fallguysMatchRound = data?.fallguysMatchRound
  if (fallguysMatchRound == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Fall guys match round found.
      </Box>
    )
  }

  const program = fallguysMatchRound.fallguysMatch.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>
          ラウンド/{format(parseISO(fallguysMatchRound.startTime), 'yyyy-MM-dd HH:mm:ss')} - マッチ/
          {format(parseISO(fallguysMatchRound.fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')} -
          日程/
          {program.title} - Amaterus
        </title>
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
            href={`/program/${fallguysMatchRound.fallguysMatch.program.id}/`}
            passHref
            legacyBehavior
          >
            <MuiLink underline='hover' color='inherit'>
              {fallguysMatchRound.fallguysMatch.program.title}
            </MuiLink>
          </NextLink>
          <Typography>マッチ</Typography>
          <NextLink
            href={`/fallguys_match/${fallguysMatchRound.fallguysMatch.id}/`}
            passHref
            legacyBehavior
          >
            <MuiLink underline='hover' color='inherit'>
              マッチ{' '}
              {format(parseISO(fallguysMatchRound.fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
            </MuiLink>
          </NextLink>
          <Typography>ラウンド</Typography>
          <Typography color='text.primary'>
            ラウンド {format(parseISO(fallguysMatchRound.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          ラウンド {format(parseISO(fallguysMatchRound.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {fallguysMatchRound.fallguysRound != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    ラウンド
                  </TableCell>
                  <TableCell>{fallguysMatchRound.fallguysRound.name}</TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {fallguysMatchRound.fallguysCustomRound != null ? (
                <>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      ラウンド
                    </TableCell>
                    <TableCell>カスタムラウンド</TableCell>
                  </TableRow>
                </>
              ) : (
                ''
              )}
              {fallguysMatchRound.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(fallguysMatchRound.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {fallguysMatchRound.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(fallguysMatchRound.endTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
            </TableBody>
          </Table>
        </Box>

        {fallguysMatchRound.fallguysCustomRound != null ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              カスタムラウンド
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableBody>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      ラウンド
                    </TableCell>
                    <TableCell>{fallguysMatchRound.fallguysCustomRound.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      作者
                    </TableCell>
                    <TableCell>
                      {fallguysMatchRound.fallguysCustomRound.inGameCreatorName}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component='th' scope='row'>
                      共有コード
                    </TableCell>
                    <TableCell sx={{ fontFamily: 'Monospace' }}>
                      {fallguysMatchRound.fallguysCustomRound.shareCode}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {fallguysMatchRound.fallguysCustomRound.fallguysCustomRoundTwitterAnnouncements
                .length > 0 ? (
                <>
                  <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
                    告知
                  </Typography>
                </>
              ) : (
                ''
              )}
              {fallguysMatchRound.fallguysCustomRound.fallguysCustomRoundTwitterAnnouncements.map(
                (fallguysCustomRoundTwitterAnnouncement) => (
                  <Tweet
                    key={fallguysCustomRoundTwitterAnnouncement.twitterTweet.id}
                    tweetId={fallguysCustomRoundTwitterAnnouncement.twitterTweet.remoteTweetId}
                  />
                ),
              )}
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
              {fallguysMatchRound.fallguysMatch.program.programLiveArchives
                .filter(
                  (programLiveArchive) =>
                    programLiveArchive.startTime != null &&
                    !isBefore(
                      parseISO(fallguysMatchRound.startTime),
                      parseISO(programLiveArchive.startTime),
                    ),
                )
                .map((programLiveArchive) => {
                  const localStartTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(fallguysMatchRound.startTime),
                  })
                  const localEndTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(fallguysMatchRound.endTime),
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
