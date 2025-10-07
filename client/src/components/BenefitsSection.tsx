import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

interface BenefitsSectionProps {
  benefits: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {benefits.map((b, i) => {
          const Icon = (Icons as any)[b.icon] || Icons.Star;
          return (
            <Card key={i} className="bg-neutral-900 border border-neutral-800">
              <CardContent className="p-6 text-center space-y-4">
                <Icon className="w-10 h-10 mx-auto text-orange-400" />
                <h3 className="text-xl font-semibold">{b.title}</h3>
                <p className="text-sm opacity-80">{b.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
