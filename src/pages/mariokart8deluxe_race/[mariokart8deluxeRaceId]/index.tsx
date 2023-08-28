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
  GetMariokart8deluxeRacePageStaticParamDocument,
  GetMariokart8deluxeRacePageStaticParamQuery,
  useGetMariokart8deluxeRacePageQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetMariokart8deluxeRacePageStaticParamQuery>({
    query: GetMariokart8deluxeRacePageStaticParamDocument,
  })
  const mariokart8deluxeRaces = data?.mariokart8deluxeRaces
  if (mariokart8deluxeRaces == null) {
    throw Error('Invalid response for GetMatchPageStaticParamQuery')
  }

  const paths = mariokart8deluxeRaces.map((mariokart8deluxeRace) => ({
    params: {
      mariokart8deluxeRaceId: String(mariokart8deluxeRace.id),
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
    mariokart8deluxeRaceId: string
  }
}) {
  const mariokart8deluxeRaceId = params.mariokart8deluxeRaceId

  return {
    props: {
      mariokart8deluxeRaceId,
    },
  }
}

export default function MatchPage({ mariokart8deluxeRaceId }: { mariokart8deluxeRaceId: string }) {
  const { data, loading } = useGetMariokart8deluxeRacePageQuery({
    variables: {
      mariokart8deluxeRaceId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const mariokart8deluxeRace = data?.mariokart8deluxeRace
  if (mariokart8deluxeRace == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such Mariokart 8 Deluxe race found.
      </Box>
    )
  }

  const program = mariokart8deluxeRace.program
  const programProjects = program?.programProjects ?? []
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>
          レース/{format(parseISO(mariokart8deluxeRace.startTime), 'yyyy-MM-dd HH:mm:ss')} - 日程/
          {mariokart8deluxeRace.program.title} - Amaterus
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
          <NextLink href={`/program/${mariokart8deluxeRace.program.id}/`} passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              {mariokart8deluxeRace.program.title}
            </MuiLink>
          </NextLink>
          <Typography>レース</Typography>
          <Typography color='text.primary'>
            レース {format(parseISO(mariokart8deluxeRace.startTime), 'yyyy-MM-dd HH:mm:ss')}
          </Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          レース {format(parseISO(mariokart8deluxeRace.startTime), 'yyyy-MM-dd HH:mm:ss')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {mariokart8deluxeRace.mariokart8deluxeCourse != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    コース
                  </TableCell>
                  <TableCell>{mariokart8deluxeRace.mariokart8deluxeCourse.name}</TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {mariokart8deluxeRace.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(mariokart8deluxeRace.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {mariokart8deluxeRace.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(mariokart8deluxeRace.endTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
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
              {mariokart8deluxeRace.program.programYoutubeLives.map((programYoutubeLive) => {
                const localStartTime = intervalToDuration({
                  start: parseISO(programYoutubeLive.youtubeLive.startTime),
                  end: parseISO(mariokart8deluxeRace.startTime),
                })
                const localEndTime = intervalToDuration({
                  start: parseISO(programYoutubeLive.youtubeLive.startTime),
                  end: parseISO(mariokart8deluxeRace.endTime),
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
