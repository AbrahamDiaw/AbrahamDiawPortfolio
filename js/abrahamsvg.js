const logosvg = document.querySelectorAll('#logosvg path');

for (let i = 0; i < logosvg.length; i++) {
    console.log(`letter ${i}is ${logosvg[i].getTotalLength()}`);
}