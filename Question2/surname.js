// 219055839 - DSW02A1 - Graded Lab 5 Question 2

document.addEventListener("DOMContentLoaded", function() {
    const blendBtn = document.getElementById("blendBtn");
    const applyStyleBtn = document.getElementById("applyStyleBtn");
    const outputDiv = document.getElementById("output");
    const surnameInput = document.getElementById("surname");
    const fontSelect = document.getElementById("font");
    const textColorSelect = document.getElementById("textColor");
    const fontSizeInput = document.getElementById("fontSize");
    const letterSpacingSlider = document.getElementById("letterSpacing");
    const spacingValue = document.getElementById("spacingValue");
    const letterSizeSlider = document.getElementById("letterSize");
    const sizeValue = document.getElementById("sizeValue");
    
    letterSpacingSlider.addEventListener("input", function() {
        spacingValue.textContent = this.value;
    });
    
    letterSizeSlider.addEventListener("input", function() {
        sizeValue.textContent = this.value;
    });
    
    function getPositionStyle(letterIndex, totalLetters, positionType) {
        if (positionType === "seq") {
            return {
                left: (15 + (letterIndex * 15)) + "px",
                top: (15 + (letterIndex * 15)) + "px",
                position: "relative"
            };
        } else if (positionType === "rev") {
            let reverseIndex = totalLetters - 1 - letterIndex;
            return {
                left: (15 + (reverseIndex * 15)) + "px",
                top: (15 + (reverseIndex * 15)) + "px",
                position: "relative"
            };
        } else if (positionType === "rand") {
            return {
                left: Math.random() * 300 + "px",
                top: Math.random() * 100 + "px",
                position: "relative"
            };
        }
        return {};
    }
    
    function getSelectedPosition() {
        const radios = document.getElementsByName("pos");
        for(let i = 0; i < radios.length; i++) {
            if(radios[i].checked) {
                return radios[i].value;
            }
        }
        return "seq";
    }
    
    function applyStylesToLetters() {
        const letters = outputDiv.querySelectorAll(".letter");
        const fontSize = fontSizeInput.value + "px";
        const textColor = textColorSelect.value;
        const fontFamily = fontSelect.value;
        const letterSpacing = letterSpacingSlider.value + "px";
        
        letters.forEach(letter => {
            letter.style.fontSize = fontSize;
            letter.style.color = textColor;
            letter.style.fontFamily = fontFamily;
            letter.style.letterSpacing = letterSpacing;
        });
    }
    
    function blendNow() {
        let surname = surnameInput.value.trim();
        
        if(surname === "") {
            alert("Please enter a surname!");
            return;
        }
        
        outputDiv.innerHTML = "";
        
        const positionType = getSelectedPosition();
        const baseFontSize = letterSizeSlider.value;
        const fontFamily = fontSelect.value;
        
        for(let i = 0; i < surname.length; i++) {
            const letter = surname[i];
            const span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            span.style.fontSize = baseFontSize + "px";
            span.style.fontFamily = fontFamily;
            span.style.display = "inline-block";
            
            const positionStyle = getPositionStyle(i, surname.length, positionType);
            span.style.left = positionStyle.left;
            span.style.top = positionStyle.top;
            span.style.position = positionStyle.position;
            
            outputDiv.appendChild(span);
        }
        
        applyStylesToLetters();
    }
    
    blendBtn.addEventListener("click", blendNow);
    
    applyStyleBtn.addEventListener("click", function() {
        if(outputDiv.children.length > 0) {
            applyStylesToLetters();
        } else {
            alert("Please blend a surname first!");
        }
    });
});