import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ButtonRounded(dark: boolean) {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        {dark ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
}
