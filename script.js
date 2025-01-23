document.getElementById("averageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Modules et coefficients
    const modules = {
        CNA: 3,
        TAS: 2,
        Routage: 2,
        Antennes: 2,
        POO: 2,
        TP_TAS: 1,
        TP_Routage: 1,
        TP_CNA: 1,
        Linux: 1,
        Normes: 1,
        Anglais: 1,
    };

    let totalPondere = 0;
    const totalCoefficients = 17;

    // Calcul de la somme pondérée
    for (let module in modules) {
        const note = parseFloat(document.getElementById(module).value); // Permet les floats
        if (isNaN(note) || note < 0 || note > 20) {
            document.getElementById("result").innerText = "Veuillez entrer des notes valides (0-20) pour tous les modules.";
            return;
        }
        totalPondere += note * modules[module];
    }

    // Calcul de la moyenne
    const moyenne = (totalPondere / totalCoefficients).toFixed(2);

    // Affichage du résultat
    if (moyenne >= 10) {
        document.getElementById("result").innerText = `Votre moyenne du semestre est ${moyenne}. Validé ✅`;
    } else {
        document.getElementById("result").innerText = `Votre moyenne du semestre est ${moyenne}. Non validé ❌`;
    }
});
