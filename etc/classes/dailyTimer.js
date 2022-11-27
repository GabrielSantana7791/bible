//apenas dailyVerse... Ainda
export default async function run(daily) {
    let now = new Date();

    let dailyTime = await daily.getDailyTime();
    let dailyLastDay = await daily.getLastChange().getDate;

    let dailyTimeMinusNow = new Date(now.getFullYear(), now.getMonth(), now.getDate(), dailyTime, 0, 0, 0) - now;
    let nextdailyTimeMilli;

    if (dailyTimeMinusNow < 0 && dailyLastDay != now.getDate()) {
        change(daily);

        nextdailyTimeMilli = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, dailyTime, 0, 0, 0) - now;
    } else {
        nextdailyTimeMilli = new Date(now.getFullYear(), now.getMonth(), now.getDate(), dailyTime, 0, 0, 0) - now;

    }
    setTimeout(() => { run(daily) }, nextdailyTimeMilli)
}

function change(daily) {
    daily.setNewDailyVerse();
}