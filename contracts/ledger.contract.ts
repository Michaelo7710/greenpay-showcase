/**
 * GreenPay Architectural Contract: Double-Entry ACID Ledger
 * Domain-Driven Design (DDD) Value Objects & Transaction Interfaces
 * (c) 2026 GreenPay FinTech Systems. Proprietary Architecture Contracts.
 */

export type LedgerEntryType = 'DEBIT' | 'CREDIT';
export type TransactionStatus = 'PENDING' | 'CLEARED' | 'REJECTED' | 'VOIDED';

export interface LedgerEntry {
  readonly accountId: string;
  readonly type: LedgerEntryType;
  readonly amount: bigint; // In minor monetary units (cents/sen) to eliminate floating-point drift
  readonly currency: 'IDR' | 'USD';
}

export interface CanonicalTransactionContract {
  readonly referenceNumber: string; // Server authoritative format REF-YYYYMMDD-XXXX
  readonly idempotencyKey: string;
  readonly sourceAccountId: string;
  readonly destinationAccountId: string;
  readonly entries: readonly [LedgerEntry, LedgerEntry]; // Balanced double-entry pair
  readonly timestamp: Date;
  readonly status: TransactionStatus;
}

export type LedgerResult<T> = 
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly errorCode: string; readonly message: string };
