


let price, usd, gel, clear_usd, clear_gel; 
price = prompt('ვალუტის კონვერტორი ... შეიტანეთ ფასი:\n\n\n(გაითვალისწინეთ! პირველი სიმბოლო აუცილებლად უნდა იყოს ვალუტის აღმნიშვნელი ₾ (ლარის) $ (დოლარის)\nმაგალითად... ₾12 არის 12 ლარი)', '');

if (price.includes("$"))
{
    clear_usd = price.slice(1);
    usd = clear_usd * 2.6;
    alert ('₾'+usd);
}
if (price.includes("₾"))
{
    clear_gel = price.slice(1);
    gel = clear_gel / 2.6;
    alert ('$'+gel);
}