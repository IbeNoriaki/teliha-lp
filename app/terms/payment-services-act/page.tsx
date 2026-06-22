import type { Metadata } from "next"
import { LegalPage, Section } from "../../../components/legal-page"

export const metadata: Metadata = {
  title: "資金決済法に基づく表示 — Teliha Limited",
  description: "株式会社Teliha 資金決済法に基づく表示",
}

export default function PaymentServicesAct() {
  return (
    <LegalPage num="05" kicker="Payment Services Act" title="資金決済法に基づく表示">
      <Section title="前払式支払手段の名称">
        <p>
          株式会社Telihaが発行する前払式支払手段は、サービスやブランドごとに異なる名称で表示される場合がありますが、資金決済法上は同一の性質を有する前払式支払手段として、当社が一貫して発行・管理しています。
        </p>
      </Section>

      <Section title="発行事業者">
        <p>株式会社Teliha</p>
        <p>〒810-0041 福岡県福岡市中央区大名2-6-11</p>
      </Section>

      <Section title="支払可能金額等">
        <p>顧客保有残高に上限はありませんが、当社の判断によりアカウントごとに上限を設定する場合があります。</p>
      </Section>

      <Section title="有効期間">
        <p>
          ポイント・クレジット等には有効期限は設けておりません。ただし、サービス利用規約に基づいてお客様のアカウントが削除・停止された場合、未使用残高はすべて失効し、返金には応じかねます。
        </p>
      </Section>

      <Section title="ご相談窓口">
        <p>
          ・<a href="/terms/support">お問い合わせフォーム</a>
        </p>
      </Section>

      <Section title="使用場所">
        <p>当社が提供する各種サービス・アプリケーション内にてご利用いただけます。</p>
      </Section>

      <Section title="利用上の注意">
        <p>
          購入確定後のポイント・クレジット等の返品、交換、および現金への換金はできません。詳しくはサービス利用規約をご参照ください。
        </p>
      </Section>

      <Section title="未使用残高の確認方法">
        <p>アプリ起動後、アカウント情報ページにてご確認いただけます。</p>
      </Section>

      <Section title="利用者資金の保全方法">
        <p>
          当社は資金決済法第14条に基づき、基準日未使用残高の2分の1以上の額を保証金として、指定金融機関との間で発行保証金保全契約を締結しています。
        </p>
      </Section>

      <Section title="不正取引による損失の補償等に関する方針">
        <p>
          当社の責に帰すべき事由があると認められる場合を除き、前払式支払手段の不正利用等による損失について、当社は原則として責任を負いません。
        </p>
      </Section>

      <Section title="不正取引の公表基準">
        <p>
          重大な不正取引が発生し、利用者保護上必要と判断される場合には、当社の公式ウェブサイト等で公表することがあります。
        </p>
      </Section>

      <Section title="利用規約">
        <p>
          その他、ポイント・クレジット等の詳細な利用条件については、
          <a href="/terms/terms-of-service">サービス利用規約</a>をご確認ください。
        </p>
      </Section>
    </LegalPage>
  )
}
