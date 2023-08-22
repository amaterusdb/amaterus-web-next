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
  useGetProjectPageQuery,
  GetProjectPageStaticParamDocument,
  GetProjectPageStaticParamQuery,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export async function getStaticPaths() {
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetProjectPageStaticParamQuery>({
    query: GetProjectPageStaticParamDocument,
  })
  const projects = data?.projects
  if (projects == null) {
    throw Error('Invalid response for GetProjectPageStaticParamQuery')
  }

  const paths = projects.map((project) => ({
    params: {
      projectId: String(project.id),
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
    projectId: string
  }
}) {
  const projectId = params.projectId

  return {
    props: {
      projectId,
    },
  }
}

export default function ProjectPage({ projectId }: { projectId: string }) {
  const { data, loading } = useGetProjectPageQuery({
    variables: {
      projectId,
    },
  })

  if (loading) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        Loading...
      </Box>
    )
  }

  const project = data?.project
  if (project == null) {
    return (
      <Box component='main' sx={{ p: 3 }}>
        No such project found.
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>企画/{project.name} - Amaterus</title>
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
          <Typography color='text.primary'>{project.name}</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          {project.name}
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 2 }}>
          日程
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
              {project.programProjects?.map((programProject) => (
                <TableRow
                  key={programProject.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <NextLink
                      href={`/program/${programProject.program.id}/`}
                      passHref
                      legacyBehavior
                    >
                      <MuiLink>{programProject.program.title}</MuiLink>
                    </NextLink>
                  </TableCell>
                  <TableCell>
                    {format(parseISO(programProject.program.startTime), 'yyyy-MM-dd HH:mm')}
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
