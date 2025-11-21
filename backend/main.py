from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CHARACTERS = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "description": "A Tatooine farm boy who becomes a key Jedi in the fight against the Empire.",
    "isJedi": True,
    "isFeatured": True,
  },
  {
    "id": 2,
    "name": "Darth Vader",
    "description": "Once a Jedi Knight, now the feared Sith enforcer of the Galactic Empire.",
    "isJedi": False,
    "isFeatured": True,
  },
  {
    "id": 3,
    "name": "Yoda",
    "description": "A wise and powerful Jedi Master who trains generations of Jedi.",
    "isJedi": True,
    "isFeatured": False,
  },
  {
    "id": 4,
    "name": "Leia Organa",
    "description": "Princess of Alderaan, Rebel leader, and a key voice against the Empire.",
    "isJedi": False,
    "isFeatured": False,
  },
  {
    "id": 5,
    "name": "Obi-Wan Kenobi",
    "description": "A calm, disciplined Jedi Master who mentors both Anakin and Luke Skywalker.",
    "isJedi": True,
    "isFeatured": False,
  },
  {
    "id": 6,
    "name": "Han Solo",
    "description": "A charming smuggler and pilot of the Millennium Falcon who joins the Rebellion.",
    "isJedi": False,
    "isFeatured": False,
  },
  {
    "id": 7,
    "name": "R2-D2",
    "description": "A resourceful astromech droid who repeatedly saves his allies with clever improvisation.",
    "isJedi": False,
    "isFeatured": False,
  },
  {
    "id": 8,
    "name": "Palpatine",
    "description": "The secretive Sith Lord behind the fall of the Republic and rise of the Empire.",
    "isJedi": False,
    "isFeatured": False,
  },
]

CHARACTERS_DETAIL = {
    1: {
        "id": 1,
        "name": "Luke Skywalker",
        "isJedi": True,
        "isFeatured": True,
        "gender": "Male",
        "homeworld": "Tatooine",
        "films": ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"],
        "content": {
            "title": "Luke Skywalker",
            "intro": [
                "Luke Skywalker is the main protagonist of the original Star Wars trilogy.",
                "Raised as a farm boy on Tatooine, he became the last hope for the Jedi Order."
            ],
            "sections": [
                {"title": "Training", "bullets": ["Trained by Obi-Wan Kenobi", "Completed training with Yoda on Dagobah", "Confronted Darth Vader and the Emperor"]},
                {"title": "Key Relationships", "bullets": ["Son of Anakin Skywalker (Darth Vader)", "Twin brother of Leia Organa", "Student of Yoda"]}
            ],
            "outro": [
                "Luke rebuilt the Jedi Order after the fall of the Empire.",
                "He passed on his knowledge to a new generation."
            ]
        }
    },
    2: {
        "id": 2,
        "name": "Darth Vader",
        "isJedi": False,
        "isFeatured": True,
        "gender": "Male",
        "homeworld": "Tatooine",
        "films": ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"],
        "content": {
            "title": "Darth Vader",
            "intro": [
                "Once Anakin Skywalker, he fell to the dark side and became the most feared Sith Lord.",
                "Father of Luke and Leia. Commander of the Death Star."
            ],
            "sections": [
                {"title": "The Fall", "bullets": ["Betrayed the Jedi", "Killed by Palpatine's manipulation", "Lost Padmé Amidala"]},
                {"title": "Redemption", "bullets": ["Saved his son Luke", "Destroyed the Emperor", "Died as Anakin Skywalker"]}
            ],
            "outro": [
                "In his final act, Vader chose love over power.",
                "He brought balance to the Force."
            ]
        }
    },
    3: {
        "id": 3,
        "name": "Yoda",
        "isJedi": True,
        "isFeatured": False,
        "gender": "Male",
        "homeworld": "Unknown",
        "films": ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Empire Strikes Back", "Return of the Jedi"],
        "content": {
            "title": "Yoda",
            "intro": [
                "900-year-old Jedi Grand Master.",
                "The wisest and most powerful Jedi of his time."
            ],
            "sections": [
                {"title": "Legacy", "bullets": ["Trained Count Dooku", "Trained Luke Skywalker", "Led the Jedi Council"]},
                {"title": "Exile", "bullets": ["Survived Order 66", "Hid on Dagobah", "Trained Luke in secret"]}
            ],
            "outro": [
                "Fear is the path to the dark side.",
                "Do or do not — there is no try."
            ]
        }
    },
    4: {
        "id": 4,
        "name": "Leia Organa",
        "isJedi": False,
        "isFeatured": False,
        "gender": "Female",
        "homeworld": "Alderaan",
        "films": ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"],
        "content": {
            "title": "Leia Organa",
            "intro": [
                "Princess. Senator. General. Rebel leader.",
                "Twin sister of Luke Skywalker. Daughter of Anakin."
            ],
            "sections": [
                {"title": "Rebellion", "bullets": ["Stole Death Star plans", "Led attack on Endor", "Became General"]},
                {"title": "Force Legacy", "bullets": ["Force-sensitive", "Briefly trained by Luke", "Mother of Ben Solo"]}
            ],
            "outro": [
                "Leia never stopped fighting for freedom.",
                "Her courage inspired the galaxy."
            ]
        }
    },
    5: {
        "id": 5,
        "name": "Obi-Wan Kenobi",
        "isJedi": True,
        "isFeatured": False,
        "gender": "Male",
        "homeworld": "Stewjon",
        "films": ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope"],
        "content": {
            "title": "Obi-Wan Kenobi",
            "intro": [
                "Jedi Master. Mentor to Anakin and Luke.",
                "Known as 'The Negotiator."
            ],
            "sections": [
                {"title": "Master & Apprentice", "bullets": ["Trained by Qui-Gon Jinn", "Trained Anakin Skywalker", "Defeated Darth Maul"]},
                {"title": "Exile & Sacrifice", "bullets": ["Watched over Luke for 19 years", "Faced Darth Vader", "Became one with the Force"]}
            ],
            "outro": [
                "Hello there.",
                "The Force will be with you. Always."
            ]
        }
    },
    6: {
        "id": 6,
        "name": "Han Solo",
        "isJedi": False,
        "isFeatured": False,
        "gender": "Male",
        "homeworld": "Corellia",
        "films": ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens"],
        "content": {
            "title": "Han Solo",
            "intro": [
                "Smuggler. Scoundrel. Hero.",
                "Captain of the Millennium Falcon."
            ],
            "sections": [
                {"title": "Legendary Feats", "bullets": ["Made the Kessel Run in 12 parsecs", "Rescued Luke from Hoth", "Killed by his son"]},
                {"title": "Love & Loyalty", "bullets": ["In love with Leia", "Best friend of Chewbacca", "Returned to save the Rebellion"]}
            ],
            "outro": [
                "Never tell me the odds.",
                "I know."
            ]
        }
    },
    7: {
        "id": 7,
        "name": "R2-D2",
        "isJedi": False,
        "isFeatured": False,
        "gender": "Droid",
        "homeworld": "Naboo",
        "films": ["All 9 main episodes"],
        "content": {
            "title": "R2-D2",
            "intro": [
                "The bravest astromech droid in the galaxy.",
                "Loyal companion of Anakin, Luke, and Rey."
            ],
            "sections": [
                {"title": "Heroic Saves", "bullets": ["Saved Padmé multiple times", "Delivered Leia's message", "Fixed the Falcon in flight"]},
                {"title": "Never Wiped", "bullets": ["Only droid with full memory", "Knows all secrets", "Still beeping strong"]}
            ],
            "outro": [
                "Beep boop beep!",
                "The real MVP of Star Wars."
            ]
        }
    },
    8: {
        "id": 8,
        "name": "Palpatine",
        "isJedi": False,
        "isFeatured": False,
        "gender": "Male",
        "homeworld": "Naboo",
        "films": ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "Return of the Jedi", "The Rise of Skywalker"],
        "content": {
            "title": "Emperor Palpatine",
            "intro": [
                "The ultimate Sith Lord.",
                "Masterminded the fall of the Republic."
            ],
            "sections": [
                {"title": "Master Plan", "bullets": ["Played both sides of the Clone Wars", "Executed Order 66", "Turned Anakin"]},
                {"title": "Unlimited Power", "bullets": ["Ruled as Emperor for decades", "Returned in Episode IX", "Defeated by Rey"]}
            ],
            "outro": [
                "Everything is proceeding as I have foreseen.",
                "The dark side of the Force is a pathway to many abilities some consider to be unnatural."
            ]
        }
    }
}

@app.get("/characters")
def get_characters():
    return CHARACTERS

@app.get("/characters/{character_id}")
async def get_character(character_id: int):
    return CHARACTERS_DETAIL.get(character_id, {"error": "Not found"})