import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "개인정보처리방침 - KR Tools",
  description: "KR Tools의 개인정보처리방침입니다. 사용자의 개인정보를 어떻게 수집, 이용, 보호하는지 안내합니다.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              개인정보처리방침
            </h1>
            <p className="mt-4 text-muted-foreground">
              최종 수정일: 2024년 1월 1일
            </p>

            <div className="mt-12 space-y-12 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. 개인정보의 수집 및 이용 목적</h2>
                <p className="mt-4">
                  KR Tools(이하 &quot;회사&quot;)는 다음과 같은 목적으로 최소한의 개인정보를 수집하고 있습니다.
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>서비스 제공 및 운영</li>
                  <li>서비스 이용 통계 분석 및 서비스 개선</li>
                  <li>문의 사항 처리 및 고객 지원</li>
                  <li>법적 의무 준수</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. 수집하는 개인정보 항목</h2>
                <p className="mt-4">
                  회사는 서비스 제공을 위해 다음과 같은 정보를 자동으로 수집할 수 있습니다.
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>접속 IP 주소, 브라우저 종류, 운영체제</li>
                  <li>서비스 이용 기록, 접속 로그</li>
                  <li>쿠키(Cookie) 정보</li>
                </ul>
                <p className="mt-4">
                  회사는 별도의 회원가입을 요구하지 않으며, 이름, 이메일, 전화번호 등의 
                  개인 식별 정보를 수집하지 않습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. 개인정보의 보유 및 이용 기간</h2>
                <p className="mt-4">
                  자동 수집되는 정보는 서비스 운영 및 통계 분석 목적으로 최대 1년간 보유하며, 
                  보유 기간이 종료되면 지체 없이 파기합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. 개인정보의 제3자 제공</h2>
                <p className="mt-4">
                  회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 
                  다만, 다음의 경우에는 예외로 합니다.
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. 쿠키(Cookie)의 사용</h2>
                <p className="mt-4">
                  회사는 서비스 이용 통계 수집 및 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다. 
                  이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 
                  이 경우 서비스 이용에 일부 제한이 있을 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. 광고</h2>
                <p className="mt-4">
                  회사는 서비스 운영을 위해 Google AdSense 등 제3자 광고 서비스를 이용할 수 있습니다. 
                  이러한 광고 서비스 제공업체는 사용자의 관심사에 기반한 광고를 제공하기 위해 
                  쿠키를 사용할 수 있습니다.
                </p>
                <p className="mt-4">
                  Google의 광고 쿠키 사용에 관한 자세한 내용은 
                  <a 
                    href="https://policies.google.com/technologies/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-1 text-foreground underline hover:no-underline"
                  >
                    Google 광고 정책
                  </a>
                  에서 확인하실 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. 개인정보 보호책임자</h2>
                <p className="mt-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
                  이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p><strong className="text-foreground">개인정보 보호책임자</strong></p>
                  <p className="mt-2">이메일: privacy@krtools.cloud</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. 개인정보처리방침의 변경</h2>
                <p className="mt-4">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 
                  정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. 권익침해 구제방법</h2>
                <p className="mt-4">
                  개인정보 침해에 대한 신고나 상담이 필요한 경우에는 아래 기관에 문의하시기 바랍니다.
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2">
                  <li>개인정보침해신고센터 (privacy.kisa.or.kr / 118)</li>
                  <li>대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-3573)</li>
                  <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
                </ul>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
