const submitBtn = document.getElementById("submit");
const resultDialog = document.getElementById("btn");
const message = document.getElementById("message");
const scoreInputs = [...document.querySelectorAll(".scores input")];
scoreInputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") return;

        event.preventDefault();
        (scoreInputs[index + 1] || submitBtn).focus();
    });
});

document.getElementById("close").addEventListener("click", () => {
    resultDialog.close();
});

submitBtn.addEventListener("click", () => {
        const english = Number( document.querySelector(".english").value.trim());
        const cMaths = Number(document.querySelector(".c-maths").value.trim());
        const social = Number(document.querySelector(".social").value.trim());
        const chemistry = Number(document.querySelector(".chem").value.trim())
        let science = Number(document.querySelector(".science").value.trim());
        const biology = Number(document.querySelector(".bio").value.trim());
        let physics = Number(document.querySelector(".physics").value.trim());
        const eMaths = Number(document.querySelector(".e-maths").value.trim());

        if (english === "" || english <= 0 || english > 9) {
            message.textContent = "Inputs for English should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (social === "" || social <= 0 || social > 9) {
            message.textContent = "Inputs for Social Studies should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (cMaths === "" || cMaths <= 0 || cMaths > 9) {
            message.textContent = "Inputs for Core Mathematics should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (science === "" || science <= 0 || science > 9) {
            message.textContent = "Inputs for Integrated Science should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (chemistry === "" || chemistry <= 0 || chemistry > 9) {
            message.textContent = "Inputs for Chemistry should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (physics === "" || physics <= 0 || physics > 9) {
            message.textContent = "Inputs for Physics should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (biology === "" || biology <= 0 || biology > 9) {
            message.textContent = "Inputs for Biology should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }

        if (eMaths === "" || eMaths <= 0 || eMaths > 9) {
            message.textContent = "Inputs for Elective Mathematics should be from 1 to 9";
            message.style.color = "red";
            resultDialog.showModal();
            return;
        }
               


      if (social < science) {
            science = social
       }
       else { science = science }

       if (biology < physics) {
         physics = biology
       }
        else {
           physics = physics
        }

        let aggregate = english + cMaths + eMaths + chemistry + science + physics
        
        if (aggregate > 54) { 
            message.textContent = "Aggregate score cannot be greater than 54";
            resultDialog.showModal();
            return;
        }
        if (aggregate > 10) {
            message.textContent = "Addmission is not possible with an aggregate score greater than 10.";
            message.textContent += ` Your aggregate score is ${aggregate}. Try other courses or Universities.`;
            message.style.color = "red";

        }
        
        else if (aggregate <= 10 && aggregate >= 8) {
            message.textContent = `Congratulations! You can again a fee-paying admission with an aggregate score of ${aggregate} in KNUST to study BSc. in Computer Science.`;
            message.style.color = "green";
            icon.innerHTML.textContent =`<i class="fa-thin fa-hands-clapping fa-beat"></i>`
        }
        
        
        else if (aggregate < 8 && aggregate >= 6) {
            message.textContent = `Congratulations! You can gain a regular admission with an aggregate score of ${aggregate} in KNUST to study BSc. in Computer Science.`;
            message.style.color = "green";
            document.getElementById('icon').innerHTML =`<i class="fa-thin fa-hands-clapping">oh god</i>`
        }
        resultDialog.showModal();
    })
