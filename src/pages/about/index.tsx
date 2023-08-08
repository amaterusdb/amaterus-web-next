import {
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
  Breadcrumbs,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function AboutPage() {
  return (
    <>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label='breadcrumb'>
          <NextLink href='/' passHref legacyBehavior>
            <MuiLink underline='hover' color='inherit'>
              Amaterus
            </MuiLink>
          </NextLink>
          <Typography color='text.primary'>About</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          About
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Amaterusは、ゲーム「Among Us」のプライベートゲームマッチに関する、
          個人運営のファンサイトです。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Innerslothおよびプライベートゲームマッチの運営元とは関係ありません。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          免責事項
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This site is not affiliated with Among Us or Innersloth LLC and is not endorsed otherwise
          sponsored by Innersloth LLC. Portions of the materials contained herein are property of
          Innersloth LLC. © Innersloth LLC.
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          連絡先
        </Typography>
        <Table sx={{ minWidth: 650, mt: 2 }} size='small' aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>Twitter (X)</TableCell>
              <TableCell>
                <NextLink href='https://twitter.com/aoirint' passHref legacyBehavior>
                  <MuiLink>@aoirint</MuiLink>
                </NextLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>メール</TableCell>
              <TableCell>
                <NextLink href='mailto:aoirint@gmail.com' passHref legacyBehavior>
                  <MuiLink>aoirint@gmail.com</MuiLink>
                </NextLink>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </>
  )
}
