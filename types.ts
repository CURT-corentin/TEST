


 export interface TabItem {
    name: string;
    firstName: string;
    email: string;
    tel:string
    planning:[]
  }

export type Tab = TabItem[] | null | undefined;



export   interface IState {

  employe: Tab | null;
count:string;
loader:boolean;
employeSelectionne:TabItem |null
week:any,
msgPopUp:string,
gestionHoraire:any,
gestionHoraireType:any,
date:any,
initialDate:any,
month:string,
year:number,
startStart:string,
startEnd:string,
endStart:string,
endEnd:string,
weekDates:any,
Calendarboolean:boolean,
monthBooleanProfil: boolean,
yearBooleanProfil: boolean,
detailsProfil: any,
InfosGlobalProfilEmploye:boolean,
visualboolean:boolean
}


export interface IContext {
  state: IState;
  
  setState: React.Dispatch<React.SetStateAction<IState>>;
}


export type Detail = {
  date: string;
  start: string;
  end: string;
  [key: string]: any; 
};

export type MonthYearDetails = {
  month: boolean;
  year: boolean;
  details: Detail[] | null;
};