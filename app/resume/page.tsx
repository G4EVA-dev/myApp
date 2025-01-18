// types.ts
interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications?: string[];
  languages?: { language: string; proficiency: string }[];
}

// components/ResumeForm.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ResumeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeData>();

  const steps = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Education" },
    { id: 3, name: "Experience" },
    { id: 4, name: "Skills & Projects" },
  ];

  const onSubmit = (data: ResumeData) => {
    console.log(data);
    // Handle PDF generation here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex-1 text-center ${
                currentStep >= step.id ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div className="relative">
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step.id
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {step.id}
                </div>
                <div className="mt-2">{step.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    {...register("personalInfo.firstName", { required: true })}
                    placeholder="First Name"
                    className="w-full"
                  />
                  {errors.personalInfo?.firstName && (
                    <span className="text-red-500">First name is required</span>
                  )}
                </div>
                <div>
                  <Input
                    {...register("personalInfo.lastName", { required: true })}
                    placeholder="Last Name"
                    className="w-full"
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    {...register("personalInfo.email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="w-full"
                  />
                </div>
                <div className="col-span-2">
                  <Textarea
                    {...register("personalInfo.summary", { required: true })}
                    placeholder="Professional Summary"
                    className="w-full"
                    rows={4}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          {currentStep > 1 && (
            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
            >
              Previous
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </Button>
          ) : (
            <Button type="submit">Generate Resume</Button>
          )}
        </div>
      </form>
    </div>
  );
}
