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
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function PrivacyPolicyPage() {
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
          <Typography color='text.primary'>Privacy Policy</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          プライバシーポリシー
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          Googleアナリティクスの使用について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリは、改善されたユーザーエクスペリエンスを提供するために、Googleアナリティクスを使用しています。
          以下では、Googleアナリティクスがどのように使用され、データが収集および処理されるかについて開示します。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          データ収集の目的
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Googleアナリティクスは、ウェブサイト/アプリのトラフィックとユーザーの挙動に関する情報を収集します。
          収集されたデータは、ウェブサイト/アプリの所有者および管理者によって、ウェブサイト/アプリの改善やコンテンツの最適化のために使用されます。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          収集するデータの種類
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Googleアナリティクスは、クッキーや匿名の識別子を使用して、ユーザーの情報を収集します。
          具体的な収集データには、ページビュー、セッションの長さ、デバイス情報、地理的位置などが含まれます。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          データの処理
        </Typography>
        <Typography sx={{ mt: 2 }}>
          収集されたデータは、Googleのサーバーで処理されます。
          データは匿名化され、集計された形式で報告されるため、個別のユーザーを特定することはできません。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          プライバシーオプション
        </Typography>
        <Typography sx={{ mt: 2 }}>
          多くのウェブブラウザは、クッキーの受け入れを制御するオプションを提供しています。
          ユーザーはブラウザの設定を変更してクッキーの使用を制限できますが、その場合、一部のウェブサイト/アプリの機能が制限される可能性があります。
        </Typography>
      </Box>
    </>
  )
}
