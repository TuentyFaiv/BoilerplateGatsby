export interface Boot {
  required: string;
}

export interface BootContact extends Boot {
  email: string;
  requiredTerms: string;
}
