export interface Overview {
    netValue  : number ;
    portfolioValue : number ;
    balance : number ;
    agahCard : number ;
    blockedBalance : number ;

}
export interface InnerAssets {
    date :string ;
    price : number;
}
export interface Assets {
    balance : number ;
    percentage : number ;
    xx : number ;
    inner : InnerAssets[];
}
//use for cancelation - mutual -
export interface ModelFunds {
    netValue : number ;
    gainLossValue : number ;
    gainLossPercentage: number ;
}
//use for ongoing 

export interface Ongoing {
icon : string ;
title : string ;
// 0 buy -- 1 sell
status : number ;
// 0 doing -- 1 cancel -- 2 paying 
state : number
}
