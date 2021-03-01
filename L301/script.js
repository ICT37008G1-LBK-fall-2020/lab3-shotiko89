let Teqsti = prompt ('შეიყვანეთ ტექსტი/სიყტვები:', '');

let AkrdzaluliSityvebi = ['რეკლამა', 'მარკეტინგი', 'ვირუსი'];

let Akrdzalulia = false;
for (let i=0; i<AkrdzaluliSityvebi.length; i++)
{
    if (Teqsti.indexOf(AkrdzaluliSityvebi[i])!=-1)
    {
        Akrdzalulia = true;
    }
}

if (Akrdzalulia)
{
    alert ('თქვენ გამოიყენეთ აკრძალული სიტყვა!');
}


else
{
    alert ('თქვენს შეყვანილ ტექსტში არ მოიძებნა აკრძალული სიტყვა!');
}