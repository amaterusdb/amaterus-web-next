import Button from '@mui/material/Button'
import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Toolbar } from '@mui/material'

export default function Rooms() {
  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
      </Box>
    </>
  )
}
