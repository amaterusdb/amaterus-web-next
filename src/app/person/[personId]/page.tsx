"use client"

import DrawerAppBar from '@/components/drawer_app_bar'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { useGetPersonPageQuery } from '@/generated/graphql'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'


export default function PersonPage({
  params
}: {
  params: {
    personId: string
  }
}) {
  const { data } = useGetPersonPageQuery({
    variables: {
      personId: params.personId,
    },
  });

  const person = data?.person;

  return (
    <>
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {person != null ? (
          <>
            <Typography variant="h4" component="h2">
              {person.name}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ mt: 3 }}>
              Twitter
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>アカウント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {person.personTwitterAccounts.map(personTwitterAccount => ((
                    <TableRow
                      key={personTwitterAccount.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Link href={`https://twitter.com/intent/user?user_id=${personTwitterAccount.twitter_user_id}`}>
                          @{personTwitterAccount.twitter_screen_name}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )))}
                </TableBody>
              </Table>
            </Box>
          </>
        ) : ""}
      </Box>
    </>
  )
}
