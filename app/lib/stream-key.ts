// app/lib/stream-key.ts
import { randomUUID } from "crypto";

export function generateStreamKey(): string {
  return randomUUID()
    .replaceAll("-", "")
    .match(/.{1,4}/g)!
    .join("-");
}