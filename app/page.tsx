"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Briefcase, 
  Code2, 
  GraduationCap,
  User,
  MessageSquare
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of cloud-native applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
      skills: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2018 - 2020",
      description: "Developed and maintained multiple web applications. Worked with cross-functional teams to deliver high-quality software solutions.",
      skills: ["JavaScript", "Python", "PostgreSQL", "Redis"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-featured e-commerce platform with Next.js and Stripe integration.",
      link: "https://github.com/yourusername/ecommerce",
      skills: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"]
    },
    {
      title: "Task Management App",
      description: "Developed a real-time task management application with collaborative features.",
      link: "https://github.com/yourusername/task-manager",
      skills: ["React", "Firebase", "Material-UI", "TypeScript"]
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "PostgreSQL", "AWS", "Docker", "Git",
    "REST APIs", "GraphQL", "CI/CD", "Agile", "Team Leadership"
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform -translate-y-2"></div>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-40 h-40 rounded-full mb-8 shadow-lg relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            John Doe
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-muted-foreground mb-6"
          >
            Senior Software Engineer
          </motion.p>
          <motion.div 
            variants={staggerChildren}
            className="flex gap-4"
          >
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:john.doe@example.com" }
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            {[
              { value: "about", icon: <User className="h-4 w-4 mr-2" />, label: "About" },
              { value: "experience", icon: <Briefcase className="h-4 w-4 mr-2" />, label: "Experience" },
              { value: "projects", icon: <Code2 className="h-4 w-4 mr-2" />, label: "Projects" },
              { value: "education", icon: <GraduationCap className="h-4 w-4 mr-2" />, label: "Education" },
              { value: "contact", icon: <MessageSquare className="h-4 w-4 mr-2" />, label: "Contact" }
            ].map(tab => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate software engineer with over 5 years of experience in building web applications.
                    I specialize in frontend development with React and Next.js, but I'm also proficient in backend
                    technologies. I love solving complex problems and creating user-friendly applications.
                  </p>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <motion.div 
                    variants={staggerChildren}
                    className="flex flex-wrap gap-2"
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={fadeIn}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <ScrollArea className="h-[600px] pr-4">
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="mb-4"
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                        <p className="mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <ScrollArea className="h-[600px] pr-4">
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="mb-4"
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          className="group transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                            View Project
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                    <p className="text-muted-foreground">Stanford University • 2016 - 2018</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-muted-foreground">MIT • 2012 - 2016</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <motion.div 
                    className="space-y-4"
                    variants={staggerChildren}
                  >
                    {[
                      { icon: <Mail className="h-5 w-5" />, href: "mailto:john.doe@example.com", text: "john.doe@example.com" },
                      { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", text: "github.com/yourusername" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", text: "linkedin.com/in/yourusername" }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="flex items-center gap-4"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {contact.icon}
                        <a 
                          href={contact.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline transition-colors duration-300"
                        >
                          {contact.text}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}