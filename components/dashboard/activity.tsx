"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Activity() {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Activity</CardTitle>
          <Link
            href="/activity"
            className="text-blue-500 text-xs hover:underline"
          >
            View All
          </Link>
        </CardHeader>
        <CardContent className="max-h-[350px] overflow-y-auto">
          <div className="flex flex-col gap-2p-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-sm text-muted-foreground">
                    New document created
                  </span>
                </div>
                <span className="text-xs text-muted-foreground text-right pt-1">
                  2 hours ago
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
