/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-04-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-03-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, track } from 'lwc';

export default class Reviewque extends LightningElement
{
    @track selectedStep = 'Step1';
    @track varSelectStep1 = true;
    @track varSelectStep2 = false;
    @track varSelectStep3 = false;
    @track varSelectStep4 = false;


    
    handleNext()
    {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step1')
        {
            this.selectedStep = 'Step2';
            this.varSelectStep1 = false;
            this.varSelectStep2 = true;
            this.varSelectStep3 = false;
            this.varSelectStep4 = false;
        }
        else if (getselectedStep === 'Step2')
        {
            this.selectedStep = 'Step3';
            this.varSelectStep1 = false;
            this.varSelectStep2 = false;
            this.varSelectStep3 = true;
            this.varSelectStep4 = false;
        }
        else if (getselectedStep === 'Step3')
        {
            this.selectedStep = 'Step4';
            this.varSelectStep1 = false;
            this.varSelectStep2 = false;
            this.varSelectStep3 = false;
            this.varSelectStep4 = true;
        }
    }

    handlePrev()
    {
        var getselectedStep = this.selectedStep;
        if (getselectedStep === 'Step2')
        {
            this.selectedStep = 'Step1';
            this.varSelectStep1 = true;
            this.varSelectStep2 = false;
            this.varSelectStep3 = false;
            this.varSelectStep4 = false;
        }
        else if (getselectedStep === 'Step3')
        {
            this.selectedStep = 'Step2';
            this.varSelectStep1 = false;
            this.varSelectStep2 = true;
            this.varSelectStep3 = false;
            this.varSelectStep4 = false;
        }
        else if (getselectedStep === 'Step4')
        {
            this.selectedStep = 'Step3';
            this.varSelectStep1 = false;
            this.varSelectStep2 = false;
            this.varSelectStep3 = true;
            this.varSelectStep4 = false;
        }
    }

    handleFinish()
    {
        alert('Submited...');
        this.selectedStep = 'Step1';
        this.varSelectStep1 = true;
        this.varSelectStep2 = false;
        this.varSelectStep3 = false;
        this.varSelectStep4 = false;

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

    /**
     * Cheack Box Logic
     */

    @track value_p = [''];
    @track value_v = [''];
    @track value_a = [''];
    @track value_o = '';

    onchange_o(event)
    {
        this.value_o = event.target.value;
    }

    get options_p()
    {
        return [
            { label: 'I couldn\'t see the presentation', value: 'p1' },
            { label: 'The presentation was blurry ', value: 'p2' },
            { label: 'The presentation was slow to update', value: 'p3' },
            { label: 'I couldn\'t present', value: 'p4' },
            { label: 'Other presentation issue', value: 'p5' },
        ];
    }

    get options_v()
    {
        return [
            { label: 'My camera did not work', value: 'v1' },
            { label: 'The video was breaking up', value: 'v2' },
            { label: 'The video was blurry', value: 'v3' },
            { label: 'Audio and Video were not in sync', value: 'v4' },
            { label: 'I couldnt see others video', value: 'v5' },
            { label: 'Othetr video issue', value: 'v6' },
        ];
    }

    get options_a()
    {
        return [
            { label: 'Audio was breaking up', value: 'a1' },
            { label: 'I could not hear others', value: 'a2' },
            { label: 'Other could not hear me', value: 'a3' },
            { label: 'Sound was delayed', value: 'a4' },
            { label: 'There was echo', value: 'a5' },
            { label: 'Othetr audio issue', value: 'a6' },
        ];
    }

    get selectedValues()
    {
        return this.value_p.join(',')+' '+this.value_a.join(',')+' '+this.value_v.join(',');
    }

    handleCheckbox_p(e)
    {
        this.value_p = e.detail.value;
    }

    handleCheckbox_a(e)
    {
        this.value_a = e.detail.value;
    }

    handleCheckbox_v(e)
    {
        this.value_v = e.detail.value;
    }
}
