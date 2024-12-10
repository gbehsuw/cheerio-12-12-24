document.addEventListener("DOMContentLoaded", () => { 
    const container = document.querySelector('.container'); 
    const totalBoxes = 512; 
    const secretBoxNumber = Math.floor(Math.random() * totalBoxes) + 1; 
    
    // Dynamically populate the secret number if JavaScript is enabled
    const noscriptSpan = document.getElementById('secret-box-number'); 
    if (noscriptSpan) { 
        noscriptSpan.textContent = secretBoxNumber; 
        console.log("vreio")
    }

    // Remove the noscript element only if JavaScript is enabled
    const noscriptElement = document.getElementById('noscript-element'); 
    if (noscriptElement) { 
        noscriptElement.remove(); 
    }

    // Create boxes
    for (let i = 1; i <= totalBoxes; i++) { 
        const box = document.createElement('div'); 
        box.className = 'box'; 
        box.id = 'box-' + i; 
        box.textContent = i; 
        box.addEventListener('click', () => { 
            if (i === secretBoxNumber) { 
                alert('You found the secret code!'); 
                box.classList.add('correct'); 
            } else { 
                alert('Try again!'); 
            } 
        }); 
        container.appendChild(box); 
    }
});
