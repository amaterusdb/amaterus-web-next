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
} from '@mui/material'
import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'
import { useGetRoomListPageQuery } from '@/generated/graphql'

export default function RoomListPage() {
  const { data } = useGetRoomListPageQuery()
  const rooms = data?.rooms

  return (
    <>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant='h4' component='h2'>
          部屋リスト
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>部屋名</TableCell>
                <TableCell>開催日時</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms?.map((room) => (
                <>
                  <TableRow
                    key={room.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <NextLink href={`/room/${room.id}/`} passHref>
                        <MuiLink>{room.name}</MuiLink>
                      </NextLink>
                    </TableCell>
                    <TableCell>{format(parseISO(room.startTime), 'yyyy-MM-dd HH:mm')}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}
