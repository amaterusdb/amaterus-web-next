import {
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import { GetIndexPageDocument, GetIndexPageQuery } from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export default function IndexPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Amaterus</title>
      </Head>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant='h4' component='h2'>
          Amaterus
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 2 }}>
          企画
        </Typography>
        <Box sx={{ mt: 2 }}>
          {projects === undefined ? (
            <Typography component='p'>読み込み中</Typography>
          ) : (
            <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>企画名</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects?.map((project) => (
                  <TableRow
                    key={project.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <NextLink href={`/project/${project.id}/`} passHref legacyBehavior>
                        <MuiLink>{project.name}</MuiLink>
                      </NextLink>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetIndexPageQuery>({
    query: GetIndexPageDocument,
  })

  const projects = data?.projects

  return {
    props: {
      projects,
    },
  }
}
