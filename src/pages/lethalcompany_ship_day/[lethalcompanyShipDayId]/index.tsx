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
  GetLethalcompanyShipDayPageStaticParamDocument,
  GetLethalcompanyShipDayPageStaticParamQuery,
  useGetLethalcompanyShipDayPageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetLethalcompanyShipDayPageStaticParamQuery>({
    query: GetLethalcompanyShipDayPageStaticParamDocument,
  })
  const lethalcompanyShipDays = data?.lethalcompanyShipDays
  if (lethalcompanyShipDays == null) {
    throw Error('Invalid response for GetLethalcompanyShipDayPageStaticParamQuery')
  }

  const paths = lethalcompanyShipDays.map((lethalcompanyShipDay) => ({
    params: {
      lethalcompanyShipDayId: String(lethalcompanyShipDay.id),
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
    lethalcompanyShipDayId: string
  }
}) {
  const lethalcompanyShipDayId = params.lethalcompanyShipDayId

  return {
    props: {
      lethalcompanyShipDayId,
    },
  }
}

export default function LethalcompanyShipDayPage({
  lethalcompanyShipDayId,
}: {
  lethalcompanyShipDayId: string
}) {
  const { data, loading } = useGetLethalcompanyShipDayPageQuery({
    variables: {
      lethalcompanyShipDayId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const lethalcompanyShipDay = data?.lethalcompanyShipDay
  if (lethalcompanyShipDay == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Lethal Company ship day found.
      </Box>
    )
  }

  const program = lethalcompanyShipDay.lethalcompanyShip.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>
          航海日/{format(parseISO(lethalcompanyShipDay.startTime), 'yyyy-MM-dd HH:mm:ss')} - 日程/
          {program.title} - Amaterus
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
          <NextLink href={`/program/${program.id}/`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              {program.title}
            </MuiLink>
          </NextLink>
          <Typography>航海日</Typography>
          <Typography color='text.primary'>
            航海日 {format(parseISO(lethalcompanyShipDay.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          航海日 {format(parseISO(lethalcompanyShipDay.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {lethalcompanyShipDay.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(lethalcompanyShipDay.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {lethalcompanyShipDay.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(lethalcompanyShipDay.endTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              <TableRow>
                <TableCell component='th' scope='row'>
                  相対日数
                </TableCell>
                <TableCell>
                  {lethalcompanyShipDay.dayNumber}-{lethalcompanyShipDay.subDayNumber}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row'>
                  ゲーム内日数
                </TableCell>
                <TableCell>
                  {lethalcompanyShipDay.absoluteDayNumber}-{lethalcompanyShipDay.subDayNumber}
                </TableCell>
              </TableRow>
              {lethalcompanyShipDay.lethalcompanyMap != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    マップ
                  </TableCell>
                  <TableCell>{lethalcompanyShipDay.lethalcompanyMap.name}</TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {lethalcompanyShipDay.lethalcompanyWeather != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    天候
                  </TableCell>
                  <TableCell>{lethalcompanyShipDay.lethalcompanyWeather.name}</TableCell>
                </TableRow>
              ) : (
                ''
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
                <TableCell>終了時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {program.programLiveArchives
                .filter(
                  (programLiveArchive) =>
                    programLiveArchive.startTime != null &&
                    !isBefore(
                      parseISO(lethalcompanyShipDay.startTime),
                      parseISO(programLiveArchive.startTime),
                    ),
                )
                .map((programLiveArchive) => {
                  const localStartTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(lethalcompanyShipDay.startTime),
                  })
                  const localEndTime = intervalToDuration({
                    start: parseISO(programLiveArchive.startTime),
                    end: parseISO(lethalcompanyShipDay.endTime),
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
