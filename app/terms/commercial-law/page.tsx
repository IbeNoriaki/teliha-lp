import type { Metadata } from "next"
import { LegalPage } from "../../../components/legal-page"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 — Teliha Limited",
  description: "株式会社Teliha 特定商取引法に基づく表記",
}

const ROWS: { dt: string; dd: React.ReactNode }[] = [
  { dt: "販売業者", dd: "株式会社Teliha" },
  { dt: "運営責任者", dd: "代表取締役 部谷 修平" },
  { dt: "所在地", dd: "〒810-0041 福岡県福岡市中央区大名2-6-11" },
  { dt: "お問い合わせ先", dd: <a href="/terms/support">お問い合わせフォーム</a> },
  {
    dt: "販売価格",
    dd: "当社が提供するプラットフォーム上で販売する前払式支払手段の価格は、各購入画面またはサービス内に表示しております。料金は税込価格で表示されます。",
  },
  {
    dt: "有料機能・コンテンツ",
    dd: "所定の手数料または利用料が発生する場合があります。その内容および金額は、対象画面またはサービスページにて明示いたします。",
  },
  {
    dt: "商品代金以外の必要料金",
    dd: "消費税、銀行振込手数料、インターネット接続料金および通信費、外部ネットワーク利用手数料",
  },
  { dt: "支払方法", dd: "クレジットカード、銀行振込、その他の方法" },
  { dt: "支払時期", dd: "クレジットカード：各カード会社の規定に従う。銀行振込：ご注文後7日以内" },
  {
    dt: "サービス提供時期",
    dd: "購入手続き完了後、即時または当社のシステムにおける反映確認後、速やかに反映されます。",
  },
  {
    dt: "キャンセル・解約",
    dd: "購入後の前払式支払手段は、原則として返金できません。クーリングオフは適用されません。",
  },
  { dt: "動作環境", dd: "サービスページにてご案内します。推奨環境以外の動作保証はありません。" },
  {
    dt: "特別条件",
    dd: "定期契約または自動更新が適用されるものがあります。詳細は各サービスページまたは利用規約を参照してください。",
  },
]

export default function CommercialLaw() {
  return (
    <LegalPage num="04" kicker="Commercial Transactions Act" title="特定商取引法に基づく表記">
      <dl className="legal-dl">
        {ROWS.map((r) => (
          <div className="row" key={r.dt}>
            <dt>{r.dt}</dt>
            <dd>{r.dd}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  )
}
