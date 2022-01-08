# Functions needed
def calculAll():
    """Sert à calculer l'intégralité des points"""
    score = 0
    for i in range(0, 14):  # Parcourir m[i] 1 à 1
        if all_m[i][3][0] != "":  # Si non noté alors pas besoin de compter
            score += float(all_m[i][1]) * float(
                all_m[i][3][0])  # Ajoute au score note 1er trimestre + coeff correspondant
        if all_m[i][3][1] != "":  # CF: Ligne 5
            score += float(all_m[i][2]) * float(
                all_m[i][3][1])  # CF: Ligne 6, la même chose mais pour le second trimestre
    print("Le score est de ",
          score / 100)  # Ici le 10 est temporaire et changera si l'élève à une option ou plusieurs !


# Ici la définition de chaque matière / épreuve / moyenne notée
# Elle se fait de cette manière : Nom + Coeff 1er trimestre + Coeff 2eme trimestre + note (voir ligne x)
m1 = ["Histoire Géographie", "3.33", "3"]
m2 = ["Langue Vivante A", "3.33", "3"]
m3 = ["Langue Vivante B", "3.33", "3"]
m4 = ["Enseignement Scientifique", "2.5", "2.5"]
m5 = ["Education Physique et Sportive", "5", "5"]
m6 = ["Education Morale et Civique", "1", "1"]
m7 = ["Moyenne generale", "5", "5"]
m8 = ["Specialite abandonnee", "5", "5"]
m9 = ["Français Ecrit", "5", "5"]
m10 = ["Francais Oral", "5", "5"]
m11 = ["Philosophie", "8", "8"]
m12 = ["Grand Oral", "10", "10"]
m13 = ["Specialite numero 1", "16", "16"]
m14 = ["Specialite numero 2", "16", "16"]
# Matrice qui nous sert pour l'extraction de données dans la fonction calculAll
all_m = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14]

# L'élève a des options ?
option = input("Avez vous une ou plusieurs options ? Oui / Non")
while option != "Oui" and option != "Non":
    option = input("Veuillez donner une réponse correcte (Oui/Non)")
if option == "Oui":
    hasOption = True
else:
    hasOption = False

print("Vous allez saisir les notes de la manière suivante : note_1er_trimestre/note_2eme_trimestre")
print("Attention ! Si la matière n'est pas notée à un des trimestres ne notez rien par exemple : x/ ou encore /y")

for i in range(0, 14):
    grade_user = input("Veuillez saisir la note pour la matière suivante : {} ".format(
        all_m[i][0]))  # Cherche le nom renseigné dans la liste
    grade = grade_user.split("/")  # Permet de mettre les notes sous cette forme x/y ou x/ ou encore /y pour éviter deux inputs, met les deux valeurs séparées dans une liste "grade"
    all_m[i].append(grade)  # Ajoute la liste dans chaque "m" => CF: ligne 17..30

calculAll()
