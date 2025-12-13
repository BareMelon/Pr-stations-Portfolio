# Import tkinter
import tkinter as tk
root = tk.Tk()

variables = {CharacterName1 = ""
CharacterName1short = ""
Item1 = ""
Item2 = ""
Item3 = ""
CharacterName2 = ""
Emote1 = ""
Gazed = ""
Item4 = ""
Item5 = ""
CharacterName3 = ""
Tøj1 = ""
VoiceLine1 = ""
Hastighed = ""
SmukkereEndHvem = ""
Item6 = ""
ChracterName3 = ""
Placement = ""
KeybindToWhat = ""
Keybind1 = ""
Item7 = ""
Boss1 = ""
Music1 = ""
Music1Lyrics = ""
Chair = ""
username = ""
}

# import time
import time

# Import story
from docx import Document
doc = Document("story.docx")


for parg in doc.paragraphs:
    parg.text = parg.text.replace("#CharacterName1", "Skibidi Toilet Booze man ")
    
    # Replace placeholders with the corresponding values
    parg.text = parg.text.replace("#CharacterName1", CharacterName1)
    parg.text = parg.text.replace("#CharacterName1short", "CharacterName1short ")

# Save the document
doc.save("StorySilly.docx")

