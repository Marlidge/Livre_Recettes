function ajouterIngredient() {
    const input = document.getElementById("ingredients_input")
    const list = document.getElementById("liste-ingredients")
    const valeur = input.value.trim()

    if (valeur !== "") {
        const li = document.createElement("li")
        li.textContent = valeur

        // Bouton de suppression
        const boutonSupprimer = document.createElement("button")
        boutonSupprimer.textContent = "❌"
        boutonSupprimer.style.marginLeft = "10px"
        boutonSupprimer.onclick = () => li.remove()

        li.appendChild(boutonSupprimer)
        list.appendChild(li)

        input.value = ""
    }
}

function ajouterInstructions() {
    const input = document.getElementById("instructions_input")
    const list = document.getElementById("liste-instructions")
    const valeur = input.value.trim()

    if (valeur !== "") {
        const li = document.createElement("li")
        li.textContent = valeur

        // Bouton de suppression
        const boutonSupprimer = document.createElement("button")
        boutonSupprimer.textContent = "❌"
        boutonSupprimer.style.marginLeft = "10px"
        boutonSupprimer.onclick = () => li.remove()

        li.appendChild(boutonSupprimer)
        list.appendChild(li)

        input.value = ""
    }
}