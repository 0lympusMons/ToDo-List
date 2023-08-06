var isToday = require('date-fns/isToday');
var format = require('date-fns/format');

let todays = new Date(2023, 7, 6);

function displayTodayTasks(inbox) {

    let tasks = inbox.task
    tasks.forEach(task => {

        let dateArr = task.dueDate.split('-');
        let year = parseInt(dateArr[0]);
        let month = dateArr[1] - 1;
        let day = parseInt(dateArr[2]);
        if (isToday(todays)) {
            console.log(year + " " + month + " " + day);
        }
    });

}

displayTodayTasks();

// export default displayTodayTasks;
