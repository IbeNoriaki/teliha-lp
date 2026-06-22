import type { Metadata } from "next"
import { LegalPage, Section } from "../../../components/legal-page"

export const metadata: Metadata = {
  title: "プライバシーポリシー — Teliha Limited",
  description: "株式会社Teliha プライバシーポリシー",
}

export default function PrivacyPolicy() {
  return (
    <LegalPage
      num="02"
      kicker="Privacy Policy"
      title="プライバシーポリシー"
      lead="株式会社Teliha（以下「当社」といいます）は、当社が提供するサービス（以下「本サービス」といいます）をご利用いただくお客様（以下「お客様」といいます）のプライバシーを尊重し、個人情報を適切に保護するため、以下のポリシーを定めています。"
    >
      <Section num="1" title="個人情報の定義">
        <p>
          本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であり、氏名、住所、メールアドレス、電話番号など、特定の個人を識別できる情報を指します。
        </p>
      </Section>

      <Section num="2" title="個人情報の収集方法">
        <p>当社は、以下の方法で個人情報を収集します。</p>
        <ul>
          <li>サービスのご利用に際してお客様が提供する情報（例: アカウント登録時の情報）</li>
          <li>お問い合わせやカスタマーサポートへの連絡時に提供される情報</li>
          <li>クッキーやログデータを通じた自動収集情報</li>
        </ul>
      </Section>

      <Section num="3" title="個人情報の利用目的">
        <ul>
          <li>本サービスの提供および運営</li>
          <li>お客様からのお問い合わせへの対応</li>
          <li>サービス改善や新機能開発のための分析</li>
          <li>法令に基づく義務を履行するため</li>
        </ul>
      </Section>

      <Section num="4" title="個人情報の第三者提供">
        <p>
          当社は、法令に基づく場合を除き、事前にお客様の同意を得ることなく個人情報を第三者に提供することはありません。
        </p>
      </Section>

      <Section num="5" title="個人情報の安全管理">
        <p>
          当社は、個人情報の漏洩、紛失、改ざん、または不正アクセスを防止するため、適切な技術的および組織的な安全管理措置を講じます。
        </p>
      </Section>

      <Section num="6" title="個人情報の保存期間">
        <p>
          当社は、個人情報を収集した目的を達成するために必要な期間、または法令で定められた期間を超えて保存することはありません。
        </p>
      </Section>

      <Section num="7" title="お客様の権利">
        <ul>
          <li>自身の個人情報へのアクセス、修正、削除を要求する権利</li>
          <li>個人情報の処理に関する異議を申し立てる権利</li>
          <li>データポータビリティの権利（適用がある場合）</li>
        </ul>
      </Section>

      <Section num="8" title="クッキーの使用">
        <p>
          当社は、本サービスの利便性向上や利用状況の分析のためにクッキーを使用することがあります。クッキーの使用に同意いただけない場合は、ブラウザの設定で無効にすることができます。
        </p>
      </Section>

      <Section num="9" title="プライバシーポリシーの変更">
        <p>
          当社は、法令の改正やサービス内容の変更に応じて、本ポリシーを随時改定することがあります。改定後の内容は、本ウェブサイト上で通知します。
        </p>
      </Section>

      <Section num="10" title="お問い合わせ窓口">
        <p>株式会社Teliha</p>
        <p>
          📧 <a href="/terms/support">お問い合わせフォーム</a>
        </p>
        <p>📍 住所: 〒810-0041 福岡県福岡市中央区大名2-6-11</p>
      </Section>
    </LegalPage>
  )
}
