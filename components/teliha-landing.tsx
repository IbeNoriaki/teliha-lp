"use client"

import { Cannabis, Wallet, CodeXml, Sparkles, ScanEye } from "lucide-react"
import { useLanguage } from "../hooks/use-language"
import "../app/teliha.css"

type Dict = Record<string, { en: string; ja: string }>

const DICT: Dict = {
  "hero.kicker": { en: "Teliha Limited", ja: "株式会社Teliha" },
  "sec.about": { en: "About Us", ja: "会社について" },
  "about.k.who": { en: "WHO", ja: "誰が" },
  "about.k.whom": { en: "WHOM", ja: "誰に" },
  "about.k.why": { en: "WHY", ja: "なぜ" },
  "about.k.how": { en: "HOW", ja: "どうやって" },
  "about.k.what": { en: "WHAT", ja: "何を" },
  "about.k.with": { en: "WITH", ja: "誰と" },
  "about.v.who": {
    en: "A software company building living systems.",
    ja: "生きたシステムをつくる、ソフトウェアの会社。",
  },
  "about.v.whom": { en: "For finance, onchain, and vision.", ja: "金融、オンチェーン、そして映像へ。" },
  "about.v.why": { en: "To see the future before anyone else.", ja: "誰よりも早く、未来を見るために。" },
  "about.v.how": {
    en: "Intent → Architecture → Deployed. All in-house.",
    ja: "意図 → 設計 → 実装。すべて自前で。",
  },
  "about.v.with": { en: "Hardware. We build the rest.", ja: "ハードの作り手と。あとは、ぜんぶ自前で。" },
  "sec.port": { en: "Portfolio", ja: "実績" },
  "seg.defi": { en: "Finance", ja: "金融" },
  "seg.dev": { en: "Developer", ja: "開発者" },
  "seg.creator": { en: "Consumer", ja: "コンシューマー" },
  "seg.inst": { en: "Visual", ja: "ビジュアル" },
  "cat.gamma": { en: "Gamma Protocol", ja: "ガンマ・プロトコル" },
  "cat.sdk": { en: "Crypto SDK", ja: "暗号SDK" },
  "cat.ios": { en: "iOS App", ja: "iOSアプリ" },
  "cat.rwa": { en: "Predictive Vision", ja: "予測ビジョン" },
  "desc.predy": {
    en: "Onchain gamma trading on Uniswap v3 and lending pools.",
    ja: "Uniswap v3とレンディングプールによるオンチェーンのガンマ取引。",
  },
  "desc.prex": {
    en: "Like Stripe for crypto. Gasless transactions, passkey wallets.",
    ja: "暗号資産版のStripe。ガスレス取引とパスキーウォレット。",
  },
  "desc.pumpum": {
    en: "Token launch app for creators, powered by Prex.",
    ja: "クリエイター向けトークン発行アプリ。基盤はPrex。",
  },
  "desc.pro": {
    en: "Reads outage risk from everyday driving footage — before it happens.",
    ja: "日常の運転映像から、停電の予兆を読み解く。",
  },
  "sec.team": { en: "Team", ja: "チーム" },
  "team.contact": { en: "Contact us via X →", ja: "お問い合わせは X まで →" },
  "role.ceo": { en: "CEO", ja: "CEO" },
  "role.coo": { en: "COO", ja: "COO" },
  "role.eng": { en: "Sr. Engineer", ja: "上級エンジニア" },
  "bio.shuhei": { en: "MITOU Super Creator, Kyushu University.", ja: "未踏スーパークリエータ（九州大学）。" },
  "bio.noriaki": { en: "Ex-Director, Indonesian Futures Exchange.", ja: "元・インドネシア先物取引所ディレクター。" },
  "bio.wataru": { en: "Author, blockchain development textbook.", ja: "ブロックチェーン開発の教科書 著者。" },
  "sec.honors": { en: "Honors & Grants", ja: "受賞・助成" },
  "hon.ef.n": { en: "Ethereum Foundation Grant", ja: "イーサリアム財団グラント" },
  "hon.ef.t": { en: "Founder · Shuhei Hiya", ja: "創業者 · Shuhei Hiya" },
  "hon.finolab": { en: "FINOLAB CBDC Idea Contest", ja: "FINOLAB CBDCアイデアコンテスト" },
  "hon.eth": { en: "ETHGlobal Tokyo", ja: "ETHGlobal Tokyo" },
  "hon.taipei": { en: "Fintech Taipei 2024", ja: "Fintech Taipei 2024" },
  "hon.switch": { en: "Singapore SWITCH 2025", ja: "Singapore SWITCH 2025" },
  "foot.est.l": { en: "Established", ja: "設立" },
  "foot.est.v": { en: "July 12, 2021", ja: "2021年7月12日" },
  "foot.ho.l": { en: "Head Office", ja: "本社" },
  "foot.ho.v": {
    en: "2-6-11 Daimyo, Chuo-ku, Fukuoka 810-0041, Japan",
    ja: "〒810-0041 福岡市中央区大名2-6-11",
  },
  "foot.legal.l": { en: "Legal", ja: "規約" },
}

const LEGAL_LINKS = [
  { href: "/terms/terms-of-service", en: "Terms", ja: "利用規約" },
  { href: "/terms/privacy-policy", en: "Privacy", ja: "プライバシー" },
  { href: "/terms/commercial-law", en: "Commercial Act", ja: "特商法表記" },
  { href: "/terms/payment-services-act", en: "Payment Services", ja: "資金決済法表示" },
  { href: "/terms/support", en: "Support", ja: "サポート" },
] as const

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TEAM = [
  {
    name: "Shuhei Hiya",
    img: "/images/shuhei-avatar.png",
    role: "role.ceo",
    bio: "bio.shuhei",
    x: "https://x.com/syuhei176",
    handle: "@syuhei176",
  },
  {
    name: "Noriaki Ibe",
    img: "/images/ibe-avatar.png",
    role: "role.coo",
    bio: "bio.noriaki",
    x: "https://x.com/ibeibe__",
    handle: "@ibeibe__",
  },
  {
    name: "Wataru Shinohara",
    img: "/images/wataru-avatar.png",
    role: "role.eng",
    bio: "bio.wataru",
    x: "https://x.com/shinanonozenji_",
    handle: "@shinanonozenji_",
  },
] as const

const PORTFOLIO = [
  { Icon: Wallet, seg: "seg.defi", cat: "cat.gamma", name: "Predy Finance", desc: "desc.predy" },
  { Icon: CodeXml, seg: "seg.dev", cat: "cat.sdk", name: "Prex", desc: "desc.prex" },
  { Icon: Sparkles, seg: "seg.creator", cat: "cat.ios", name: "Pumpum", desc: "desc.pumpum" },
  { Icon: ScanEye, seg: "seg.inst", cat: "cat.rwa", name: "Presage", desc: "desc.pro" },
] as const

const ABOUT = [
  { k: "about.k.who", v: "about.v.who" },
  { k: "about.k.whom", v: "about.v.whom" },
  { k: "about.k.why", v: "about.v.why" },
  { k: "about.k.how", v: "about.v.how" },
  { k: "about.k.with", v: "about.v.with" },
] as const

export function TelihaLanding() {
  const { language, setLanguage } = useLanguage()
  const lang: "en" | "ja" = language === "jp" ? "ja" : "en"
  const t = (key: string) => DICT[key]?.[lang] ?? key

  const heroTagline =
    lang === "ja" ? (
      <>
        <span className="nb">
          <em>未来</em>を、
        </span>
        <span className="nb">先に見る。</span>
      </>
    ) : (
      <>
        See the <em>future</em> first.
      </>
    )

  const whatLabel = lang === "ja" ? "私たちの実績を見る。" : "See what we've shipped."

  return (
    <div className="teliha-root">
      {/* Document-scoped gradient for the tri-band RGB brand mark */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="teliha-rgb3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF3B30" />
            <stop offset="33.333%" stopColor="#FF3B30" />
            <stop offset="33.333%" stopColor="#34C759" />
            <stop offset="66.666%" stopColor="#34C759" />
            <stop offset="66.666%" stopColor="#2D7FF9" />
            <stop offset="100%" stopColor="#2D7FF9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="stage">
        <div className="bar">
          <a href="#" className="brand">
            <Cannabis className="leaf" stroke="url(#teliha-rgb3)" />
            <span>
              <span className="w-te">Te</span>
              <span className="w-li">li</span>
              <span className="w-ha">Ha</span>
            </span>
          </a>
          <div className="bar-right">
            <div className="lang">
              <button className={lang === "en" ? "on" : ""} onClick={() => setLanguage("en")}>
                EN
              </button>
              <button className={lang === "ja" ? "on" : ""} onClick={() => setLanguage("jp")}>
                日本語
              </button>
            </div>
          </div>
        </div>

        <div className="bento">
          {/* Hero */}
          <section className="card hero">
            <div className="card-k">
              <span className="n">◆</span> <span>{t("hero.kicker")}</span>
            </div>
            <div className="hero-center">
              <h1>{heroTagline}</h1>
            </div>
          </section>

          {/* About */}
          <section className="card about">
            <div className="card-k">
              <span className="n">01</span> <span>{t("sec.about")}</span>
            </div>
            <div className="about-list">
              {ABOUT.map((item) => (
                <div className="about-item" key={item.k}>
                  <span className="k">{t(item.k)}</span>
                  <span className="v">{t(item.v)}</span>
                </div>
              ))}
              <div className="about-item">
                <span className="k">{t("about.k.what")}</span>
                <span className="v">
                  {whatLabel} <a href="#">→</a>
                </span>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="card port">
            <div className="card-k">
              <span className="n">02</span> <span>{t("sec.port")}</span>
            </div>
            <div className="port-grid">
              {PORTFOLIO.map(({ Icon, seg, cat, name, desc }) => (
                <a className="pcell" href="#" key={name}>
                  <div className="pcell-top">
                    <span className="pcell-seg">
                      <Icon />
                      <span>{t(seg)}</span>
                    </span>
                    <span className="pcell-cat">{t(cat)}</span>
                  </div>
                  <span className="pcell-name">{name}</span>
                  <span className="pcell-desc">{t(desc)}</span>
                </a>
              ))}
            </div>
          </section>

          {/* bottom right: team + honors */}
          <div className="br">
            <section className="card team">
              <div className="card-k">
                <span className="n">03</span> <span>{t("sec.team")}</span>
                <span className="card-note">{t("team.contact")}</span>
              </div>
              <div className="team-row">
                {TEAM.map((m) => (
                  <div className="member" key={m.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="avatar" src={m.img} alt={m.name} />
                    <div className="member-name">{m.name}</div>
                    <div className="member-role">{t(m.role)}</div>
                    <p className="member-bio">{t(m.bio)}</p>
                    <a className="member-x" href={m.x} target="_blank" rel="noopener">
                      <XIcon />
                      {m.handle}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="card side">
              <div className="card-k">
                <span className="n">04</span> <span>{t("sec.honors")}</span>
              </div>
              <div className="honor-list">
                <div className="honor">
                  <span className="y">2020</span>
                  <div>
                    <div className="n">{t("hon.ef.n")}</div>
                    <div className="t">{t("hon.ef.t")}</div>
                  </div>
                </div>
                <div className="honor">
                  <span className="y">2022</span>
                  <div className="n">{t("hon.finolab")}</div>
                </div>
                <div className="honor">
                  <span className="y">2023</span>
                  <div className="n">{t("hon.eth")}</div>
                </div>
                <div className="honor">
                  <span className="y">2024</span>
                  <div className="n">{t("hon.taipei")}</div>
                </div>
                <div className="honor">
                  <span className="y">2025</span>
                  <div className="n">{t("hon.switch")}</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="foot">
          <div className="foot-item">
            <span className="fl">{t("foot.est.l")}</span>
            <span className="fv">{t("foot.est.v")}</span>
          </div>
          <div className="foot-item">
            <span className="fl">{t("foot.ho.l")}</span>
            <span className="fv">{t("foot.ho.v")}</span>
          </div>
          <div className="foot-item">
            <span className="fl">{t("foot.legal.l")}</span>
            <span className="foot-legal">
              {LEGAL_LINKS.map((l) => (
                <a href={l.href} key={l.href}>
                  {l[lang]}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
