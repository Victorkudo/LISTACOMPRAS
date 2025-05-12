// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://iwwocpgfaxybrcyuwtux.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3d29jcGdmYXh5YnJjeXV3dHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NTQsImV4cCI6MjA2MjExMTY1NH0.pN3CoGObxnT4v2NqaCid9wRrD-GYJm1HMw1S-p305-k'
)