CREATE TABLE IF NOT EXISTS todos (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(1024),
  is_completed BOOLEAN
);