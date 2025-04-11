-- Create tables for AI features

-- Table for AI conversations (FAQ and Tax Guidance)
CREATE TABLE IF NOT EXISTS ai_conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  conversation_type TEXT NOT NULL, -- 'faq', 'tax_guidance'
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for document summaries
CREATE TABLE IF NOT EXISTS ai_document_summaries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  document_name TEXT NOT NULL,
  document_text TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for automated responses
CREATE TABLE IF NOT EXISTS ai_automated_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  inquiry TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_document_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_automated_responses ENABLE ROW LEVEL SECURITY;

-- Conversations are viewable by the user who created them and admins
CREATE POLICY "Conversations are viewable by the user who created them"
ON ai_conversations FOR SELECT
USING (auth.uid() = user_id OR auth.jwt() ? 'is_admin');

-- Document summaries are viewable by the user who created them and admins
CREATE POLICY "Document summaries are viewable by the user who created them"
ON ai_document_summaries FOR SELECT
USING (auth.uid() = user_id OR auth.jwt() ? 'is_admin');

-- Automated responses are viewable by the user who created them and admins
CREATE POLICY "Automated responses are viewable by the user who created them"
ON ai_automated_responses FOR SELECT
USING (auth.uid() = user_id OR auth.jwt() ? 'is_admin');

-- Insert policies
CREATE POLICY "Users can insert their own conversations"
ON ai_conversations FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert their own document summaries"
ON ai_document_summaries FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert their own automated responses"
ON ai_automated_responses FOR INSERT
WITH CHECK (auth.uid() = user_id);
