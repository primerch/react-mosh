import { useEffect } from "react";

export default function Chat() {
  const connect = () => console.log("Connection to Chat Server...");

  const disconnect = () => console.log("Disconnecting to Chat Server...");

  useEffect(() => {
    connect();
    return disconnect;
  });

  return <></>;
}
