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
  GraduationCap,
  User,
  MessageSquare,
  Phone,
  MessageCircle
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
      company: "GE Vernova",
      period: "May 2021 - Present",
      description: "Spearheaded the migration of 5000+ microservices from a Cloud Foundry-based PaaS to a modern, scalable platform built on AWS EKS using both Fargate and Managed Nodegroups, improving operational efficiency by 30% and reducing infrastructure costs by 60%.",
      skills: ["OSS Cloud Foundry", "AWS", "Terraform", "GitOps", "Docker", "Kubernetes", "CI/CD", "Crossplane", "ArgoCD", "Linux", "Splunk", "Prometheus", "Grafana"]
    },
    {
      title: "Software Engineering Professional",
      company: "British Telecom",
      period: "Nov 2019 - May 2021",
      description: "Led the Cloud Transformation of multiple legacy monolithic application architecture to microservices-based architecture on Pivotal Cloud Foundry PaaS built on top of AWS IaaS, reducing costs by 40%, improving scalability by 50% and Developer productivity by 80%.",
      skills: ["Pivotal Cloud Foundry", "AWS", "Terraform", "GitOps", "Docker", "Kubernetes", "CI/CD", "Concourse", "Linux", "Splunk", "ELK", "Prometheus", "Grafana"]
    },
    {
      title: "AVP, Cloud Platform Engineer",
      company: "Synchrony Financial",
      period: "Oct 2018 - Oct 2019",
      description: "Managed Pivotal Cloud Foundry PaaS administration, including installation and day-to-day operations across AWS and vSphere IaaS layers, focusing on application delivery, Bosh Director deployment, backup and restoration, and advanced troubleshooting of PCF foundations.",
      skills: ["Pivotal Cloud Foundry", "AWS", "Terraform", "GitOps", "Docker", "Kubernetes", "CI/CD", "Concourse", "Linux", "Splunk", "Prometheus", "NewRelic"]
    },
    {
      title: "Technical lead",
      company: "Cognizant Technology Solutions",
      period: "Mar 2014 - Oct 2018",
      description: "As a seasoned Pivotal Cloud Foundry (PCF) Administrator, I have demonstrated expertise in managing PCF foundations across diverse IaaS layers, including AWS, Azure, and vSphere. Over the course of my career, I have successfully installed and maintained 15+ PCF foundations, ensuring robust platform availability and scalability to support enterprise application delivery for organizations with 5,000+ users.",
      skills: ["Pivotal Cloud Foundry", "AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Concourse", "Middleware", "Oracle Weblogic", "Linux", "Splunk", "Prometheus"]
    }
  ];
/*
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
*/
  const skills = [
    "AWS", "Azure", "Pivotal/OSS Cloud Foundry", "Kubernetes", "AWS", "Terraform", "VmWare Tanzu",
    "Linux", "Bash", "Docker", "Git", "Crossplane", "Concourse", "Prometheus", "Grafana", "ELK",
    "Github Actions", "Jenkins", "CI/CD", "Agile", "Team Leadership", "EKS", "AKS", "Platform Engineering"
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
              src="/Arvind-Portfolio/images/Arvindv1.JPG"
              alt="Profile"
              className="w-40 h-40 rounded-full mb-8 shadow-lg relative z-10 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.h1 
            variants={fadeIn}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Arvind Chaturvedi
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-muted-foreground mb-6"
          >
            👩‍💻Senior ☁️ Cloud 🌐 Platform 🛡️ DevSecOps ⚙️ Engineer ⭐
          </motion.p>
          <motion.div 
            variants={staggerChildren}
            className="flex gap-4"
          >
            {[
              { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/ArvindChaturvedi" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/arvind-chaturvedi" },
              { icon: <Mail className="h-5 w-5" />, href: "mailto:Arvind.Chaturvedi1092@gmail.com" },
              { icon: <Phone className="h-5 w-5" />, href: "tel:+917406062351" },
              { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/+917406062351" }
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
          <TabsList className="grid w-full grid-cols-4">
            {[
              { value: "about", icon: <User className="h-4 w-4 mr-2" />, label: "About" },
              { value: "experience", icon: <Briefcase className="h-4 w-4 mr-2" />, label: "Experience" },
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
                     👋 Hi there! I'm Arvind, a passionate Cloud Platform engineer with over 10 years 9 months of hands-on experience in driving operational excellence through Pivotal/OSS Cloud Foundry, VmWare Tanzu products, AWS, Kubernetes, EKS, Terraform and platform engineering. 🚀💼
                      <br /><br />   
                      ✨ I thrive in architecting and implementing robust cloud solutions that seamlessly bridge the gap between development and operations. My journey has been marked by a deep commitment to optimizing deployment pipelines, enhancing scalability, and ensuring the reliability of complex systems.📚🤝
                      <br /><br />          
                      💡 Let's connect! Whether you're looking to optimize your cloud strategy, revamp your CI/CD pipelines, or enhance your Kubernetes orchestration, I'm here to contribute my expertise and drive transformative results. Reach out and let's explore how we can create impactful solutions together.🌍✨
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
                    <h3 className="text-xl font-semibold">The Linux Foundation(CNCF) Certified</h3>
                    <p className="text-muted-foreground">Certified Kubernetes Administrator • 2024 - 2027</p>
                    <p className="text-muted-foreground">Certified Kubernetes Security Specialist • 2024 - 2027</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold">Bachelor of Engineering (ECE)</h3>
                    <p className="text-muted-foreground">All Saints' College of Technology (RGPV) • 2009 - 2013</p>
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
                      { icon: <Mail className="h-5 w-5" />, href: "mailto:Arvind.Chaturvedi1092@gmail.com", text: "Arvind.Chaturvedi1092@gmail.com" },
                      { icon: <Phone className="h-5 w-5" />, href: "tel:+917406062351", text: "+91 (740) 606-2351" },
                      { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/7406062351", text: "WhatsApp" },
                      { icon: <Github className="h-5 w-5" />, href: "https://www.github.com/ArvindChaturvedi", text: "www.github.com/ArvindChaturvedi" },
                      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/arvind-chaturvedi", text: "www.linkedin.com/in/arvind-chaturvedi" }
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
