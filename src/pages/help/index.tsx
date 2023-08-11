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
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>ヘルプ - Amaterus</title>
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
          <Typography color='text.primary'>ヘルプ</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          ヘルプ
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 2 }}>
          タイムスタンプの精度について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          原則として、このサイト上の時刻情報は、YouTubeアーカイブのタイムスタンプを基準にしているため、
          放送の遅延やドロップフレームの影響で、実際の時刻と10秒程度のずれが生じる場合があります。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          また、各放送者における試合の開始時間（放送開始からの経過時間）など、
          システム上複数の放送枠の間でタイムスタンプを共有している部分では、
          各放送枠ごとの遅延の差によって、数秒程度のずれが生じる場合があります。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          システムと労力の都合上、これらのずれは修正することが難しいですが、
          実用上は許容できる範囲と考えているため、そのまま提供しています。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
          試合開始時間・終了時間の基準について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          システムと労力の都合上、機械的に検出しやすいタイミングに合わせて設定しています。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          試合開始時間は、原則として、赤いクルーが「シーーッ！」という演出をするタイミングにしています。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          試合終了時間は、原則として、勝利・敗北画面に遷移したあと、左下に「終了」ボタンが出るタイミングにしています。
          なお、試合がノーゲームになった、試合途中でプレイヤーが切断された、その他ゲームが正常に進行しなくなり、
          勝利・敗北画面に遷移せずに実質的に試合が終了した、放送が中断したなど、試合終了時間の機械的な検出が難しいケースでは、
          異なる基準で試合終了時間を設定する場合や、試合終了時間を設定しない場合があります。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Among UsのUIに変更があった場合、システムを改修した場合など、状況に応じて基準を変更する場合があります。
        </Typography>
      </Box>
    </>
  )
}
