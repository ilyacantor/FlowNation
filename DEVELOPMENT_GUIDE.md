# 🧠 FlowNation Development Guide  
**Version:** 1.0 | **Last Updated:** October 2025  
**Audience:** Gemini Deep Think + contributors  
**Owner:** Ilya Cantor  

---

## 1️⃣ Overview
FlowNation runs a **zero-ops workflow**:
- Source of truth → **GitHub (`main` branch)`**
- Continuous deployment → **Netlify**
- Reviews → **Netlify Preview URLs**
- Data layer (future) → **Fauna**

No local or manual deploys are required.  
Every push, pull request, and merge automatically flows through GitHub → Netlify.

---

## 2️⃣ Branching & Commit Rules

| Type | Naming Convention | Example |
|------|-------------------|----------|
| Feature | `feat/<short-name>` | `feat/discover-feed` |
| Fix | `fix/<short-name>` | `fix/profile-form` |
| Docs | `docs/<topic>` | `docs/update-readme` |

**Commit message format**
