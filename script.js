function generateColors() {
    const color1 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color3 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color4 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color5 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color6 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color7 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color8 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color9 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const color10 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    return [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10];
}

function redesign() {
    const body = document.getElementsByTagName('body')[0];
    const colors = generateColors();

    body.style.setProperty('--color1', colors[0]);
    body.style.setProperty('--color2', colors[1]);
    body.style.setProperty('--color3', colors[2]);
    body.style.setProperty('--color4', colors[3]);
    body.style.setProperty('--color5', colors[4]);
    body.style.setProperty('--color6', colors[5]);
    body.style.setProperty('--color7', colors[6]);
    body.style.setProperty('--color8', colors[7]);
    body.style.setProperty('--color9', colors[8]);
    body.style.setProperty('--color10', colors[9]);
}

function download() {
    alert('Image will be low quality, if you can help us please do 🙏');   
    
    const container = document.getElementsByClassName("main")[0];
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        const link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "threadguy.png";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
}