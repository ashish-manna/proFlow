import { BarChart, Calendar, Layout } from "lucide-react";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/Card";

const Fetatures = () => {
  const features = [
    {
      title: "Intuitive Kanban Boards",
      description:
        "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
      icon: Layout,
    },
    {
      title: "Powerful Sprint Planning",
      description:
        "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
      icon: Calendar,
    },
    {
      title: "Comprehensive Reporting",
      description:
        "Gain insights into your team's performance with detailed, customizable reports and analytics.",
      icon: BarChart,
    },
  ];
  return (
    <div className="w-full bg-gray-900 pb-20 px-10">
      <div className="text-4xl font-bold text-center py-10">Key Features</div>
      <div className="grid grid-cols-1 gap-2 px-5 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index}>
            <Card className="bg-blue-950">
              <div className="w-full flex justify-start px-5 items-center">
                <feature.icon className="w-10 h-10" />
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">{feature.title}</CardTitle>
                <CardDescription className="text-md">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetatures;
