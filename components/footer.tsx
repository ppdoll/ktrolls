import Link from "next/link"

const footerLinks = {
  services: [
    { name: "네비 컴페어", href: "https://navi-cp.krtools.cloud/" },
    { name: "당근 컴퓨터 시세 계산기", href: "https://carot-pc.krtools.cloud/daangn/quotes" },
  ],
  company: [
    { name: "회사 소개", href: "/about" },
    { name: "문의하기", href: "/contact" },
  ],
  legal: [
    { name: "이용약관", href: "/terms" },
    { name: "개인정보처리방침", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
              KR Tools
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              일상을 더 편리하게 만드는<br />
              스마트 온라인 도구 모음
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">서비스</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">회사</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">법적 고지</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KR Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
