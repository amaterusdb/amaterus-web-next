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
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetPersonPageStaticParamQuery,
  useGetPersonPageQuery,
  GetPersonPageStaticParamDocument,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

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

export async function getStaticProps({
  params,
}: {
  params: {
    personId: string
  }
}) {
  const personId = params.personId

  return {
    props: {
      personId,
    },
  }
}

export default function PersonPage({ personId }: { personId: string }) {
  const { data, loading } = useGetPersonPageQuery({
    variables: {
      personId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const person = data?.person
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
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          Twitter (X)
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
                  key={personTwitterAccount.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`https://twitter.com/intent/user?user_id=${personTwitterAccount.twitter_user_id}`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>@{personTwitterAccount.twitter_screen_name}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
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
                const fediverseAcct = personFediverseAccount.fediverseAcct // @example@example.com
                const fediverseAcctSplit = fediverseAcct.split(/@/, 3)
                const fediverseAcctUser = fediverseAcctSplit[1] ?? ''
                const fediverseAcctDomain = fediverseAcctSplit[2] ?? ''

                return (
                  <TableRow
                    key={personFediverseAccount.id}
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
                  key={personNiconicoAccount.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`https://www.nicovideo.jp/user/${personNiconicoAccount.niconico_account_id}`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{personNiconicoAccount.name}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          ニコニコミュニティ
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>アカウント</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {person.personNiconicoCommunities.map((personNiconicoCommunity) => (
                <TableRow
                  key={personNiconicoCommunity.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`https://com.nicovideo.jp/community/co${personNiconicoCommunity.niconico_community_id}`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{personNiconicoCommunity.name}</MuiLink>
                    </NextLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
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
                  key={personYoutubeChannel.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`https://www.youtube.com/channel/${personYoutubeChannel.youtube_channel_id}`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{personYoutubeChannel.name}</MuiLink>
                    </NextLink>
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
