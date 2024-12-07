import { ReferralStatus } from "@/enums/ReferralStatus";

export interface Referral {
  id: number;
  referral_id: string;
  status: ReferralStatus;
  reason?: string;
  is_repeat_family: boolean;
  post_code?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  referees?: Referee[];
  midwives?: Midwife[];
  guardians?: Guardian[];
  children?: Child[];
  items?: Item[];
  clothing?: Clothing[];
  shoes?: Shoe[];
  guardianSurnames: string;
}

export interface Referee {
  id: number;
  email: string;
  first_name: string;
  surname: string;
  company?: string;
  tel?: string;
  job_role?: string;
  referral_id: number;
}

export interface Midwife {
  id: number;
  required: boolean;
  email?: string;
  first_name?: string;
  surname?: string;
  tel?: string;
  referral_id: number;
}

export interface Guardian {
  id: number;
  first_name: string;
  surname: string;
  age: number;
  referral_id: number;
}

export interface Child {
  id: number;
  first_name: string;
  surname: string;
  date_of_birth: string;
  gender: string;
  referral_id: number;
}

export interface Item {
  id: number;
  item: string; // e.g., "toiletry_pack", "nappies", "moses_basket"
  required: boolean;
  quantity?: number; // Optional
  details?: Record<string, any>; // JSONB
  referral_id: number; // Foreign key
}

// Clothing Type
export interface Clothing {
  id: number;
  type: string; // e.g., "maternity", "children"
  size?: string; // Optional
  gender?: string; // Optional ("boy", "girl", "unisex")
  required: boolean;
  referral_id: number; // Foreign key
}

// Shoe Type
export interface Shoe {
  id: number;
  size?: string; // Optional
  type: string; // "shoes" or "socks"
  required: boolean;
  referral_id: number; // Foreign key
}