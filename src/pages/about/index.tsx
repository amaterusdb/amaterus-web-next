import {
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
  Breadcrumbs,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>サイト概要 - Amaterus</title>
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
          <Typography color='text.primary'>サイト概要</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          サイト概要
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト「Amaterus」は、ゲーム「Among Us」のプライベートゲームマッチに関する、
          個人運営のファンサイトです。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Innerslothおよびプライベートゲームマッチの運営元とは関係ありません。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          免責事項
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリのコンテンツは、可能な限り正確な情報を提供するよう努めていますが、
          情報の正確性、信頼性、完全性について保証するものではありません。
          このウェブサイト/アプリを利用することで生じるいかなる損害やトラブルについても責任を負いかねます。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリのコンテンツやデザインは予告なく変更されることがあります。
          また、技術的な問題やその他の都合により、このウェブサイト/アプリの提供を一時的または恒久的に中断することがあることをご了承ください。
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
              <TableCell>X (Twitter)</TableCell>
              <TableCell>
                <NextLink href='https://x.com/aoirint' passHref legacyBehavior>
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
