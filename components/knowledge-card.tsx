"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface KnowledgeCardProps {
  title: string;
  description: string;
  downloadCount: string;
  type: string;
}

export default function KnowledgeCard({
  title,
  description,
  downloadCount,
  type,
}: KnowledgeCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-0.5 rounded">
            {type}
          </span>
          <span className="text-sm text-gray-500">
            {downloadCount} {t("knowledge.downloads")}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Download className="mr-2 h-4 w-4" />
          {t("knowledge.download")}
        </Button>
      </CardContent>
    </Card>
  );
}
