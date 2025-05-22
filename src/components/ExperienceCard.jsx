import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ExperienceCard({ exp, fadeIn, index }) {
  return (
    <motion.div
      variants={fadeIn}
      className={`flex flex-col md:flex-row items-start mb-12 relative ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-amber-500 transform translate-x-[-50%] mt-6 shadow-[0_0_10px_rgba(255,76,41,0.5)] z-20"></div>
      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:pr-0 md:pl-8 md:ml-auto" : "md:pl-0 md:pr-8 md:mr-auto"
        } pl-8 md:pl-0`}
      >
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white mb-1">{exp.title}</CardTitle>
            <CardDescription className="text-lg font-medium text-red-400 mb-3">{exp.company}</CardDescription>
            <div className="flex flex-wrap items-center text-sm text-gray-300 mb-2">
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="w-4 h-4 mr-1 text-orange-400" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-1 text-amber-400" />
                <span>{exp.location}</span>
              </div>
            </div>
          </CardHeader>
          <Separator className="my-2 bg-gradient-to-r from-red-400 to-amber-400 opacity-30" />
          <CardContent>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div>
              <h5 className="text-sm font-medium text-white mb-2">Key Achievements:</h5>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-400 to-amber-400 mt-1.5 mr-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}