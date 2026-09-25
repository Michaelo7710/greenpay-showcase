/**
 * GreenPay Architectural Contract: In-Flight Idempotency Engine
 * Zero-Double-Spending Lock & Atomic Execution Protocol
 * (c) 2026 GreenPay FinTech Systems. Proprietary Architecture Contracts.
 */

export interface IdempotencyHeaderPayload {
  readonly idempotencyKey: string; // SHA-256 client mutation signature
  readonly requestedAt: number;     // UNIX epoch in milliseconds
  readonly requestPath: string;
}

export type LockState = 'ACQUIRED' | 'IN_FLIGHT_COLLISION' | 'CACHE_HIT';

export interface IdempotentExecutionContract<TPayload, TResponse> {
  acquireLock(key: string, ttlMs: number): Promise<LockState>;
  executeAtomic(payload: TPayload): Promise<TResponse>;
  releaseLock(key: string, responseCache: TResponse): Promise<void>;
}

export interface CachedIdempotentResponse<T> {
  readonly status: number;
  readonly payload: T;
  readonly cachedAt: Date;
}
