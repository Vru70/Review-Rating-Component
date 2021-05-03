/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-03-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-03-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, track } from 'lwc';

export default class Reviewque extends LightningElement
{
    @track selectedStep = 'Step1';
    @track varSelectStep1 = false;
    @track varSelectStep2 = false;
    @track varSelectStep3 = false;
    @track varSelectStep4 = false;
    
    handleNext()
    {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step1')
        {
            this.selectedStep = 'Step2';
        }
        else if (getselectedStep === 'Step2')
        {
            this.selectedStep = 'Step3';
        }
        else if (getselectedStep === 'Step3')
        {
            this.selectedStep = 'Step4';
        }
    }

    handlePrev()
    {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step2')
        {
            this.selectedStep = 'Step1';
        }
        else if (getselectedStep === 'Step3')
        {
            this.selectedStep = 'Step2';
        }
        else if (getselectedStep === 'Step4')
        {
            this.selectedStep = 'Step3';
        }
    }

    handleFinish()
    {
        alert('Submited...');
        this.selectedStep = 'Step1';
    }
  

    selectStep1()
    {
        this.selectedStep = 'Step1';

        this.varSelectStep1 = true;
        this.varSelectStep2 = false;
        this.varSelectStep3 = false;
        this.varSelectStep4 = false;
    }

    selectStep2()
    {
        this.selectedStep = 'Step2';
        
        this.varSelectStep1 = false;
        this.varSelectStep2 = true;
        this.varSelectStep3 = false;
        this.varSelectStep4 = false;
    }

    selectStep3()
    {
        this.selectedStep = 'Step3';
        
        this.varSelectStep1 = false;
        this.varSelectStep2 = false;
        this.varSelectStep3 = true;
        this.varSelectStep4 = false;
    }

    selectStep4()
    {
        this.selectedStep = 'Step4';
        
        this.varSelectStep1 = false;
        this.varSelectStep2 = false;
        this.varSelectStep3 = false;
        this.varSelectStep4 = true;
    }

    get isSelectStep4()
    {
        return this.selectedStep === "Step4";
    }
}
