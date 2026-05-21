import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            지금 바로 시작하세요
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            회원가입 없이, 설치 없이<br />
            웹브라우저에서 바로 사용할 수 있습니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link
              href="#tools"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
