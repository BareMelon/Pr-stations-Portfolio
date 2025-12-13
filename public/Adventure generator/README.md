## Adventure Generator – Projektbeskrivelse

Denne lille applikation udskriver en historie langsomt i terminalen og beder brugeren om input, hver gang der kommer en variabel (fx `#CharacterName1`, `#Item1`). De indtastede værdier genbruges automatisk, næste gang den samme placeholder optræder i teksten.

### Formål
- Udskrive en forudskrevet historie langsomt.
- Pause ved hver variabel (`#Navn`) og spørge brugeren om en værdi (via `input()`).
- Erstatte værdien af variablen med den brugeren giver til resten af historien.

### Hvordan virker det (kort fortalt)
1. Historien indlæses som en enkelt tekststreng (med placeholders).
2. Programmet gennemløber teksten og finder placeholders, der matcher mønsteret `#([A-Za-z0-9_]+)`.
3. Når en ny variable for fødste gang kommer, spørges brugeren: `input("Skriv <navn>: ")`.
4. Svaret gemmes i en ordbog (fx `answers["CharacterName1"] = "..."`).
5. Næste gang variablen forekommer har den en værdi der ikke er nil og derfor bruger vi værdien istedet for at prompte brugeren.
6. Teksten udskrives langsomt (lille forsinkelse mellem tegn/ord).

### Kørsel (konceptuelt)
1. Åbn en terminal i mappen `Adventure generator`.
2. Kør Python‑scriptet (eksempel):
   - Windows: `python Eventyr.py`
3. Følg promptene. Hver gang du ser en tekst som `Skriv CharacterName1:`, indtast værdien og tryk Enter.
4. Historien fortsætter med at blive “udfyldt”, når den udskrives.