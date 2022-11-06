const formValidation = () => {
    const elements = [
        document.getElementById("years"),
        document.getElementById("months"),
        document.getElementById("days"),
        document.getElementById("hours")
    ];
    
    elements.forEach(e => {
        if(e.value === "") e.value = 0;
        else if(e.value > e.max) e.value = e.max
        else if(e.value < e.min) e.value = e.min;
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

    if(times === 1) document.getElementById("s").innerText = "";
    else document.getElementById("s").innerText = "s";
    
    document.getElementById("output").innerText = times.toLocaleString();;
};
