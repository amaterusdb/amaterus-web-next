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
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetPersonPageStaticParamQuery,
  GetPersonPageStaticParamDocument,
  GetPersonPageQuery,
  GetPersonPageDocument,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export default function PersonPage({ person }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (person == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such person found.
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>人物/{person.name} - Amaterus</title>
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
          <Typography>人物</Typography>
          <Typography color='text.primary'>{person.name}</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          {person.name}
        </Typography>
        {person.personTwitterAccounts.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              X (Twitter)
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>アカウント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personTwitterAccounts.map((personTwitterAccount) => (
                    <TableRow
                      key={personTwitterAccount.twitterAccount.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://twitter.com/intent/user?user_id=${personTwitterAccount.twitterAccount.remoteTwitterUserId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>
                            @{personTwitterAccount.twitterAccount.twitterScreenName}
                          </MuiLink>
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
        {person.personFediverseAccounts.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Fediverse
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>アカウント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personFediverseAccounts.map((personFediverseAccount) => {
                    const fediverseAcct = personFediverseAccount.fediverseAccount.fediverseAcct // @example@example.com
                    const fediverseAcctSplit = fediverseAcct.split(/@/, 3)
                    const fediverseAcctUser = fediverseAcctSplit[1] ?? ''
                    const fediverseAcctDomain = fediverseAcctSplit[2] ?? ''

                    return (
                      <TableRow
                        key={personFediverseAccount.fediverseAccount.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component='th' scope='row'>
                          <NextLink
                            href={`https://${fediverseAcctDomain}/@${fediverseAcctUser}`}
                            passHref
                            legacyBehavior
                          >
                            <MuiLink>{fediverseAcct}</MuiLink>
                          </NextLink>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : (
          ''
        )}
        {person.personNiconicoAccounts.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              ニコニコ動画
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>アカウント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personNiconicoAccounts.map((personNiconicoAccount) => (
                    <TableRow
                      key={personNiconicoAccount.niconicoAccount.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://www.nicovideo.jp/user/${personNiconicoAccount.niconicoAccount.remoteNiconicoAccountId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personNiconicoAccount.niconicoAccount.name}</MuiLink>
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
        {person.personNiconicoCommunities.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              ニコニコミュニティ
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>コミュニティ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personNiconicoCommunities.map((personNiconicoCommunity) => (
                    <TableRow
                      key={personNiconicoCommunity.niconicoCommunity.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://com.nicovideo.jp/community/co${personNiconicoCommunity.niconicoCommunity.remoteNiconicoCommunityId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personNiconicoCommunity.niconicoCommunity.name}</MuiLink>
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
        {person.personNiconicoChannels.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              ニコニコチャンネル
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>チャンネル</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personNiconicoChannels.map((personNiconicoChannel) => (
                    <TableRow
                      key={personNiconicoChannel.niconicoChannel.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://ch.nicovideo.jp/${personNiconicoChannel.niconicoChannel.screenName}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personNiconicoChannel.niconicoChannel.name}</MuiLink>
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
        {person.personNiconicoPlusChannels.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              ニコニコチャンネル+
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>チャンネル</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personNiconicoPlusChannels.map((personNiconicoPlusChannel) => (
                    <TableRow
                      key={personNiconicoPlusChannel.niconicoPlusChannel.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://nicochannel.jp/${personNiconicoPlusChannel.niconicoPlusChannel.screenName}/`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personNiconicoPlusChannel.niconicoPlusChannel.name}</MuiLink>
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
        {person.personYoutubeChannels.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              YouTube
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>チャンネル</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personYoutubeChannels.map((personYoutubeChannel) => (
                    <TableRow
                      key={personYoutubeChannel.youtubeChannel.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://www.youtube.com/channel/${personYoutubeChannel.youtubeChannel.remoteYoutubeChannelId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personYoutubeChannel.youtubeChannel.name}</MuiLink>
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
        {person.personTwitchAccounts.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Twitch
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>チャンネル</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personTwitchAccounts.map((personTwitchAccounts) => (
                    <TableRow
                      key={personTwitchAccounts.twitchAccount.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://www.twitch.tv/${personTwitchAccounts.twitchAccount.screenName}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personTwitchAccounts.twitchAccount.name}</MuiLink>
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
        {person.personPixivAccounts.length > 0 ? (
          <>
            <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
              Pixiv
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>アカウント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personPixivAccounts.map((personPixivAccount) => (
                    <TableRow
                      key={personPixivAccount.pixivAccount.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <NextLink
                          href={`https://www.pixiv.net/users/${personPixivAccount.pixivAccount.remotePixivAccountId}`}
                          passHref
                          legacyBehavior
                        >
                          <MuiLink>{personPixivAccount.pixivAccount.name}</MuiLink>
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
      </Box>
    </>
  )
}

export async function getStaticProps({
  params,
}: {
  params: {
    personId: string
  }
}) {
  const personId = params.personId
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetPersonPageQuery>({
    query: GetPersonPageDocument,
    variables: {
      personId,
    },
  })

  const person = data?.person

  return {
    props: {
      person,
    },
  }
}

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetPersonPageStaticParamQuery>({
    query: GetPersonPageStaticParamDocument,
  })
  const persons = data?.persons
  if (persons == null) {
    throw Error('Invalid response for GetPersonPageStaticParamQuery')
  }

  const paths = persons.map((person) => ({
    params: {
      personId: String(person.id),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
