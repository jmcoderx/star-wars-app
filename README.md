# Star Wars Character Explorer

### Run the project

```bash
# 1. Clone & enter repo
git clone https://github.com/jmcoderx/star-wars-app
cd star-wars-app

# 2. Start backend
cd backend
pip3 install fastapi "uvicorn[standard]" # ← run once if python not installed
uvicorn main:app --reload --port=8000
# (leave this terminal running)

# 3. Start frontend (new terminal)
cd star-wars-app/frontend/app
npm install
npm run dev
