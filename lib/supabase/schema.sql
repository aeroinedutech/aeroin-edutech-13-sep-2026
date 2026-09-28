-- ============================================================
-- Aeroin EduTech
-- Enrollment Database Schema
-- ============================================================

-- Enable UUID generation
create extension if not exists pgcrypto;


-- ============================================================
-- ENROLLMENTS
-- ============================================================

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),

  -- Aeroin EduTech enrollment reference
  enrollment_id text unique not null,

  -- Student details
  full_name text not null,
  email text not null,
  phone text not null,

  institution text,
  qualification text,
  city text,

  -- Program details
  program_id text not null,
  program_name text not null,
  program_type text not null,
  duration text not null,

  -- Payment details
  amount integer not null,
  currency text not null default 'INR',

  status text not null default 'PENDING'
    check (
      status in (
        'PENDING',
        'PAID',
        'FAILED',
        'CANCELLED'
      )
    ),

  -- Razorpay details
  razorpay_order_id text,
  razorpay_payment_id text,
  razorpay_signature text,

  -- Timestamps
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- INDEXES
-- ============================================================

create index if not exists enrollments_email_idx
  on public.enrollments (email);

create index if not exists enrollments_program_id_idx
  on public.enrollments (program_id);

create index if not exists enrollments_status_idx
  on public.enrollments (status);

create index if not exists enrollments_razorpay_order_idx
  on public.enrollments (razorpay_order_id);


-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.enrollments enable row level security;


-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================

create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


drop trigger if exists update_enrollments_updated_at
on public.enrollments;

create trigger update_enrollments_updated_at
before update on public.enrollments
for each row
execute function public.update_updated_at();

alter table public.enrollments enable row level security;