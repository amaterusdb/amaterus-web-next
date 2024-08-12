import { Box, Toolbar, Typography, Link as MuiLink, Breadcrumbs } from '@mui/material'
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
        <Typography sx={{ mt: 2 }}>
          このページでは、運用上のメモに近い、細かいサイト仕様について記載します。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 4 }}>
          タイムスタンプの精度について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          原則として、このサイト上の時刻情報は、YouTubeアーカイブのタイムスタンプを基準にしているため、
          放送の遅延やドロップフレームの影響で、実際の時刻と10秒程度のずれが生じる場合があります。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          また、各放送者における試合の開始時間（放送開始からの経過時間）など、
          システム上複数の放送枠の間でタイムスタンプを共有している部分では、
          各放送枠ごとの放送遅延の差やゲームの通信遅延によって、数秒から十数秒以上のずれが生じる場合があります。
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
          Among
          UsのUIに変更があった場合、システムを改修した場合など、状況に応じて基準を変更する場合があります。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
          参加者の基準について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          部屋の参加者については、原則として、事前に参加者として告知された人物を掲載しています。
          ただし、実際の開催において、欠席や飛び入り参加、開催の最初からの交代、開催途中での交代などにより、参加者が変動した場合には、
          プレイヤーとして試合に参加した人物であることを基準に掲載したり、しなかったりする場合があります。
          また、試合のプレイヤーとして参加しなかった場合でも、通話やチャットを通じて放送に出演した場合に、参加者として掲載する場合があります。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          試合の参加者については、原則として、プレイヤーとして試合に参加した人物を掲載しています。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
          Among Usの試合の正常終了の基準について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          いわゆる「ノーゲーム」の試合の場合、正常終了でないとします。
          具体的には、プレイヤーの回線切断による試合中止、設定ミスによる再試合、設定確認のための試合については、正常終了でないとします。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          この項目は、試合終了を機械的に検出することが難しい試合を区別するために定義しているものです。
          ほとんどのプレイヤーが試合から途中退出するなどして、正常な試合終了画面が表示されない場合、機械的な検出が難しくなります。
          こういった試合では、手作業で試合終了時間を決定する必要があるため、正常終了でないものとしています。
        </Typography>
      </Box>
    </>
  )
}
