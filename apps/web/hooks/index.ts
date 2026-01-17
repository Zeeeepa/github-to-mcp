/**
 * Hooks barrel export
 * @copyright 2024-2026 nirholas
 * @license MIT
 */

export { useStreaming } from './useStreaming';
export { useBatchConversion } from './useBatchConversion';
export { usePlatformDetection } from './usePlatformDetection';
export { useDockerConfig } from './useDockerConfig';
export { useMcpExecution } from './use-mcp-execution';
export type { 
  UseMcpExecutionOptions, 
  UseMcpExecutionReturn, 
  ExecutionLog, 
  ExecuteToolResult 
} from './use-mcp-execution';

// Enhanced MCP Client hooks
export { 
  useMcpClient,
  useHttpMcpClient,
  useWebSocketMcpClient,
  usePlaygroundMcpClient,
} from './use-mcp-client';
export type {
  UseMcpClientOptions,
  UseMcpClientReturn,
  McpClientHookState,
  McpClientLog,
} from './use-mcp-client';

// Playground hooks
export {
  usePlaygroundState,
  usePlaygroundNavigation,
  usePlaygroundErrors,
  useToolExecution,
  usePlaygroundAnalytics,
  usePlaygroundSharing,
} from './use-playground-store';
export type {
  PlaygroundState,
  PlaygroundError,
  ExecuteToolRequest,
  ExecuteToolResponse,
} from './use-playground-store';
