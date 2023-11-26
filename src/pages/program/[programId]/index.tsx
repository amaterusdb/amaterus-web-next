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

  const mariokart8deluxeRaceEndTimeVisible = !program.mariokart8deluxeRaces.every(
    (mariokart8deluxeRace) => mariokart8deluxeRace.endTime == null,
  )

  const mariokart8deluxeBattleMatchEndTimeVisible = !program.mariokart8deluxeBattleMatches.every(
    (mariokart8deluxeBattleMatch) => mariokart8deluxeBattleMatch.endTime == null,
  )

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
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          基本情報
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableBody>
              {program.game != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    ゲーム
                  </TableCell>
                  <TableCell>{program.game.name}</TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {program.startTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    開始日時
                  </TableCell>
                  <TableCell>
                    {format(parseISO(program.startTime), 'yyyy-MM-dd HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ) : (
                ''
              )}
              {program.endTime != null ? (
                <TableRow>
                  <TableCell component='th' scope='row'>
                    終了日時
                  </TableCell>
                  <TableCell>{format(parseISO(program.endTime), 'yyyy-MM-dd HH:mm:ss')}</TableCell>
                </TableRow>
              ) : (
                ''
              )}
            </TableBody>
          </Table>
        </Box>
        {program.programTwitterAnnouncements.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              告知
            </Typography>
            {program.programTwitterAnnouncements.map((programTwitterAnnouncement) => (
              <Box key={programTwitterAnnouncement.twitterTweet.id} sx={{ mt: 2 }}>
                <Tweet tweetId={programTwitterAnnouncement.twitterTweet.remoteTweetId} />
              </Box>
            ))}
          </>
        ) : (
          ''
        )}
        {program.programPersons.length > 0 ? (
          <>
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
                        <NextLink
                          href={`/person/${programPerson.person.id}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{programPerson.person.name}</MuiLink>
                        </NextLink>
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
        {program.amongusMatches.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Among Us
            </Typography>
            <Typography variant='h6' component='h4' sx={{ mt: 1 }}>
              試合
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.amongusMatches.map((amongusMatch, index) => (
                    <TableRow
                      key={amongusMatch.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
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
        {program.amongusvrMatches.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Among Us VR
            </Typography>
            <Typography variant='h6' component='h4' sx={{ mt: 1 }}>
              試合
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.amongusvrMatches.map((amongusvrMatch, index) => (
                    <TableRow
                      key={amongusvrMatch.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {amongusvrMatch.startTime != null ? (
                          <NextLink
                            href={`/amongusvr_match/${amongusvrMatch.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {format(parseISO(amongusvrMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {amongusvrMatch.endTime != null ? (
                          <>{format(parseISO(amongusvrMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}</>
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
        {program.fallguysMatches.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Fall Guys
            </Typography>
            <Typography variant='h6' component='h4' sx={{ mt: 1 }}>
              マッチ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>最初のラウンド</TableCell>
                    <TableCell>開始日時</TableCell>
                    <TableCell>終了日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.fallguysMatches.map((fallguysMatch, index) => (
                    <TableRow
                      key={fallguysMatch.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {fallguysMatch.fallguysMatchRounds.length > 0 ? (
                          <>
                            {fallguysMatch.fallguysMatchRounds[0].fallguysRound != null ? (
                              <>{fallguysMatch.fallguysMatchRounds[0].fallguysRound.name}</>
                            ) : (
                              ''
                            )}
                            {fallguysMatch.fallguysMatchRounds[0].fallguysCustomRound != null ? (
                              <>{fallguysMatch.fallguysMatchRounds[0].fallguysCustomRound.name}</>
                            ) : (
                              ''
                            )}
                          </>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {fallguysMatch.startTime != null ? (
                          <NextLink
                            href={`/fallguys_match/${fallguysMatch.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>
                              {format(parseISO(fallguysMatch.startTime), 'yyyy-MM-dd HH:mm:ss')}
                            </MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {fallguysMatch.endTime != null ? (
                          <>{format(parseISO(fallguysMatch.endTime), 'yyyy-MM-dd HH:mm:ss')}</>
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
        {program.mariokart8deluxeRaces.length > 0 ||
        program.mariokart8deluxeBattleMatches.length > 0 ? (
          <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
            マリオカート8 デラックス
          </Typography>
        ) : (
          ''
        )}
        {program.mariokart8deluxeRaces.length > 0 ? (
          <>
            <Typography variant='h6' component='h4' sx={{ mt: 1 }}>
              レース
            </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>ルール</TableCell>
                    <TableCell>コース</TableCell>
                    <TableCell>開始日時</TableCell>
                    {mariokart8deluxeRaceEndTimeVisible ? <TableCell>終了日時</TableCell> : ''}
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
                        {mariokart8deluxeRace.mariokart8deluxeRaceRule != null ? (
                          <>{mariokart8deluxeRace.mariokart8deluxeRaceRule.name}</>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {mariokart8deluxeRace.mariokart8deluxeCourse != null ? (
                          <>
                            {mariokart8deluxeRace.mariokart8deluxeCourse.mariokart8deluxeConsole !=
                            null ? (
                              <>
                                {
                                  mariokart8deluxeRace.mariokart8deluxeCourse
                                    .mariokart8deluxeConsole.name
                                }{' '}
                              </>
                            ) : (
                              ''
                            )}
                            {mariokart8deluxeRace.mariokart8deluxeCourse.name}
                          </>
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
                      {mariokart8deluxeRaceEndTimeVisible ? (
                        <TableCell>
                          {mariokart8deluxeRace.endTime != null ? (
                            <>
                              {format(
                                parseISO(mariokart8deluxeRace.endTime),
                                'yyyy-MM-dd HH:mm:ss',
                              )}
                            </>
                          ) : (
                            ''
                          )}
                        </TableCell>
                      ) : (
                        ''
                      )}
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
            <Typography variant='h6' component='h4' sx={{ mt: 1 }}>
              バトル
            </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>番号</TableCell>
                    <TableCell>ルール</TableCell>
                    <TableCell>コース</TableCell>
                    <TableCell>開始日時</TableCell>
                    {mariokart8deluxeBattleMatchEndTimeVisible ? (
                      <TableCell>終了日時</TableCell>
                    ) : (
                      ''
                    )}
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
                            <>
                              {mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse
                                .mariokart8deluxeConsole != null ? (
                                <>
                                  {
                                    mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse
                                      .mariokart8deluxeConsole.name
                                  }{' '}
                                </>
                              ) : (
                                ''
                              )}
                              {mariokart8deluxeBattleMatch.mariokart8deluxeBattleCourse.name}
                            </>
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
                        {mariokart8deluxeBattleMatchEndTimeVisible ? (
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
                        ) : (
                          ''
                        )}
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
        {program.programNiconicoVideos.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              動画
            </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>タイトル</TableCell>
                    <TableCell>投稿者</TableCell>
                    <TableCell>投稿日時</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {program.programNiconicoVideos.map((programNiconicoVideo) => (
                    <TableRow
                      key={programNiconicoVideo.niconicoVideo.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <NextLink
                          href={`https://www.nicovideo.jp/watch/${programNiconicoVideo.niconicoVideo.remoteNiconicoContentId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{programNiconicoVideo.niconicoVideo.title}</MuiLink>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        {programNiconicoVideo.person != null ? (
                          <NextLink
                            href={`/person/${programNiconicoVideo.person.id}/`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{programNiconicoVideo.person.name}</MuiLink>
                          </NextLink>
                        ) : (
                          ''
                        )}
                      </TableCell>
                      <TableCell>
                        {format(
                          parseISO(programNiconicoVideo.niconicoVideo.startTime),
                          'yyyy-MM-dd HH:mm:ss',
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
        {program.programLiveArchives.length > 0 ? (
          <>
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
                  {program.programLiveArchives.map((programLiveArchive) => (
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
                        {programLiveArchive.niconicoLive != null ? (
                          <NextLink
                            href={`https://live.nicovideo.jp//watch/${programLiveArchive.niconicoLive.remoteNiconicoContentId}`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{programLiveArchive.niconicoLive.title}</MuiLink>
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
                    </TableRow>
                  ))}
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
