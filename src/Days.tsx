import { prototype } from "stream";
import { Day } from "./Day";


function dateStringToDate(dateString:string):Date | undefined
{
    const dateSplit = dateString.split('/');
    return dateSplit.length == 3 ? new Date(Number(dateSplit[2]), Number(dateSplit[1])-1, Number(dateSplit[0])) : undefined;
}

export function Days(props:{days:any})
{
    return props.days.map((day:any, index:number)=>
        {
            let datas = {
                id: index,
                day : day['jour'],
                label : day['titre'],
                teacher :day['formateur'],
                description:day['description']
            };
            
            let currentDate:Date | undefined = dateStringToDate(datas.day);
            let today = new Date();
            today.setHours(0, 0, 0, 0);

            let isCurrentDay = today.getTime() == currentDate?.getTime();
            
            today.setDate(today.getDate() - today.getDay() -1 );
            
            return <Day datas={datas} key={index} currentDay={isCurrentDay} scrollTo={today.getTime() == currentDate?.getTime()}></Day>;
        });
}