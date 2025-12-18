"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"

export default function AcademiaPage() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-10 mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-8 px-6 py-16 text-white">
        <section>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Academia
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            A space to highlight your educational background, certifications, talks,
            and any teaching or research work you want to showcase.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur">
            <h2 className="text-lg font-medium">Education</h2>
            <p className="mt-2 text-sm text-white/70">
              Add your degrees, institutions, years, and key achievements here.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur">
            <h2 className="text-lg font-medium">Certifications</h2>
            <p className="mt-2 text-sm text-white/70">
              List relevant certifications, bootcamps, and professional courses.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur">
            <h2 className="text-lg font-medium">Talks & Workshops</h2>
            <p className="mt-2 text-sm text-white/70">
              Capture conference talks, meetups, or workshops you&apos;ve led or contributed to.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur">
            <h2 className="text-lg font-medium">Research & Publications</h2>
            <p className="mt-2 text-sm text-white/70">
              Showcase research projects, papers, blog posts, or any academic writing.
            </p>
          </div>
        </section>
      </main>
    </ShaderBackground>
  )
}


