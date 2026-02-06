import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellRing } from "lucide-react";
import QuickActions from "@/components/dashboard/quick-actions";
import Activity from "@/components/dashboard/activity";
import TeamMembers from "@/components/dashboard/team-members";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen gap-4 w-[70%] mr-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>My Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Active Documents</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Unread Messages</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Team Online</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="w-[30%] border-l pl-5 flex flex-col gap-4">
        <QuickActions />
        <Activity />
        <TeamMembers />
      </div>
    </div>
  );
}
