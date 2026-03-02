import React from 'react';
import { Play, Code2, Bug, Rocket, ChevronRight, CheckCircle2, ShieldCheck, GraduationCap, ClipboardList, BookOpen, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative bg-slate-950 selection:bg-indigo-500/30">
      {/* 배경 배경 효과 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute inset-0 bg-circuit-pattern opacity-30" />
      </div>

      <div className="relative z-10">
        {/* 네비게이션 */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
              dev
            </div>
            <span className="font-semibold text-xl tracking-tight">IT 마스터리 클래스</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#courses" className="hover:text-white transition-colors">커리큘럼</a>
            <a href="#methods" className="hover:text-white transition-colors">교육 방식</a>
            <a href="#benefits" className="hover:text-white transition-colors">수강 혜택</a>
          </div>
          <button className="px-5 py-2.5 text-sm font-medium rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2">
            강의 시작하기
          </button>
        </nav>

        {/* 히어로 섹션 */}
        <section className="container mx-auto px-6 pt-24 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* 좌측: 텍스트 콘텐츠 */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-8 animate-fade-in-up">
                <span className="flex w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                최신 업데이트: ISTQB 자격증 & 백엔드 CRUD 마스터
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
                현업의 기술부터 <br />
                <span className="text-gradient">글로벌 자격증</span>까지 <br className="hidden lg:block" /> 한 번에
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
                단순한 이론 공부는 끝났습니다. 실무 효율을 극대화하는 백엔드 아키텍처와 
                국제 표준 소프트웨어 테스팅(ISTQB) 자격증을 위한 최적의 로드맵을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] group">
                  <Play className="w-5 h-5 fill-current" />
                  무료 맛보기 강의
                </button>
                <button className="px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 font-medium border border-slate-700 backdrop-blur-sm transition-colors flex items-center gap-2">
                  커리큘럼 살펴보기
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 우측: 3D 비주얼 요소 */}
            <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-[40px] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative rounded-[40px] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm animate-float">
                  <img 
                    src="/hero-3d.png" 
                    alt="3D Typography" 
                    className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* 유리 질감 효과 레이어 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                </div>
                
                {/* 떠다니는 장식 요소들 */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 주요 핵심 전략 섹션 */}
        <section id="methods" className="border-y border-white/5 bg-slate-900/50 backdrop-blur-md">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">압도적인 성장을 만드는 교육 전략</h2>
              <p className="text-slate-400">데이터와 실무 경험에 기반한 가장 효율적인 학습 방식을 제안합니다.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* 전략 1 */}
              <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bug className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">의도된 에러 해결 (Troubleshooting)</h3>
                <p className="text-slate-400 leading-relaxed">
                  정답만 알려주는 강의는 가짜입니다. 일부러 404 에러와 예외를 발생시켜 실제 현업에서 맞닥뜨릴 문제를 해결하는 디버깅 역량을 길러줍니다.
                </p>
              </div>

              {/* 전략 2 */}
              <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">선택과 집중: 94%의 핵심 타겟</h3>
                <p className="text-slate-400 leading-relaxed">
                  방대한 ISTQB 범위를 모두 외울 필요는 없습니다. 출제 비중이 94%에 달하는 K1, K2 레벨과 핵심 1~3장 위주의 효율적 집중 학습을 지원합니다.
                </p>
              </div>

              {/* 전략 3 */}
              <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">스펙 이상의 실무 가치</h3>
                <p className="text-slate-400 leading-relaxed">
                  자격증 취득을 넘어, 실제 DB Auditing 및 테스팅 용어 사전을 활용한 협업 능력까지. 기업에서 즉시 활용 가능한 인재로 거듭납니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 코스 상세 마운트 */}
        <section id="courses" className="container mx-auto px-6 py-24 space-y-32">
          
          {/* ISTQB 코스 */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 text-sm font-bold uppercase tracking-wider">
                New Course
              </div>
              <h2 className="text-4xl font-bold leading-tight text-white">
                ISTQB Foundation Level <br/>
                <span className="text-gradient">단기 합격 패스</span>
              </h2>
              <p className="text-slate-400 text-lg">
                소프트웨어 테스팅의 국제 표준을 빠르게 마스터하세요. 비전공자도 이해하기 쉬운 용어 사전과 실라버스 핵심 요약본을 제공합니다.
              </p>
              
              <ul className="space-y-4 pt-6">
                {[
                  "출제 비중이 높은 1~3장 핵심 파트 완벽 분석",
                  "40문제 중 26문제 이상 적중을 위한 고효율 가이드",
                  "암기와 이해 위주의 K1, K2 레벨 집중 공략",
                  "실제 시험 접수 사이트(STEN, KSTQB) 시연 및 팁",
                  "학생 응시료 할인 및 교내 장학금 수령 방법 안내",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">시험 핵심 분석 데이터</h4>
                      <p className="text-slate-500 text-sm">Exam Weight Analysis</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">K1 (암기) & K2 (이해) 비중</span>
                        <span className="text-purple-400 font-bold">94%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[94%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">1~3 챕터 중요도</span>
                        <span className="text-blue-400 font-bold">TOP Priority</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[85%]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                           <BookOpen className="w-5 h-5 text-pink-400 mb-2" />
                           <div className="text-xs text-slate-500 uppercase">자료 제공</div>
                           <div className="text-sm font-bold text-white">공식 실라버스</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                           <Database className="w-5 h-5 text-indigo-400 mb-2" />
                           <div className="text-xs text-slate-500 uppercase">필수 자료</div>
                           <div className="text-sm font-bold text-white">용어 사전</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          {/* 백엔드 코스 */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-sm font-bold uppercase tracking-wider">
                Practical Dev
              </div>
              <h2 className="text-4xl font-bold leading-tight text-white">
                백엔드 아키텍처 <br/>
                <span className="text-gradient">실전 CRUD 마스터</span>
              </h2>
              <p className="text-slate-400 text-lg">
                단순 기능 구현을 넘어 코드 재사용성과 유지보수를 고려한 설계를 배웁니다. 중복 코드를 제거하고 효율적인 컨트롤러 구조를 설계하는 법을 익히세요.
              </p>
              
              <ul className="space-y-4 pt-6">
                {[
                  "기존 로직 재활용(Copy & Modify)을 통한 개발 속도 극대화",
                  "삭제 및 수정 기능 구현 시 발생하는 복잡한 권한 처리",
                  "@ModelAttribute를 활용한 데이터 전달 및 예외 처리",
                  "JPA Auditing을 활용한 데이터 추적 및 관리 기법",
                  "의도된 에러(404) 대응을 통해 배우는 리다이렉트 원리",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-2 shadow-2xl overflow-hidden aspect-video group">
                <div className="absolute inset-0 bg-slate-800/80 flex flex-col items-center justify-center cursor-pointer transition-colors group-hover:bg-slate-800/60 z-10 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                  <p className="mt-4 font-medium text-white/80 text-sm">실습 영상 미리보기</p>
                </div>
                <div className="w-full h-full p-6 font-mono text-xs leading-relaxed text-slate-500 opacity-30 relative select-none">
                  <div className="text-blue-400">@PostMapping("/question/modify/&#123;id&#125;")</div>
                  <div className="text-purple-400">public String questionModify(...) &#123;</div>
                  <div className="pl-4">...</div>
                  <div className="pl-4 text-emerald-400">// 의도된 404 트리거</div>
                  <div className="pl-4">return String.format("redirect:/question/detail/%s", id);</div>
                  <div className="text-purple-400">&#125;</div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 혜택 및 동기 부여 섹션 (ISTQB 인사이트 반영) */}
        <section id="benefits" className="pb-24">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <h2 className="text-4xl font-bold mb-6 text-white relative z-10">단순 취득 그 이상의 가치를 얻으세요</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-blue-400 font-bold text-2xl mb-1">~14만원</div>
                   <div className="text-slate-400 text-sm">학생 할인 혜택</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-purple-400 font-bold text-2xl mb-1">최대 10만원</div>
                   <div className="text-slate-400 text-sm">교내 장학금 가이드</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-emerald-400 font-bold text-2xl mb-1">TOP Spec</div>
                   <div className="text-slate-400 text-sm">글로벌 표준 인증</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-orange-400 font-bold text-2xl mb-1">Level Up</div>
                   <div className="text-slate-400 text-sm">개발직군 필수 우대</div>
                </div>
              </div>
              <p className="text-indigo-200 mb-10 max-w-xl mx-auto text-lg relative z-10 leading-relaxed">
                지금 등록하고 최신 취업 트렌드를 반영한 테스팅 지식과 백엔드 실무 능력을 동시에 확보하세요.
              </p>
              <button className="relative z-10 px-10 py-5 rounded-full bg-white text-indigo-950 font-bold hover:scale-105 transition-transform shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]">
                강의 정기 구독하기
              </button>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="container mx-auto px-6 py-12 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© 2026 IT Mastery Class. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
