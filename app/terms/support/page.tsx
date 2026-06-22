import type { Metadata } from "next"
import { LegalPage, Section } from "../../../components/legal-page"

export const metadata: Metadata = {
  title: "サポート — Teliha Limited",
  description: "株式会社Teliha サポート・お問い合わせ",
}

export default function Support() {
  return (
    <LegalPage num="03" kicker="Support" title="サポート">
      <Section title="お問い合わせ">
        <p>
          株式会社Telihaでは、Pass0に関するお客様のご質問やお困りごとに迅速かつ丁寧に対応するため、フォームでお問い合わせを提供しております。以下のお問い合わせフォームまでお気軽にお問い合わせください。
        </p>
        <p>※ お問い合わせいただいた内容には、通常1〜2営業日以内に返信いたします。</p>
      </Section>

      <Section title="よくある質問">
        <p>
          <strong>Q: トークンの発行にはどれくらいの時間がかかりますか？</strong>
        </p>
        <p>A: トークンの発行は通常、数分以内に完了します。ネットワークの混雑状況によっては、時間がかかる場合があります。</p>
        <p>
          <strong>Q: クレジットの購入方法を教えてください。</strong>
        </p>
        <p>
          A: ダッシュボード画面上部の「クレジット」セクションにある「チャージ」ボタンをタップすると、クレジット購入画面に移動します。
        </p>
      </Section>
    </LegalPage>
  )
}
