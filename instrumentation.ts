import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("with-opentelemetry-deploy-1");
  globalThis.message = "Hello from instrumentation.ts";
}
