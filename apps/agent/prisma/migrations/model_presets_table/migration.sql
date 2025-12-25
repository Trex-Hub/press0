CREATE TABLE model_presets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- What the user sees in the dropdown
  display_name TEXT NOT NULL,          -- e.g. 'Kimi K2 Thinking'
  description TEXT,                    -- short helper text (optional)
  note TEXT,                           -- e.g. 'Hosted in US', 'Experimental', 'Faster but less accurate'
  icon TEXT,                           -- icon name or URL (optional)

  -- Internal routing (owned by you)
  provider TEXT NOT NULL,              -- 'openai', 'anthropic', 'kimi', etc.
  provider_model TEXT NOT NULL,        -- exact model id used in API call

  -- Feature flags (this is the core)
  is_enabled BOOLEAN DEFAULT true,      -- instant on/off
  is_default BOOLEAN DEFAULT false,     -- fallback if user hasn't selected

  -- UI behavior
  sort_order INT DEFAULT 100,
  show_in_ui BOOLEAN DEFAULT true,

  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

