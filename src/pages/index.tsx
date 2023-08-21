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
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import { useGetIndexPageQuery } from '@/generated/graphql'

export default function IndexPage() {
  const { data } = useGetIndexPageQuery()
  const communities = data?.communities

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
          コミュニティリスト
        </Typography>
        <Box sx={{ mt: 2 }}>
          {communities === undefined ? (
            <Typography component='p'>読み込み中</Typography>
          ) : (
            <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>コミュニティ名</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {communities?.map((community) => (
                  <TableRow
                    key={community.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <NextLink href={`/community/${community.id}/`} passHref legacyBehavior>
                        <MuiLink>{community.name}</MuiLink>
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
