"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code, Cpu, Gamepad2, Smartphone } from "lucide-react";
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

// Mock component definitions for Card, Button, Badge, etc., have been removed.

const AnimatedCard = ({ children, delay = 0 }) => (
    <div className="animate-fadeInUp" style={{ animationDelay: `${delay}s` }}>
        {children}
    </div>
);

export const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState("featured");

    const tabs = [
        { id: "featured", label: "Featured Projects", icon: Code },
        { id: "lowlevel", label: "Low Level & Robotics", icon: Cpu },
        { id: "games", label: "Fun & Games", icon: Gamepad2 },
        { id: "mobile", label: "Mobile Development", icon: Smartphone },
    ];

    const projects = {
        featured: [
            {
                title: "Client Website Development: NMD website",
                description: "Custom React website developed for NMD",
                image: "/images/NMD.png",
                content:
                    "Developed and maintained websites for a diverse range of clients at Monsfi Marketing, focusing on enhancing online sales and user engagement. Implemented SEO best practices to boost organic traffic.",
                tags: ["React", "Emailjs", "TailwindCSS", "JavaScript", "SEO"],
                link: "https://nmdconstruction.net/",
            },
            {
                title: "Carbon Footprint Logger",
                description:
                    "A Carbon footprint logger is a tool that helps individuals track their carbon footprint and make more sustainable choices.",
                image: "/images/Footprint.png",
                content:
                    "Created a footprint logger using the MERN stack, which allows users to track their carbon footprint and make more sustainable choices.",
                tags: ["React", "Express", "Mongo Atlas", "Node.js"],
                link: "https://footprint-logger-frontend.onrender.com/",
            },
            {
                title: "LinkedOut (Coming Soon)",
                description:
                    "A Job Board Application for workers in your area. This platform connects gig workers to clients.",
                image: "/images/linkedOut.png",
                content:
                    "A Job Board Application for workers in your area. This platform connects gig workers to clients. Built with the MERN stack, it features user authentication, job posting, and real-time notifications.",
                tags: ["React", "Express", "Mongo Atlas", "Node.js"],
                link: "https://frontend-dashboard-branch-production.up.railway.app/",
            }
            ,
        ],
        lowlevel: [
            {
                title: "Simple Shell",
                description: "A basic unix shell written in C",
                image: "/images/Shell.gif",
                content:
                    "Developed a simple shell in C that supports basic commands like ls, cd, pwd, and exit. Implemented a command-line interface with input/output redirection and background process support.",
                tags: ["C", "Low Level", "gcc"],
                link: "https://github.com/superUserT/simple_shell",
            },
            {
                title: "HEX/BIN/CHAR File Editor",
                description:
                    "A comprehensive hexadecimal, binary, and character file editor written in C",
                image: "/images/PrintBinaryFile.png",
                content:
                    "A comprehensive hexadecimal, binary, and character file editor written in C that allows users to view and edit files in three different representations simultaneously.",
                tags: ["C", "Linux", "hex", "bin", "char"],
                link: "https://github.com/superUserT/hex-bin-char-editor",
            },
        ],
        games: [
            {
                title: "Memory Game",
                description:
                    "A memory game built with Vanilla JavaScript and a little css",
                image: "/images/Memory.png",
                content:
                    "A simple Memory game built with Vanilla JavaScript and a little css, features a time-based scoring system, dynamic grids and turn counts, and a user-friendly interface.",
                tags: ["JavaScript", "CSS", "Memory Game", "HTML5"],
                link: "https://superusert.github.io/umuzi-memory-game/",
            },
            {
                title: "Semitone Game",
                description: "Real-time trivia game with WebSocket support",
                image: "/images/JamBuddy.png",
                content:
                    "A simple Semitone game built with Vanilla JavaScript and a little css, features a time-based scoring system, dynamic grids and turn counts, and a user-friendly interface.",
                tags: ["jsdom", "Webpack", "Node.js", "Semitone game"],
                link: "https://superusert.github.io/umuzi-semitone/",
            },
        ],
        mobile: [
            {
                title: "Shukuma Excercise",
                description:
                    "A web and mobile excercise application for a shukuma ltd",
                image: "/images/shukuma.png",
                content:
                    "A mobile and web application that allows users to track their excercise progress and set goals.",
                tags: ["ionic Capacitor", "react", "Socket.io", "Azure"],
                link: "https://drive.google.com/file/d/1TLoJiGb10PaD3aO_RXxRWslvz0o7UmM8/view",
            },
        ],
    };

    return (
        <section
            id="projects"
            className="py-16 px-4 bg-white dark:bg-gray-800 relative"
        >
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-8">Projects</h2>

                    {/* Tab Selector */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${
                        activeTab === tab.id
                            ? "bg-purple-600 text-white shadow-lg transform scale-105"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }
                  `}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="hidden sm:inline">
                                        {tab.label}
                                    </span>
                                    <span className="sm:hidden">
                                        {tab.label.split(" ")[0]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects[activeTab].map((project, index) => (
                        <AnimatedCard key={index} delay={index * 0.1}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        {project.content}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge
                                                key={tagIndex}
                                                variant="outline"
                                                className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full relative overflow-hidden group bg-transparent"
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            <span className="relative z-10">
                                                View Project
                                            </span>
                                            <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </AnimatedCard>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
};

export default ProjectsSection;
