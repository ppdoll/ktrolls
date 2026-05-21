import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "회사 소개 - KR Tools",
  description: "KR Tools는 한국인의 일상을 더 편리하게 만드는 온라인 도구 서비스를 제공합니다. 우리의 미션과 비전을 확인하세요.",
}

const values = [
  {
    name: "사용자 중심",
    description: "모든 도구는 실제 사용자의 불편함에서 출발합니다. 복잡한 기능보다 직관적이고 쉬운 사용성을 추구합니다.",
    icon: Users,
  },
  {
    name: "실용적 가치",
    description: "일상에서 바로 사용할 수 있는 실용적인 도구를 만듭니다. 불필요한 기능은 과감히 제거하고 핵심에 집중합니다.",
    icon: Target,
  },
  {
    name: "지속적 혁신",
    description: "사용자 피드백을 바탕으로 지속적으로 개선하고, 새로운 도구를 개발하여 더 나은 서비스를 제공합니다.",
    icon: Lightbulb,
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                일상의 불편함을<br />기술로 해결합니다
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                KR Tools는 2024년, 한국인의 일상에서 발생하는 작은 불편함들을 
                해결하기 위해 시작되었습니다. 우리는 누구나 쉽게 사용할 수 있는 
                실용적인 온라인 도구를 무료로 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                우리의 미션
              </h2>
              <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  매일 반복되는 작은 불편함들이 있습니다. 네비게이션 앱에서 주소를 복사하기 어렵거나, 
                  중고 물품의 적정 가격을 알기 어려운 것처럼요.
                </p>
                <p>
                  KR Tools는 이런 일상의 작은 문제들을 기술로 해결합니다. 
                  복잡한 앱 설치 없이, 웹브라우저에서 바로 사용할 수 있는 
                  간단하고 직관적인 도구들을 만들고 있습니다.
                </p>
                <p>
                  우리의 목표는 단순합니다. 사용자가 필요한 순간에, 
                  가장 빠르고 쉬운 방법으로 문제를 해결할 수 있도록 돕는 것입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                핵심 가치
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                KR Tools를 만들어가는 원칙들
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid gap-8 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.name} className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                      <value.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">
                      {value.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                성장하는 KR Tools
              </h2>
            </div>
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="grid gap-8 text-center sm:grid-cols-3">
                <div>
                  <p className="text-4xl font-bold text-foreground">2+</p>
                  <p className="mt-2 text-muted-foreground">제공 중인 도구</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground">24/7</p>
                  <p className="mt-2 text-muted-foreground">무료 이용 가능</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground">100%</p>
                  <p className="mt-2 text-muted-foreground">모바일 최적화</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
