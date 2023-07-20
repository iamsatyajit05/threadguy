function redesign() {
    const body = document.getElementsByTagName('body')[0];

    for (let i = 0; i < 10; i++) {
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        body.style.setProperty(`--color${i+1}`, color);
    }
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