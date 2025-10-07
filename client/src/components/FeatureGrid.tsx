import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";

export default function FeatureGrid({ features }) {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Bike;
          return (
            <Card key={i} className="bg-neutral-800 hover:bg-neutral-700 transition">
              <CardContent className="p-6 text-center space-y-4">
                <Icon className="w-10 h-10 mx-auto text-cyan-400" />
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-sm opacity-80">{f.desc}</p>
                <a
                  href={f.link}
                  className="inline-block mt-3 text-cyan-400 hover:text-orange-400"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
