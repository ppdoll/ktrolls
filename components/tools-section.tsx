import Link from "next/link"
import { MapPin, Calculator, ArrowUpRight, Car, PartyPopper, Stethoscope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  {
    title: "네비 컴페어",
    description: "네비게이션 앱에서 주소를 쉽게 비교하고 공유할 수 있는 도구입니다. 카카오맵, 네이버 지도 등 다양한 앱을 지원합니다.",
    href: "https://navi-cp.krtools.cloud/",
    icon: MapPin,
    features: ["주소 원클릭 복사", "다양한 네비앱 지원", "즐겨찾기 저장"],
  },
  {
    title: "당근 컴퓨터 시세 계산기",
    description: "당근마켓에서 중고 컴퓨터를 사고팔 때 적정 시세를 계산해주는 도구입니다. 합리적인 가격으로 거래하세요.",
    href: "https://carot-pc.krtools.cloud/daangn/quotes",
    icon: Calculator,
    features: ["실시간 시세 조회", "카테고리별 분석", "가격 추천"],
  },
  {
    title: "중고차 비교",
    description: "헤이딜러, 엔카, 현대, 기아, BMW, 벤츠 등 다양한 중고차 플랫폼의 매물을 한눈에 비교할 수 있습니다.",
    href: "https://navi-cp.krtools.cloud/cars",
    icon: Car,
    features: ["다양한 플랫폼 비교", "실시간 매물 조회", "가격 비교 분석"],
  },
  {
    title: "축제 공연",
    description: "전국의 축제와 공연 정보를 한눈에 확인할 수 있습니다. 지역별, 날짜별로 쉽게 검색하세요.",
    href: "https://navi-cp.krtools.cloud/festivals",
    icon: PartyPopper,
    features: ["전국 축제 정보", "지역별 검색", "일정 확인"],
  },
  {
    title: "병원 검색",
    description: "내 주변 병원을 쉽게 찾고 진료 정보를 확인할 수 있습니다. 응급실, 약국 정보도 함께 제공합니다.",
    href: "https://navi-cp.krtools.cloud/hospitals",
    icon: Stethoscope,
    features: ["내 주변 병원 검색", "진료과목 필터", "응급실/약국 정보"],
  },
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            제공하는 도구
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            일상에서 바로 사용할 수 있는 실용적인 도구들을 만나보세요
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link 
              key={tool.title} 
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent/50 bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted group-hover:bg-accent/10 transition-colors">
                      <tool.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
