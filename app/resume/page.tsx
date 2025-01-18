"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";
import Input from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/TextArea";
import { ResumeData } from "../types/resume";

export default function ResumeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeData>();

  const steps = [
    { id: 1, name: "Personal Info", icon: User },
    { id: 2, name: "Education", icon: GraduationCap },
    { id: 3, name: "Experience", icon: Briefcase },
    { id: 4, name: "Skills & Projects", icon: Code },
  ];

  const onSubmit = (data: ResumeData) => {
    console.log(data);
    // Handle PDF generation here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-200 -z-10" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  currentStep >= step.id ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep >= step.id
                      ? "bg-blue-600 text-white"
                      : "bg-white border-2 border-gray-300"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="mt-2 font-medium text-sm">{step.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-sm border p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="First Name"
                {...register("personalInfo.firstName", {
                  required: "First name is required",
                })}
                error={errors.personalInfo?.firstName?.message}
                placeholder="John"
              />
              <Input
                label="Last Name"
                {...register("personalInfo.lastName", {
                  required: "Last name is required",
                })}
                error={errors.personalInfo?.lastName?.message}
                placeholder="Doe"
              />
              <Input
                label="Email"
                type="email"
                {...register("personalInfo.email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.personalInfo?.email?.message}
                placeholder="john.doe@example.com"
              />
              <Input
                label="Phone"
                {...register("personalInfo.phone", {
                  required: "Phone is required",
                })}
                error={errors.personalInfo?.phone?.message}
                placeholder="+1 (555) 000-0000"
              />
              <div className="col-span-2">
                <Textarea
                  label="Professional Summary"
                  {...register("personalInfo.summary", {
                    required: "Summary is required",
                  })}
                  error={errors.personalInfo?.summary?.message}
                  placeholder="Brief overview of your professional background and key achievements..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
          )}
          <div className="ml-auto">
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Generate Resume
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
