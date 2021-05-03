/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-04-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-20-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, track } from 'lwc';

export default class CallFiveStar extends LightningElement
{
    @track rating;
    @track lessthanthree = false;
    connectedCallback()
    {
        this.rating = 0;
    }
    
    handleRatingChanged(event)
    {
        console.log('Rating : ' + event.detail.rating);
        var ratingval = event.detail.rating;
        if (ratingval <= 3)
        {
            this.lessthanthree = true;
        } else if (ratingval > 3)
        {
            this.lessthanthree = false;
        }
    }
}