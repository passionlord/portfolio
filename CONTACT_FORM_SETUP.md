# Contact Form Supabase Setup

The Get In Touch form now stores submissions in the `contact_messages` table.

Run this SQL in your Supabase SQL Editor:

```sql
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

drop policy if exists "Only authenticated users can read contact messages" on public.contact_messages;
create policy "Only authenticated users can read contact messages"
on public.contact_messages
for select
to authenticated
using (true);
```

## Notes

- `anon` users can submit messages from the portfolio form.
- Reading messages is restricted to logged-in users only.
- If you want to review submissions, use Supabase Table Editor and sign in first.