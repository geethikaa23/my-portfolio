import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Geethika</h1>
        <p className="text-lg text-gray-600 mt-2">Full Stack Developer | Cloud Engineer</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild><a href="https://github.com/geethikaa23"><FaGithub size={24} /></a></Button>
          <Button asChild><a href="https://www.linkedin.com/in/geethika-madamanchi-787656226/"><FaLinkedin size={24} /></a></Button>
          <Button asChild><a href="mailto:madamanchigeethika"><FaEnvelope size={24} /></a></Button>
        </div>
      </div>
      
      <div className="mt-10 space-y-6">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-gray-600">I am a final-year B.Tech CSE student passionate about building scalable web applications and cloud solutions. With experience in Kubernetes, AWS, and the MERN stack, I focus on developing robust and secure applications.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="list-disc ml-5 text-gray-600">
              <li><strong>Unauthorized Access Detection</strong> – Security system using ML, Splunk, and IBM QRadar.</li>
              <li><strong>Smart City Solutions</strong> – IoT-based project for urban development.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="text-gray-600"><strong>Samsung Electro-Mechanics</strong> – Kubernetes Developer Intern</p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Deployed containerized applications using Kubernetes and Harbor.</li>
              <li>Developed role-based authentication systems.</li>
              <li>Integrated Prometheus for monitoring Kubernetes clusters.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <ul className="list-disc ml-5 text-gray-600">
              <li>AWS Certified Cloud Practitioner</li>
              <li>Microsoft Certified Azure Fundamentals</li>
              <li>ServiceNow Certified  Application Developer(CAD) & System Administrator(CSA)</li>
              <li>Automation Anywhere Certified RPA Professional (Automation 360)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
