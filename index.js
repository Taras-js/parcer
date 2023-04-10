const puppeteer = require("puppeteer");
(async () => {
    console.log("Puppeteer start")
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://catalogue.ite-expo.ru/ru-RU/exhibitorlist.aspx?project_id=485");
    await page.setViewport({width: 1920, height: 1080});
    let array = []




            let arr = await page.evaluate(() => {
                let name = Array.from(document.querySelectorAll('.name'), el => el.innerText)
                let country = Array.from(document.querySelectorAll('.country'), el => el.innerText)
                let pavilion = Array.from(document.querySelectorAll('.pavilion'), el => el.innerText)
                let stand = Array.from(document.querySelectorAll('.stand'), el => el.innerText)
                name = name.map((i, index) => {
                    return {
                        name: i,
                        country: country[index],
                        pavilion: pavilion[index],
                        stand: stand[index],
                    }
                })
                return name

            })
            array.push(arr)


    await page.waitForSelector('.link', );
    await page.$eval('.link', e => e.click());
    await page.waitForNavigation()

        let two = await page.evaluate(() => {
            let name = Array.from(document.querySelectorAll('.name'), el => el.innerText)
            let country = Array.from(document.querySelectorAll('.country'), el => el.innerText)
            let pavilion = Array.from(document.querySelectorAll('.pavilion'), el => el.innerText)
            let stand = Array.from(document.querySelectorAll('.stand'), el => el.innerText)
            name = name.map((i, index) => {
                return {
                    name: i,
                    country: country[index],
                    pavilion: pavilion[index],
                    stand: stand[index],
                }
            })
            return name

        })
        array.push(two)
    await page.waitForSelector('.link');
    await page.$eval('.link', e => e.click());
    await page.waitForNavigation()

    let free = await page.evaluate(() => {
        let name = Array.from(document.querySelectorAll('.name'), el => el.innerText)
        let country = Array.from(document.querySelectorAll('.country'), el => el.innerText)
        let pavilion = Array.from(document.querySelectorAll('.pavilion'), el => el.innerText)
        let stand = Array.from(document.querySelectorAll('.stand'), el => el.innerText)
        name = name.map((i, index) => {
            return {
                name: i,
                country: country[index],
                pavilion: pavilion[index],
                stand: stand[index],
            }
        })
        return name

    })
    array.push(free)
        console.log("array:",array, array.length)


    // await browser.close()
})()
