"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function QuickActions() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Button variant="outline">New Document</Button>
            <Button variant="outline">Create Task</Button>
            <Button variant="outline">Invite Member</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
