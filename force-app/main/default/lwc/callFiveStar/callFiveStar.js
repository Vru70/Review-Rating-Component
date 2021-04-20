/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 04-20-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-20-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';

export default class CallFiveStar extends LightningElement
{

    handleRatingChanged(event)
    {
        console.log('Rating : ' + event.detail.rating);
    }
}