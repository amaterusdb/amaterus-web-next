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
import { parseISO, format } from 'date-fns'
import Head from 'next/head'
import NextLink from 'next/link'
import Script from 'next/script'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Tweet } from '@/components/tweet'
import {
  useGetProgramPageQuery,
  GetProgramPageStaticParamDocument,
  GetProgramPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetProgramPageStaticParamQuery>({
    query: GetProgramPageStaticParamDocument,
  })
  const programs = data?.programs
  if (programs == null) {
    throw Error('Invalid response for GetProgramPageStaticParamQuery')
  }

  const paths = programs.map((program) => ({
    params: {
      programId: String(program.id),
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
    programId: string
  }
}) {
  const programId = params.programId

  return {
    props: {
      programId,
    },
  }
}

export default function ProgramPage({ programId }: { programId: string }) {
  const { data, loading } = useGetProgramPageQuery({
    variables: {
      programId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const program = data?.program
  if (program == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such program found.
      </Box>
    )
  }

  const programProjects = program.programProjects
  const firstProject = programProjects.length > 0 ? programProjects[0].project : null

  return (
    <>
      <Head>
        <title>日程/{program.title} - Amaterus</title>
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
          <Typography color='text.primary'>{program.title}</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          {program.title}
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          開催日時: {format(parseISO(program.startTime), 'yyyy-MM-dd HH:mm')}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          告知
        </Typography>
        {program.programTwitterAnnouncements.map((programTwitterAnnouncement) => (
          <Box key={programTwitterAnnouncement.twitterTweet.id} sx={{ mt: 2 }}>
            <Tweet tweetId={programTwitterAnnouncement.twitterTweet.remoteTweetId} />
          </Box>
        ))}
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          参加者
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>名前</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {program.programPersons.map((programPerson) => (
                <TableRow
                  key={programPerson.person.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink href={`/person/${programPerson.person.id}/`} passHref legacyBehavior>
                      <MuiLink>{programPerson.person.name}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        {program.amongusMatches.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              試合
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.amongusMatches.map((amongusMatch) => (
                    <TableRow
                      key={amongusMatch.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        {amongusMatch.startTime != null ? (
                          <NextLink
                            href={`/amongus_match/${amongusMatch.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {format(parseISO(amongusMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {amongusMatch.endTime != null ? (
                          <>{format(parseISO(amongusMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}</>
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
        {program.mariokart8deluxeRaces.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              レース
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>コース</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.mariokart8deluxeRaces.map((mariokart8deluxeRace, index) => (
                    <TableRow
                      key={mariokart8deluxeRace.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {mariokart8deluxeRace.mariokart8deluxeCourse != null ? (
                          <>{mariokart8deluxeRace.mariokart8deluxeCourse.name}</>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {mariokart8deluxeRace.startTime != null ? (
                          <NextLink
                            href={`/mariokart8deluxe_race/${mariokart8deluxeRace.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {format(
                                parseISO(mariokart8deluxeRace.startTime),
                                'yyyy-MM-dd HH:mm:ss',
                              )}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {mariokart8deluxeRace.endTime != null ? (
                          <>
                            {format(parseISO(mariokart8deluxeRace.endTime), 'yyyy-MM-dd HH:mm:ss')}
                          </>
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
        {program.mariokart8deluxeBattleMatches.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              バトル
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>ルール</TableCell>
                    <TableCell>コース</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.mariokart8deluxeBattleMatches.map(
                    (mariokart8deluxeBattleMatch, index) => (
                      <TableRow
                        key={mariokart8deluxeBattleMatch.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          {mariokart8deluxeBattleMatch.mariokart8deluxeBattleRule != null ? (
                            <>{mariokart8deluxeBattleMatch.mariokart8deluxeBattleRule.name}</>
                          ) : (
                            ''
                          )}
                        </TableCell>
                        <TableCell>
                          {mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse != null ? (
                            <>{mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse.name}</>
                          ) : (
                            ''
                          )}
                        </TableCell>
                        <TableCell>
                          {mariokart8deluxeBattleMatch.startTime != null ? (
                            <NextLink
                              href={`/mariokart8deluxe_battle_match/${mariokart8deluxeBattleMatch.id}/`}
                              passHref
                              legacyBehavior
                            >
                              <MuiLink>
                                {format(
                                  parseISO(mariokart8deluxeBattleMatch.startTime),
                                  'yyyy-MM-dd HH:mm:ss',
                                )}
                              </MuiLink>
                            </NextLink>
                          ) : (
                            ''
                          )}
                        </TableCell>
                        <TableCell>
                          {mariokart8deluxeBattleMatch.endTime != null ? (
                            <>
                              {format(
                                parseISO(mariokart8deluxeBattleMatch.endTime),
                                'yyyy-MM-dd HH:mm:ss',
                              )}
                            </>
                          ) : (
                            ''
                          )}
                        </TableCell>
                      </TableRow>
                    ),
                  )}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {program.programYouTubeLives.map((programYoutubeLive) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}