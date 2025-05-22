"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layout, Smartphone, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: <Layout className="w-10 h-10 text-red-400" />,
    title: "Frontend Development",
    description:
      "Modern, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.",
    features: [
      "Pixel-perfect UI/UX",
      "Performance optimization",
      "SEO best practices",
      "Accessibility (a11y) compliance",
    ],
  },
  {
    icon: <Database className="w-10 h-10 text-orange-400" />,
    title: "Backend Development",
    description:
      "Robust APIs and scalable backend systems with Node.js, Express, MongoDB, and PostgreSQL.",
    features: [
      "RESTful & GraphQL APIs",
      "Authentication & authorization",
      "Database design & optimization",
      "Cloud deployment",
    ],
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-400" />,
    title: "DevOps",
    description:
      "Automated CI/CD pipelines, cloud infrastructure, and monitoring for reliable deployments.",
    features: [
      "CI/CD setup (GitHub Actions, GitLab CI)",
      "Docker & containerization",
      "Cloud provisioning (AWS, Azure, GCP)",
      "Monitoring & logging",
    ],
  },
  {
    icon: <Smartphone className="w-10 h-10 text-red-400" />,
    title: "App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native and Expo.",
    features: [
      "Native performance",
      "Push notifications",
      "Offline support",
      "App store deployment",
    ],
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-400" />,
    title: "Web3 Development",
    description:
      "Smart contracts and decentralized applications (dApps) for various platforms.",
    features: [
      "Smart contract development",
      "dApp frontend development",
      "Token implementation",
      "Wallet integration",
    ],
  },
  {
    icon: <Code className="w-10 h-10 text-amber-400" />,
    title: "AI Agents",
    description:
      "Build and integrate AI-powered agents and automation using OpenAI, Hugging Face, and custom LLMs.",
    features: [
      "Conversational chatbots",
      "Task automation",
      "Natural language processing",
      "Integration with business workflows",
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I offer a range of services to help businesses and individuals
            achieve their digital goals. Each service is customized to meet your
            specific needs and requirements.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn} className="h-full flex">
              <Card className="flex flex-col h-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg group">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-4 rounded-2xl bg-black/30 inline-block mb-4 group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-amber-500/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-amber-400 mt-1.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}