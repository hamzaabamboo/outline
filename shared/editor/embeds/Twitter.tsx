import * as React from "react";
import { EmbedProps as Props } from ".";

const Tweet = React.lazy(() =>
  import("react-tweet").then((t) => ({ default: t.Tweet }))
);

function Twitter({ matches }: Props) {
  const id = matches[2];

  return <Tweet id={id} />;
}

export default Twitter;
