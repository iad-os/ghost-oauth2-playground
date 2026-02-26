#!/usr/bin/env node
/// <reference types="node" />
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { spawnSync } from "node:child_process";
import dotenv from "dotenv";

const TYPES_PATH = "./src/api/types";
const CLIENT_PATH = "./src/api/clients";

const SUFFIX_TYPES = ".d.ts";
const SUFFIX_CLIENT = ".api.ts";

const services: {
  name: string;
  openapiPath: string;
}[] = [
  {
    name: "service_name",
    openapiPath: "/swagger.json",
  },
];

const resolveEnvPath = (args: string[]): string => {
  if (args[0] === "--env" && args[1]) {
    return args[1];
  }
  if (args[0]?.startsWith("--env=")) {
    return args[0].slice("--env=".length);
  }
  return args[0] ?? ".env";
};

const envArg = resolveEnvPath(process.argv.slice(2));
const ENV_PATH = join(process.cwd(), envArg);
console.log(`🔧 Uso file env: ${ENV_PATH}`);

if (!existsSync(ENV_PATH)) {
  console.error(`❌ File env mancante: ${ENV_PATH}`);
  process.exit(1);
}

const envResult = dotenv.config({ path: ENV_PATH });
if (envResult.error) {
  console.error(`❌ Impossibile caricare env: ${ENV_PATH}`);
  process.exit(1);
}

const baseUrl = process.env.GENERATE_API_BASE_URL;

if (!baseUrl) {
  console.error("❌ API_BASE_URL non è impostata nel file env.");
  process.exit(1);
}

const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
console.log(`🌐 Base URL API: ${normalizedBaseUrl}`);

const normalizeImportPath = (fromFile: string, toFile: string): string => {
  const fromDir = dirname(fromFile);
  let importPath = relative(fromDir, toFile).replace(/\\/g, "/");
  if (!importPath.startsWith(".")) {
    importPath = `./${importPath}`;
  }
  return importPath;
};

const buildClientFile = (service: {
  name: string;
  typesPath: string;
  clientPath: string;
}): string => {
  const typesImport = normalizeImportPath(
    service.clientPath,
    service.typesPath,
  );
  const authFetchImport = normalizeImportPath(
    service.clientPath,
    "./src/api/openapiFetchAuth.js",
  );
  const clientName = `$${service.name}Api`;

  return [
    "import createClient from 'openapi-react-query';",
    `import createAuthFetch from '${authFetchImport}';`,
    `import type { paths } from '${typesImport}';`,
    "",
    `const ${clientName} = createClient(createAuthFetch<paths>());`,
    `export default ${clientName};`,
    "",
  ].join("\n");
};

const ensureDir = (path: string): void => {
  mkdirSync(path, { recursive: true });
};

ensureDir(TYPES_PATH);
ensureDir(CLIENT_PATH);

for (const service of services) {
  const openapiUrl = `${normalizedBaseUrl}${service.openapiPath}`;
  const binPath = join(
    process.cwd(),
    "node_modules",
    ".bin",
    "openapi-typescript",
  );
  console.log(`🚀 Generazione ${service.name} da ${openapiUrl}`);
  const typesPath = join(TYPES_PATH, `${service.name}${SUFFIX_TYPES}`);
  const result = spawnSync(binPath, [openapiUrl, "-o", typesPath], {
    stdio: "inherit",
  });

  if (result.status !== 0) {
    console.error(`❌ Generazione fallita per ${service.name}.`);
    process.exit(result.status ?? 1);
  }
  console.log(`✅ Tipi generati per ${service.name}: ${typesPath}`);
  const clientPath = join(CLIENT_PATH, `${service.name}${SUFFIX_CLIENT}`);
  const clientContent = buildClientFile({
    name: service.name,
    typesPath,
    clientPath,
  });
  writeFileSync(clientPath, clientContent, "utf8");
  console.log(`🧩 Client generato per ${service.name}: ${clientPath}`);
}

console.log("🎉 Generazione API completata con successo.");
