import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("with-opentelemetry-deploy-2");
  globalThis.message = "Hello from instrumentation.ts";
}
