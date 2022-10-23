const quotes = [
    {
        quote_en: "Prediction is very difficult, especially about the future.",
        quote_kr: "예측은 매우 어려우며, 미래에 대해서는 특히 그렇다",
        author: "Author.Niels Bohr",
    },
    {
        quote_en: "Those who cannot remember the past are condemned to repeat it.",
        quote_kr: "과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
        author: "George Santayana",
    },
    {
        quote_en: "What we dwell on is who we become.",
        quote_kr: "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
        author: "Oprah Winfrey",
    },
    {
        quote_en: "Many an optimist has become rich by buying out a pessimist.",
        quote_kr: "많은 긍정적 사고를 가진 기업이 부정적 사고를 가진 기업을 인수해 부자가 됐다.",
        author: "Robert G. Allen",
    },
    {
        quote_en: "The worst is not So long as we can say, 'This is the worst.'",
        quote_kr: "지금이 제일 비참하다고 할 수 있는 동안은 아직 제일 비참한 게 아니다.",
        author: "William Shakespeare",
    },
    {
        quote_en: "The wisest men follow their own direction.",
        quote_kr: "가장 현명한 사람은 자신만의 방향을 따른다.",
        author: "Euripides",
    },
    {
        quote_en: "Everything in your world is created by what you think.	",
        quote_kr: "세상 모든 일은 여러분이 무엇을 생각하느냐에 따라 일어납니다.",
        author: "Oprah Winfrey",
    },
    {
        quote_en: "Perpetual optimism is a force multiplier.",
        quote_kr: "지속적인 긍정적 사고는 능력을 배가시킨다.",
        author: "Colin Powell",
    },
    {
        quote_en: "True life is lived when tiny changes occur.",
        quote_kr: "작은 변화가 일어날 때 진정한 삶을 살게 된다.",
        author: "Leo Tolstoy",
    },
    {
        quote_en: "When I was born I was so surprised I didn't talk for a year and a half.",
        quote_kr: "내가 태어났을 때 나는 너무 놀라서 1년 반동안 말을 할 수 없었다.",
        author: "Gracie Allen",
    }
]

const quote_en = document.querySelector("#quote span:first-child");
const quote_kr = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");


const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote_en.innerText = todaysQuote.quote_en;
quote_kr.innerText = todaysQuote.quote_kr;
author.innerText = todaysQuote.author;