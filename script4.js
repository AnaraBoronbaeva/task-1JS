// 4.Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

let souvenir = prompt("Введите количсетво сувениров");
let trinket = prompt("Введите количество безделушек");
let weightSouvenir = 0.75;
let weightTrinket = 0.112;
totalPackage = (souvenir*weightSouvenir)+(trinket*weightTrinket);
;
document.write(`Общий вес посылки: ${totalPackage}кг.`);