export const policies = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  "style-src": ["'self'", "'unsafe-inline'"], 
  "img-src": ["'self'", "blob:", "data:", "https://upload.wikimedia.org"],
  "font-src": ["'self'", "data:"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
  "block-all-mixed-content": [],
  "upgrade-insecure-requests": [],
};

export const getCspString = () => {
  return Object.entries(policies)
    .map(([key, values]) => {
      if (values.length > 0) {
        return `${key} ${values.join(" ")}`;
      }
      return key;
    })
    .join("; ");
};
