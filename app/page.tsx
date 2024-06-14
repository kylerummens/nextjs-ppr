import { Suspense } from "react";
import AsyncCounter from "./async-counter";

export default function Home() {
  return (
    <div>

      This is some static content. The content below is streamed in after page load

      <div>
          <div>Async counter:</div>
          <Suspense fallback={<div>Loading...</div>}>
            <AsyncCounter />
          </Suspense>
        </div>

    </div>
  )
}