# Star Wars Character Explorer

### Run the project

```bash
# 1. Clone & enter repo
git clone
cd app

# 2. Start backend
cd backend
uvicorn main:app --reload --port=8000
# (leave this terminal running)

# 3. Start frontend (new terminal)
cd app/frontend/app
npm install
npm run dev

# 4. Open app in browser
http://127.0.0.1:5173
