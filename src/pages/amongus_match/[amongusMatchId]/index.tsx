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
  GetAmongusMatchPageDocument,
  GetAmongusMatchPageQuery,
  GetAmongusMatchPageStaticParamDocument,
  GetAmongusMatchPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export default function AmongusMatchPage({
  amongusMatch,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (amongusMatch == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Among Us match found.
      </Box>
    )
  }

  const program = amongusMatch.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

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
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {amongusMatch.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(amongusMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {amongusMatch.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(amongusMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}
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
              {amongusMatch.program.programLiveArchives
                .filter(
                  (programLiveArchive) =>
                    programLiveArchive.startTime != null &&
                    !isBefore(
                      parseISO(amongusMatch.startTime),
                      parseISO(programLiveArchive.startTime),
                    ),
                )
                .map((programLiveArchive) => {
                  const localStartTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(amongusMatch.startTime),
                  })
                  const localEndTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
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
    amongusMatchId: string
  }
}) {
  const amongusMatchId = params.amongusMatchId
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetAmongusMatchPageQuery>({
    query: GetAmongusMatchPageDocument,
    variables: {
      amongusMatchId,
    },
  })

  const amongusMatch = data?.amongusMatch

  return {
    props: {
      amongusMatch,
    },
  }
}

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
