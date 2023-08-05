import Button from '@mui/material/Button'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Toolbar, Typography } from '@mui/material'

export default function Rooms() {
  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h4" component="h2">
          Room List
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained">Hello World</Button>
        </Box>
      </Box>
    </>
  )
}
