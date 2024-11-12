import PageManager from '../page-manager.js';

console.log("ExcalidrawForm script loaded")
export default class ExcalidrawForm extends PageManager {
    onReady() {
       
        let currentStep = 1;
        this.showStep(currentStep);

        document.querySelectorAll('.next-btn').forEach(button => {
            button.addEventListener('click', () => {
                currentStep = parseInt(button.getAttribute('data-next'));
                this.showStep(currentStep);
            });
        });

        document.querySelectorAll('.back-btn').forEach(button => {
            button.addEventListener('click', () => {
                currentStep = parseInt(button.getAttribute('data-back'));
                this.showStep(currentStep);
            });
        });
    }

    showStep(step) {
        document.querySelectorAll('.form-step').forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById('step-' + step).style.display = 'block';
    }
}