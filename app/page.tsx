import { Suspense } from "react";
import AsyncCounter from "./async-counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-12">

      <div className="mb-8">This is some static content. The content below is streamed in after page load</div>

      <Card>
        <CardHeader>
          <CardTitle>Async Counter</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading...</div>}>
            <AsyncCounter />
          </Suspense>
        </CardContent>
      </Card>

    </div>
  )
}