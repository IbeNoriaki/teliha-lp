import type { ReactNode } from "react"
import { Cannabis } from "lucide-react"
import "../app/teliha.css"

type LegalPageProps = {
  num: string
  kicker: string
  title: string
  lead?: ReactNode
  children: ReactNode
}

export function LegalPage({ num, kicker, title, lead, children }: LegalPageProps) {
  return (
    <div className="teliha-root legal">
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

      <div className="legal-stage">
        <div className="legal-bar">
          <a href="/" className="brand">
            <Cannabis className="leaf" stroke="url(#teliha-rgb3)" />
            <span>
              Te<b>Li</b>Ha
            </span>
          </a>
          <a href="/" className="legal-back">← ホーム</a>
        </div>

        <header className="legal-head">
          <div className="legal-kicker">
            <span className="n">{num}</span> <span>{kicker}</span>
          </div>
          <h1>{title}</h1>
          {lead ? <p className="legal-lead">{lead}</p> : null}
        </header>

        <main className="legal-body">{children}</main>

        <footer className="legal-foot">© 2024 Teliha Limited. All rights reserved.</footer>
      </div>
    </div>
  )
}

export function Section({ title, num, children }: { title: string; num?: string; children: ReactNode }) {
  return (
    <section className="legal-section">
      <h2>
        {num ? <span className="num">{num}</span> : null}
        <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}
