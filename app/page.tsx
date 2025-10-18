import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SmoothScroll } from "@/components/smooth-scroll";
import { HeroSection } from "@/components/hero-section";
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations";
import { GithubActivity } from "@/components/github-calendar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I am Thabiso Rantsho, a Junior Web Developer based in Welkom,
                  [cite_start]South Africa[cite: 6]. My passion lies in crafting
                  dynamic and user-friendly web experiences.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I have hands-on experience from my time at Monsfi Marketing,
                  where I built websites for various clients, and as a Junior
                  Software Developer Intern at the University of Cape Town,
                  [cite_start]contributing to software evolution and UI
                  enhancements[cite: 7, 32].
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My technical skills include JavaScript, Python, C++, Java,
                  [cite_start]and various web technologies like WordPress, HTML,
                  and CSS[cite: 8, 28, 29]. I am always eager to learn and apply
                  new technologies to solve real-world problems.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Full-Stack Web Development
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      [cite_start]UI Development with HTML/CSS & JavaScript
                      [cite: 28, 29]
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      [cite_start]Backend Development with .NET [cite: 32, 35]
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      [cite_start]Agile & Scrum Methodologies [cite: 34]
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      [cite_start]SEO Optimization & Analytics [cite: 27]
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Web developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      [cite_start]Monsfi Marketing, Cape Town, WP [cite: 24]
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    [cite_start]Jun '24 - Feb '25 [cite: 25]
                  </p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Crafted websites for diverse clients, elevating online
                    [cite_start]sales & enhancing user engagement metrics[cite:
                    26].
                  </li>
                  <li>
                    Boosted organic traffic by 50% and enhanced lead generation
                    through SEO optimization utilizing Google
                    [cite_start]Analytics[cite: 27].
                  </li>
                  <li>
                    Executed updates for WP sites using WordPress CMS & Custom
                    [cite_start]CSS/HTML to boost user engagement[cite: 28].
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Junior Software Developer Intern
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      [cite_start]University of Cape Town and Freshgold, Cape
                      Town, WP [cite: 30]
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    [cite_start]Jan '21 - Nov '21 [cite: 31]
                  </p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Played a key role in evolving software in .net through a
                    final year project, resulting in a 20% efficiency increase
                    [cite_start]& UI enhancements[cite: 32].
                  </li>
                  <li>
                    Propelled client satisfaction by introducing Freshgold Docs
                    as an innovative solution, resulting in a 20% boost
                    [cite_start]in client contentment[cite: 33].
                  </li>
                  <li>
                    Steered software design & development process using agile &
                    [cite_start]scrum methodologies[cite: 34].
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Junior Business Analyst Intern
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      [cite_start]University of Cape Town, Cape Town, WP [cite:
                      36]
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    [cite_start]Jul '21 - Sep '21 [cite: 37]
                  </p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Pitched for funding & secured investment for a new patented
                    business case, utilizing financial modeling and
                    [cite_start]market research[cite: 38].
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Client Website Development</CardTitle>
                  <CardDescription>
                    Custom WordPress sites with SEO optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt="Client Website Development"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed and maintained websites for a diverse range of
                    clients at Monsfi Marketing, focusing on enhancing online
                    sales and user engagement. Implemented SEO best practices to
                    [cite_start]boost organic traffic[cite: 26, 27].
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]WordPress [cite: 29]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]HTML [cite: 29]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]CSS [cite: 28]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]JavaScript [cite: 29]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]SEO [cite: 27]
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <Link
                      href="https://superusert.github.io/React-Portfolio-Site/"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      [cite_start]
                      <span className="relative z-10">
                        View Portfolio [cite: 52]
                      </span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-1 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>.NET Enterprise Software Enhancement</CardTitle>
                  <CardDescription>
                    UI improvements and feature development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/placeholder.svg?height=240&width=400"
                      alt=".NET Project"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Contributed to a final year project with Freshgold to evolve
                    a .NET software solution. Key contributions included
                    implementing UI enhancements and developing new features,
                    leading to increased efficiency and client
                    [cite_start]satisfaction[cite: 32, 33].
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]ASP.NET [cite: 35]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]Azure [cite: 35]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]HTML [cite: 35]
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                    >
                      [cite_start]Git [cite: 35]
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full relative overflow-hidden group bg-transparent"
                  >
                    <Link
                      href="https://superusert.github.io/React-Portfolio-Site/"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      [cite_start]
                      <span className="relative z-10">
                        View Portfolio [cite: 52]
                      </span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">
                        PROG
                      </span>
                    </span>
                    Programming & Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]JavaScript [cite: 50]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]Python [cite: 50]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]C [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]C# [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]Java [cite: 8]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]TypeScript [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]HTML [cite: 29]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      [cite_start]C++ [cite: 8]
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">
                        TECH
                      </span>
                    </span>
                    Frameworks & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      [cite_start]ASP.NET [cite: 35]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      [cite_start]React Native [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      [cite_start]WordPress [cite: 29]
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">
                        DATA
                      </span>
                    </span>
                    Databases & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      [cite_start]Postgres [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      [cite_start]MongoDB [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      [cite_start]JSON [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      [cite_start]Azure [cite: 35]
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">
                        TOOLS
                      </span>
                    </span>
                    Tools & Methodologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      [cite_start]Git [cite: 51]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      [cite_start]Agile [cite: 34]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      [cite_start]Scrum [cite: 34]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      [cite_start]SEO [cite: 27]
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      [cite_start]Google Analytics [cite: 27]
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection delay={0.2}>
            {/* The username is inferred from the portfolio URL. The component may need to be modified to accept a 'username' prop. */}
            <GithubActivity username="superusert" />
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Achievements */}
      <section
        id="education"
        className="py-16 px-4 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Education & Achievements
            </h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">
                        [cite_start]Web Developer Recruit [cite: 41]
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        [cite_start]Umuzi/BBD, Johannesburg [cite: 40]
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        [cite_start]Web and Mobile application development
                        [cite: 43]
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      [cite_start]Apr '24 - Present [cite: 41, 42]
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">
                        [cite_start]Full stack Software Engineering [cite: 45]
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        [cite_start]ALX Africa, Johannesburg [cite: 44]
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      [cite_start]Jan '22 - Jan '23 [cite: 45]
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-semibold">
                        [cite_start]Bachelor of Commerce, Information Systems
                        [cite: 47]
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        [cite_start]University of Cape Town (incomplete) [cite:
                        46, 48]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Prizes & Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  [cite_start]
                  <h4 className="font-semibold">
                    SAMSA Bursary Holder [cite: 11]
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed Maritime Studies program at Lawhill Maritime
                    [cite_start]Centre (2016-2019)[cite: 11, 22].
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  [cite_start]
                  <h4 className="font-semibold">
                    Foreign Exchange Program [cite: 12]
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enhanced Mandarin proficiency at Sun Yet-Sen University,
                    [cite_start]China[cite: 12].
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold">
                    [cite_start]Chinese Bridge Competition Finalist [cite: 20]
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    [cite_start]Showcased language proficiency and cultural
                    knowledge[cite: 20].
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  [cite_start]
                  <h4 className="font-semibold">
                    Academic Excellence [cite: 20, 21]
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ranked as a Top 10 Student and was the top achiever in
                    [cite_start]Business Studies[cite: 20, 21].
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:rantshothabisomail@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      [cite_start]rantshothabisomail@gmail.com [cite: 3]
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/thabiso-rantsho-34849b14a"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      [cite_start]LinkedIn Profile [cite: 4]
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/superusert"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://superusert.github.io/React-Portfolio-Site/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      [cite_start]Portfolio [cite: 52]
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, opportunities,
                    or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              [cite_start]
              <h2 className="text-xl font-bold">Thabiso Rantsho [cite: 1]</h2>
              [cite_start]
              <p className="text-gray-400">Junior Web Developer [cite: 1]</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/thabiso-rantsho-34849b14a"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/superusert"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://superusert.github.io/React-Portfolio-Site/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:rantshothabisomail@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Thabiso Rantsho. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
