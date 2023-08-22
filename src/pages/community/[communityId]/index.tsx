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
  useGetCommunityPageQuery,
  GetCommunityPageStaticParamDocument,
  GetCommunityPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetCommunityPageStaticParamQuery>({
    query: GetCommunityPageStaticParamDocument,
  })
  const communities = data?.communities
  if (communities == null) {
    throw Error('Invalid response for GetCommunityPageStaticParamQuery')
  }

  const paths = communities.map((community) => ({
    params: {
      communityId: String(community.id),
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
    communityId: string
  }
}) {
  const communityId = params.communityId

  return {
    props: {
      communityId,
    },
  }
}

export default function CommunityPage({ communityId }: { communityId: string }) {
  const { data, loading } = useGetCommunityPageQuery({
    variables: {
      communityId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const community = data?.community
  if (community == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such community found.
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>コミュニティ/{community.name} - Amaterus</title>
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
          <Typography>コミュニティ</Typography>
          <Typography color='text.primary'>{community.name}</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          {community.name}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 2 }}>
          スケジュール
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>タイトル</TableCell>
                <TableCell>開催日時</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {community.programCommunities?.map((programCommunity) => (
                <TableRow
                  key={programCommunity.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`/program/${programCommunity.program.id}/`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{programCommunity.program.title}</MuiLink>
                    </NextLink>
                  </TableCell>
                  <TableCell>
                    {format(parseISO(programCommunity.program.startTime), 'yyyy-MM-dd HH:mm')}
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
