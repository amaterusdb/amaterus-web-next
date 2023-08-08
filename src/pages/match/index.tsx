import { Box, Toolbar, Typography, Link as MuiLink, Breadcrumbs } from '@mui/material'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function MatchListPage() {
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
          <Typography color='text.primary'>試合リスト</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          試合リスト
        </Typography>
        <Typography sx={{ mt: 2 }}>未実装</Typography>
      </Box>
    </>
  )
}
