class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = setTimeout(2000)
    }

    addClock(time, callback){
        time =  `HH:MM`;
        //const timerRun = callback();
        if(alarmCollection.length === undefined || addClock.callback === undefined){
            throw ``
    }else if(time === time){
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({callback, time, canCall: true})
    }
}