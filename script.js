document.getElementById("averageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Define modules with their coefficients
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

    let totalWeighted = 0;
    let totalCoefficients = 17;

    // Calculate the weighted sum
    for (let module in modules) {
        const grade = parseFloat(document.getElementById(module).value);
        if (isNaN(grade) || grade < 0 || grade > 20) {
            document.getElementById("result").innerText = "Please enter valid grades (0-20) for all modules.";
            return;
        }
        totalWeighted += grade * modules[module];
    }

    // Calculate average
    const average = (totalWeighted / totalCoefficients).toFixed(2);

    // Display the result
    if (average >= 10) {
        document.getElementById("result").innerText = `Your semester average is ${average}. Validated ✅`;
    } else {
        document.getElementById("result").innerText = `Your semester average is ${average}. Not Valid ❌`;
    }
});
