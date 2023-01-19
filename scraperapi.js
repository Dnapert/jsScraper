const axios = require('axios');
const cheerio = require('cheerio');
const  puppeteer = require('puppeteer');

let scrapedData = [];
(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    try{
        await page.goto('https://www.machinerytrader.com/listings/for-sale/skid-steers/1055',{waitUntil: 'networkidle2'}).then(
            
        )
        await page.waitForSelector(".listing-portion-title");
         await page.evaluate(() => {
            let title = document.querySelector(".listing-portion-title").innerText;
            let currentBid = document.querySelector(".auction-price").innerText;
            scrapedData.push({"title":title, "currentBid":currentBid}); 
        });
        }
    catch(err){
        console.log(err);
    }
    await browser.close();
console.log(scrapedData)}
    )();
/* 
const url = "https://www.machinerytrader.com/listings/for-sale/skid-steers/1055"
    axios(url,{headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'}})
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const title = $(".listing-portion-title").text();
        const currentBid = $(".auction-price").text();
        console.log(title, currentBid);
    }
        ).catch(console.error); */