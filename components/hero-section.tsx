import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm text-muted-foreground ring-1 ring-border/50 hover:ring-border transition-all">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              새로운 도구가 계속 추가됩니다
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            일상을 더 편리하게
            <br />
            <span className="text-muted-foreground">스마트 도구 모음</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            네비게이션 경로 비교, 중고 물품 시세 확인, 병원 검색, 전국 축제 검색 등<br className="hidden sm:inline" />
            한국인의 일상에 꼭 필요한 도구들을 무료로 제공합니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link
              href="#tools"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              도구 둘러보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
            >
              더 알아보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent/30 to-primary/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  )
}
