function copyCodeGL() {
    const text = "04 78 17 61 76";
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Numéro copié !");
}

function copyCode() {
    const text = "06 51 82 33 66";
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Numéro copié !");
}

function copyCodeMail() {
    const text = "manonlebarazer@icloud.com";
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Mail copié !");
}
