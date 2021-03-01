let raodenoba = prompt('შეიყვანეთ სტუდენტების რაოდენობა:', '');

let studentebi = [];
for (let i=0; i < raodenoba; i++)
{
    let studenti = prompt('შეიყვანეთ სტუდენტის სახელი:', '');
    studentebi.push(studenti);
}
let studenttasia = studentebi.join(', ');
alert ('თქვენ შეიყვანილი სახელებია:\n'+studenttasia);