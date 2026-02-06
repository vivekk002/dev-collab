"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function TeamMembers() {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between">
          <CardTitle>Team Members</CardTitle>
          <span className="text-xs text-muted-foreground">View All</span>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
