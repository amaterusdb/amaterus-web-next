import { Box, Toolbar, Typography, Link as MuiLink, Breadcrumbs } from '@mui/material'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography color='text.primary'>Amaterus</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          Amaterus
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <NextLink href='/room/' passHref legacyBehavior>
            <MuiLink>部屋リスト</MuiLink>
          </NextLink>
        </Typography>
      </Box>
    </>
  )
}
