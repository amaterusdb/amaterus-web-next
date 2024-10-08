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

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー - Amaterus</title>
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
          <Typography color='text.primary'>プライバシーポリシー</Typography>
        </Breadcrumbs>
        <Typography variant='h4' component='h2' sx={{ mt: 2 }}>
          プライバシーポリシー
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 3 }}>
          特定の人物に関する情報の掲載について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリは、ファンサイトの性質上、特定の人物に関する情報（プロフィール名やSNSアカウントなど）を掲載することがあります。
          掲載に際しては、その個人のプライバシーを尊重します。
          可能な限り公に入手可能な情報を使用し、個人の私生活に関する詳細な情報は掲載しないよう配慮します。
          また、公に入手可能な情報であっても、その人物や所属するグループに迷惑をかけることがないように、掲載の是非を慎重に判断することに努めます。
        </Typography>
        <Typography sx={{ mt: 2 }}>
          あなたがこのウェブサイトに掲載された人物であり、プライバシー等に基づいて内容の変更や削除を希望する場合は、
          本人と確認できる方法で、具体的に変更を希望する内容を管理者に連絡してください。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
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
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          Googleのプライバシーポリシー
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Googleによるデータ収集や処理についての詳細は、「
          <NextLink
            href='https://policies.google.com/technologies/partner-sites'
            passHref
            legacyBehavior
          >
            <MuiLink>
              Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
            </MuiLink>
          </NextLink>
          」や「
          <NextLink href='https://policies.google.com/privacy' passHref legacyBehavior>
            <MuiLink>Googleのプライバシーポリシー</MuiLink>
          </NextLink>
          」をご参照ください。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
          YouTubeの投稿を埋め込む機能について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリでは、YouTubeの投稿を埋め込む機能を使用して、関連する情報やコンテンツを提供しています。
          以下では、この機能に関する情報をお知らせします。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          埋め込み機能の目的
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリでは、YouTube上で公開されたコンテンツをシームレスに閲覧できるようにし、ユーザーの利便性を向上させるために、
          YouTubeが提供する埋め込み機能を使用しています。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          プラットフォーム間のデータ共有
        </Typography>
        <Typography sx={{ mt: 2 }}>
          埋め込まれたYouTube投稿に関するデータは、このウェブサイト/アプリのサーバーではなく、YouTubeのサーバーから直接取得されます。
          この際、ユーザーのウェブブラウジングに関する情報（たとえば、IPアドレスや閲覧履歴）が、YouTube/Googleと共有される可能性があります。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          YouTube/Googleのプライバシーポリシー
        </Typography>
        <Typography sx={{ mt: 2 }}>
          YouTube/Googleによるデータ収集や処理についての詳細は、「
          <NextLink
            href='https://policies.google.com/technologies/partner-sites'
            passHref
            legacyBehavior
          >
            <MuiLink>
              Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
            </MuiLink>
          </NextLink>
          」や「
          <NextLink href='https://policies.google.com/privacy' passHref legacyBehavior>
            <MuiLink>Googleのプライバシーポリシー</MuiLink>
          </NextLink>
          」をご参照ください。
        </Typography>
        <Typography variant='h5' component='h3' sx={{ mt: 6 }}>
          X（Twitter）の投稿を埋め込む機能について
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリでは、X（Twitter）の投稿を埋め込む機能を使用して、関連する情報やコンテンツを提供しています。
          以下では、この機能に関する情報をお知らせします。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 4 }}>
          埋め込み機能の目的
        </Typography>
        <Typography sx={{ mt: 2 }}>
          このウェブサイト/アプリでは、X（Twitter）上で公開されたコンテンツをシームレスに閲覧できるようにし、ユーザーの利便性を向上させるために、
          X（Twitter）が提供する埋め込み機能を使用しています。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 3 }}>
          プラットフォーム間のデータ共有
        </Typography>
        <Typography sx={{ mt: 2 }}>
          埋め込まれたX（Twitter）投稿に関するデータは、このウェブサイト/アプリのサーバーではなく、X（Twitter）のサーバーから直接取得されます。
          この際、ユーザーのウェブブラウジングに関する情報（たとえば、IPアドレスや閲覧履歴）が、X（Twitter）と共有される可能性があります。
        </Typography>
        <Typography variant='h6' component='h4' sx={{ mt: 4 }}>
          X（Twitter）のプライバシーポリシー
        </Typography>
        <Typography sx={{ mt: 2 }}>
          X（Twitter）によるデータ収集や処理についての詳細は、「
          <NextLink href='https://x.com/privacy' passHref legacyBehavior>
            <MuiLink>X（Twitter）のプライバシーポリシー</MuiLink>
          </NextLink>
          」をご参照ください。
        </Typography>
      </Box>
    </>
  )
}
