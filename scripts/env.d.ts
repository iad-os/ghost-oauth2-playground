/// <reference types="node" />
declare module "dotenv" {
  export interface DotenvConfigOutput {
    parsed?: Record<string, string>;
    error?: Error;
  }
  export function config(options?: { path?: string }): DotenvConfigOutput;
}
