import {IState} from'./src/import'
import { createContext} from "react";

  
 export  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
 export const   months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre',  'Octobre','Novembre', 'Décembre']

export const weeks = ()=> {
  let tab = []
  for (let i = 1 ; i <= 53 ; i++) tab.push(i)
return tab
}




export const FETCH = async (context:any) => {
  
    
  !context.state.loader && context.setState((prev:any)=>({
      ...prev ,
      loader :true
     }))
   await fetch("http://localhost:3000/Strike/AllEmploye")
  .then(res=>res.json())
  .then(res=>{
   context.setState((prev:any)=>({
      ...prev ,
      loader :false,
      employe:res,
      employeSelectionne:context.state.employeSelectionne === null && res[0] 
     }))
  }) 
}


 export const  GetWeekDates = (date: Date) => {
  const weekStart = date.getDate() - ((date.getDay() + 6) % 7);
  return Array.from({length: 7}, (v:any, i)  => {
    v = v
  let d = new Date(date);
  d.setDate(weekStart + i);
  return d;
  });
  }
  
 export const  GetWeek=(date: Date) =>{
    const target = new Date(date.valueOf());
    target.setHours(0, 0, 0, 0);
    target.setDate(target.getDate() - ((target.getDay() + 6) % 7));
    const firstDayOfYear = new Date(target.getFullYear(), 0, 1);
    return Math.ceil((((target.valueOf() - firstDayOfYear.valueOf()) / 86400000) + firstDayOfYear.getDay() + 1) / 7);
  }

 export const CalculHeuresParSemaine = (calculHeuresParSemaine: any, semaine: any,year:any) => {
  if (calculHeuresParSemaine)
  {  semaine = semaine + "/" + year
  let tabFilter = calculHeuresParSemaine.planning.filter((el: any) =>  el.week.split(" ")[1] === semaine);
  let tabMap = tabFilter.map((el: any) => el.nombreHeures);
  let total = tabMap.reduce((acc: any, item: any) => {
    acc.heures += item.heures;
    acc.minutes += item.minutes;
    return acc;
  }, { heures: 0 , minutes: 0 });
  total.heures += Math.floor(total.minutes / 60);
  total.minutes = total.minutes % 60;
  return total;}
};



export const CalculHeuresParMois=  (calculHeuresParMois:any,month:any,year:any)=> {
month = month + "/" + year
  let tabFilter =  calculHeuresParMois.planning.filter((el:any)=>el.date.split(" ")[2] === month)
   let tabMap =  tabFilter.map((el:any)=>el.nombreHeures)
   let total = tabMap.reduce((acc:any, item:any) => {
    acc.heures += item.heures;
    acc.minutes += item.minutes;
    return acc;
  }, { heures: 0, minutes: 0 });
  total.heures += Math.floor(total.minutes / 60);
  total.minutes = total.minutes % 60;
  return total
  };
  

const initialState: IState = {
count:"Accueil",
startStart:"00",
startEnd:"00",
endStart:"00",
endEnd:"00",
msgPopUp:"",
employe: null,
employeSelectionne:null,
week:GetWeek(new Date()),
year:new Date().getFullYear(),
date :days[new Date().getDay()]+" "+ new Date().getDate()+" "+ months[new Date().getMonth()],
initialDate:new Date(),
month : months[new Date().getMonth()],
weekDates:GetWeekDates(new Date()),
gestionHoraire:false,
gestionHoraireType:true,
loader:true,
Calendarboolean:false,
monthBooleanProfil: false,
yearBooleanProfil: false,
detailsProfil: null,
InfosGlobalProfilEmploye:false,
visualboolean:false

};
export const MyContext = createContext<any>({ state:initialState, setState:()=>{} });
