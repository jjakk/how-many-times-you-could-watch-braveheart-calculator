const formValidation = () => {
    const elements = [
        document.getElementById("years"),
        document.getElementById("months"),
        document.getElementById("days"),
        document.getElementById("hours")
    ];
    
    elements.forEach(e => {
        if(e.value === "") e.value = 0;
    });
};

const calculateBravehearts = () => {
    formValidation();

    const data = {
        years: parseInt(document.getElementById("years").value),
        months: parseInt(document.getElementById("months").value),
        days: parseInt(document.getElementById("days").value),
        hours: parseInt(document.getElementById("hours").value)
    };

    const totalHours = (
        data.hours +
        (data.days * 24) +
        (data.months * 24 * 30) +
        (data.years * 24 * 365)
    );

    const times = isNaN(totalHours) ? 0 : Math.floor(totalHours/(2 + (58/60)));

    document.getElementById("s").innerText = times === 1 ? "" : "s";
    document.getElementById("output").innerText = times.toLocaleString();;
};
