/**
 * GreenPay Architectural Contract: Privacy & Screen Protection Gate
 * Statutory UU PDP No. 27/2022 & GDPR-Equivalent Data Masking
 * (c) 2026 GreenPay FinTech Systems. Proprietary Architecture Contracts.
 */

export interface SensitiveFinancialData {
  readonly bankAccountNumber: string;
  readonly phoneNumber: string;
  readonly accountHolderName: string;
}

export interface MaskedFinancialDisplay {
  readonly maskedAccountNumber: string; // e.g. "******1234"
  readonly maskedPhoneNumber: string;   // e.g. "0812****8901"
  readonly maskedHolderName: string;    // e.g. "M****** L*****"
  readonly authoritativeServerVerified: true;
}

export interface ScreenProtectionContract {
  enableHardwareFlagSecure(): Promise<void>;
  disableHardwareFlagSecure(): Promise<void>;
  isScreenCaptureBlocked(): boolean;
}
