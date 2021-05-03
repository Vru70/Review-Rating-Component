/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-03-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-03-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api, track } from 'lwc';

export default class Reviewque extends LightningElement
{
    @track currentStep = 'Step1';

    handleNext() {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step1') {
            this.selectedStep = 'Step2';
        }
        else if (getselectedStep === 'Step2') {
            this.selectedStep = 'Step3';
        }
        else if (getselectedStep === 'Step3') {
            this.selectedStep = 'Step4';
        }
    }

    handlePrev() {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step2') {
            this.selectedStep = 'Step1';
        }
        else if (getselectedStep === 'Step3') {
            this.selectedStep = 'Step2';
        }
        else if (getselectedStep === 'Step4') {
            this.selectedStep = 'Step3';
        }
    }

    handleFinish() {
        alert('Finished...');
        this.selectedStep = 'Step1';
    }

    selectStep1() {
        this.selectedStep = 'Step1';
    }

    selectStep2() {
        this.selectedStep = 'Step2';
    }

    selectStep3() {
        this.selectedStep = 'Step3';
    }

    selectStep4() {
        this.selectedStep = 'Step4';
    }

    get isSelectStep4() {
        return this.selectedStep === "Step4";
    }
   
}
