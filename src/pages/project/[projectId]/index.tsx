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
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import {
  GetProjectPageStaticParamDocument,
  GetProjectPageStaticParamQuery,
  GetProjectPageQuery,
  GetProjectPageDocument,
} from '@/generated/graphql'
import { createApolloClient } from '@/lib/apollo'

export default function ProjectPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
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
                    {programProject.program.startTime != null
                      ? format(parseISO(programProject.program.startTime), 'yyyy-MM-dd HH:mm')
                      : ''}
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

export async function getStaticProps({
  params,
}: {
  params: {
    projectId: string
  }
}) {
  const projectId = params.projectId
  const apolloClient = createApolloClient()

  const { data } = await apolloClient.query<GetProjectPageQuery>({
    query: GetProjectPageDocument,
    variables: {
      projectId,
    },
  })

  const project = data?.project

  return {
    props: {
      project,
    },
  }
}

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
