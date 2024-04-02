"use client";

// import { Card } from "./card";
// import Image from "next/image";
import { useSearchParams } from "next/navigation";

export const Welcome = () => {
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest");

  if (!guest) return <>Välkommen till partyt!</>;

  return <>Välkommen till partyt, {guest}!</>;
};
