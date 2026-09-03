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
import { ProjectsSection } from "@/components/projects-section";
import { GithubActivity } from "@/components/github-calendar";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            <AnimatedGradientBackground />
            <ParticleBackground />
            <ScrollIndicator />
            <SmoothScroll />
            <Navbar />
            <HeroSection />

            {/* About Section */}
            <section
                id="about"
                className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden"
            >
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            About Me
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    I am Thabiso Rantsho, a Full Stack Developer
                                    based in Johannesburg, South Africa. I specialize in
                                    building scalable web applications and leading junior development teams.
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Currently, I am expanding my technical depth through a 
                                    Bsc Honours in Computing. I am deeply passionate about 
                                    Clean Code, Agile methodologies, and building efficient, 
                                    user-centric software solutions.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.4}>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    Professional Focus
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Full-Stack Web Development (Node.js, React)",
                                        "Database Management (PostgreSQL, MongoDB)",
                                        "Technical Leadership & Mentorship",
                                        "Agile & Scrum Methodologies",
                                        "DevOps & CI/CD Pipelines",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start group">
                                            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                        </li>
                                    ))}
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
                        {/* Junior Software Engineer - MicroLoan Foundation South Africa */}
                        <AnimatedSection delay={0.1}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Junior Software Engineer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">MicroLoan Foundation South Africa</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hybrid · Full-time</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Mar '26 - Present</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">System Architecture &amp; Technical Leadership</h4>
                                        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                            <li>Spearheaded backend architecture, optimising relational databases (PostgreSQL), data caching (Redis), and background task queues (BullMQ) to enhance platform performance and reliability.</li>
                                            <li>Partnered with executive stakeholders to translate complex commercial business needs into detailed, execution-ready technical specifications and architectural blueprints.</li>
                                            <li>Mentored developers and company staff on system updates, new processes, and new system features.</li>
                                            <li>Advised management on optimal technical infrastructure, hardware selection, and performance tuning to support system growth.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Full-Stack Engineering &amp; Security</h4>
                                        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                            <li>Engineered and maintained robust RESTful APIs and core business microservices using TypeScript and NestJS.</li>
                                            <li>Developed responsive, high-performance client-side applications using React and Vite, ensuring seamless end-to-end integration and an optimized user experience.</li>
                                            <li>Implemented enterprise-grade security protocols, including JWT authentication, Role-Based Access Control (RBAC), and strict input validation.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">External Integrations &amp; Vendor Management</h4>
                                        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                            <li>Served as the primary technical point of contact for external partners, assisting stakeholders in evaluating technical vendors and defining specifications for new third-party systems.</li>
                                            <li>Built, integrated, and maintained complex APIs to extend existing system functionality and automate data workflows.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Software Developer Intern - Umuzi */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Software Developer Intern</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">Umuzi.org</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Nov '25 - Present</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>Optimized team workflows by designing full-stack React components and APIs with Node.js.</li>
                                    <li>Captured technical requirements for seamless data integration with legacy systems.</li>
                                    <li>Enhanced code efficiency by executing thorough peer reviews on GitHub.</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Junior Tech Lead - Umuzi */}
                        <AnimatedSection delay={0.3}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Junior Tech Lead</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">Umuzi</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Feb '25 - Present</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>Guided a cohort of junior developers in mastering full-stack web development using Node.js, MongoDB, and React.</li>
                                    <li>Resolved complex technical issues using Git to drive performance in Agile cycles.</li>
                                    <li>Championed daily stand-ups and retrospectives utilizing Agile and Kanban boards.</li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Freelance - Monsfi */}
                        <AnimatedSection delay={0.4}>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Remote Freelance Web Developer</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">Monsfi Marketing</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Jun '24 - Present</p>
                                </div>
                                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                                    <li>Delivered responsive websites prioritizing mobile optimization and accessible design.</li>
                                    <li>Leveraged SEO strategies and Google Analytics, resulting in a 20% increase in conversion rates.</li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <ProjectsSection />

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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Frontend",
                                accent: "border-t-4 border-blue-500",
                                badge:
                                    "border-blue-300 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:border-blue-700 dark:bg-blue-900/40 dark:text-blue-200",
                                skills: [
                                    "HTML5",
                                    "CSS3",
                                    "JavaScript (ES6+)",
                                    "TypeScript",
                                    "React",
                                    "Next.js",
                                    "Vite",
                                    "Tailwind CSS",
                                ],
                            },
                            {
                                title: "Backend",
                                accent: "border-t-4 border-emerald-500",
                                badge:
                                    "border-emerald-300 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200",
                                skills: [
                                    "Node.js",
                                    "NestJS",
                                    "Express",
                                    "Python",
                                    "FastAPI",
                                    "Flask",
                                    "C#",
                                    ".NET Core",
                                    "REST APIs",
                                ],
                            },
                            {
                                title: "Data & Infrastructure",
                                accent: "border-t-4 border-amber-500",
                                badge:
                                    "border-amber-300 bg-amber-100 text-amber-800 hover:bg-amber-200 dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-200",
                                skills: [
                                    "PostgreSQL",
                                    "SQL",
                                    "MongoDB",
                                    "Redis",
                                    "BullMQ",
                                    "Celery",
                                    "MinIO",
                                    "TypeORM",
                                ],
                            },
                            {
                                title: "Machine Learning & AI",
                                accent: "border-t-4 border-pink-500",
                                badge:
                                    "border-pink-300 bg-pink-100 text-pink-800 hover:bg-pink-200 dark:border-pink-700 dark:bg-pink-900/40 dark:text-pink-200",
                                skills: [
                                    "XGBoost",
                                    "scikit-learn",
                                    "Pandas",
                                    "NLP",
                                    "Vision Language Models",
                                    "Gemini API",
                                ],
                            },
                            {
                                title: "DevOps & Tools",
                                accent: "border-t-4 border-purple-500",
                                badge:
                                    "border-purple-300 bg-purple-100 text-purple-800 hover:bg-purple-200 dark:border-purple-700 dark:bg-purple-900/40 dark:text-purple-200",
                                skills: [
                                    "Git",
                                    "Docker",
                                    "Docker Compose",
                                    "CI/CD Pipelines",
                                    "Jest",
                                    "Railway",
                                ],
                            },
                            {
                                title: "Security",
                                accent: "border-t-4 border-rose-500",
                                badge:
                                    "border-rose-300 bg-rose-100 text-rose-800 hover:bg-rose-200 dark:border-rose-700 dark:bg-rose-900/40 dark:text-rose-200",
                                skills: [
                                    "JWT Authentication",
                                    "Role-Based Access Control",
                                    "Input Validation",
                                ],
                            },
                        ].map((category, i) => (
                            <AnimatedSection
                                key={category.title}
                                direction="up"
                                delay={0.2 + i * 0.1}
                            >
                                <Card
                                    className={`h-full border-0 ${category.accent} shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}
                                >
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-3">
                                            {category.skills.map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant="outline"
                                                    className={`py-2 px-4 text-sm font-medium transition-colors ${category.badge}`}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* GitHub Activity */}
            <section className="py-16 px-4 bg-white dark:bg-gray-800 relative">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection delay={0.2}>
                        <GithubActivity />
                    </AnimatedSection>
                </div>
            </section>

            {/* Education Section */}
            <section
                id="education"
                className="py-16 px-4 bg-white dark:bg-gray-800 relative"
            >
                <div className="container mx-auto max-w-6xl relative z-10">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Education
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-6">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold">MSc in Financial Engineering</h4>
                                        <p className="text-purple-600 dark:text-purple-400">WorldQuant University</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Focus: Quantitative finance, stochastic modelling, and machine learning for financial markets.</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Starting in October 2026</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.3}>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold">BSc Honours in Computing</h4>
                                        <p className="text-purple-600 dark:text-purple-400">UNISA</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Focus: Advanced Computer Science logic and AI.</p>
                                        <p className="text-xs text-gray-500 mt-1">Modules: Logic-Based Reasoning, AI, Research Methodology.</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Jan '26 - Dec '27</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.4}>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold">BEng in Robotics</h4>
                                        <p className="text-purple-600 dark:text-purple-400">IU International University of Applied Sciences</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Focus: Robotics, control systems, and embedded engineering.</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">May '25 - May '28</p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.5}>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold">BCom Information Systems</h4>
                                        <p className="text-purple-600 dark:text-purple-400">University of Cape Town</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Core Coursework: Systems Analysis & Design, Database Management.</p>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 font-medium">Completed Jan '23</p>
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
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-purple-600 mr-3" />
                                        <a href="mailto:rantshothabisomail@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">rantshothabisomail@gmail.com</a>
                                    </div>
                                    <div className="flex items-center">
                                        <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                                        <a href="https://www.linkedin.com/in/thabiso-rantsho-34849b14a" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">LinkedIn Profile</a>
                                    </div>
                                    <div className="flex items-center">
                                        <Github className="w-5 h-5 text-purple-600 mr-3" />
                                        <a href="https://github.com/superusert" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">GitHub Profile</a>
                                    </div>
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

            <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <h2 className="text-xl font-bold">Thabiso Rantsho</h2>
                    <p className="text-gray-400">Full Stack Developer</p>
                    <div className="mt-6 text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Thabiso Rantsho. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}