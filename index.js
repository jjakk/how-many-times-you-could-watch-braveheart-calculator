const calculateBravehearts = () => {
    if(document.getElementById("years").value === ""){
        document.getElementById("years").value = 0;
    }
    if(document.getElementById("months").value === ""){
        document.getElementById("months").value = 0;
    }
    if(document.getElementById("days").value === ""){
        document.getElementById("days").value = 0;
    }
    if(document.getElementById("hours").value === ""){
        document.getElementById("hours").value = 0;
    }

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
