export default async function run(daily) {
    let now = new Date();
    let dailyTime = daily.getDailyTime();

    let dailyTimeMinusNow = new Date(now.getFullYear(), now.getMonth(), now.getDate(), dailyTime, 0, 0, 0) - now;
    let nextdailyTimeMilli;

    if (dailyTimeMinusNow < 0) {
        //late
        change(daily);

        nextdailyTimeMilli = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, dailyTime, 0, 0, 0) - now;
    } else {
        //not late
        nextdailyTimeMilli = new Date(now.getFullYear(), now.getMonth(), now.getDate(), dailyTime, 0, 0, 0) - now;

    }
    setTimeout(() => { change(); run() }, nextdailyTimeMilli)
}

function change(daily) {
    daily.setNewDailyText();
}