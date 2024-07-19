import * as React from "react";
import { Suspense } from "react";
import { EmbedProps as Props } from ".";

const Tweet = React.lazy(() =>
  import("react-tweet").then((t) => ({ default: t.Tweet }))
);

function Twitter({ matches, attrs }: Props) {
  const id = matches[2];

  return (
    <Suspense
      fallback={
        <p dir="auto">
          <a href={attrs.href}>{attrs.href}</a>
        </p>
      }
    >
      <Tweet id={id} />
    </Suspense>
  );
}

export default Twitter;
