import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("with-opentelemetry-deploy");
  globalThis.message = "Hello from instrumentation.ts";
}
