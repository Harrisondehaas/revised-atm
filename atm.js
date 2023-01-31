let keepWithdrawing = null;

do{ 
    let money = parseInt(prompt("How much do you want to take out?", 60));

    let isPossible = false;
    
    if(money >= 5 && money % 5 == 0){
        isPossible = true;

    }

    //isPossible = money >= 5 ? true : false;  

    if(isPossible){
        let hundreds = 0;
        let fifties = 0;
        let twenties = 0;
        let tens = 0;
        let fives = 0;

        let bills = [100, 50, 20, 10, 5];
        let billsToDispense = [];
        let moneyLeftToDispense = money;


        for(let i = 0; i < bills.length; i++ ){
            if(moneyLeftToDispense >= bills[i]){
                AmountOfBills =parseInt(moneyLeftToDispense / bills[i]);

                moneyLeftToDispense = moneyLeftToDispense % bills[i];
                 
                document.write(`<p> ${bills[i]} X ${AmountOfBills}</p>`);
            }
        }
                document.write(`<p>Your withdrawl of ${money} is complete! </p>`)
                
        /**hundreds = parseInt(money / 100);
        let moneyLeftToDispense = money % 100;

        if(moneyLeftToDispense >= 50){
        fifties = parseInt(moneyLeftToDispense / 50);
        moneyLeftToDispense = money % 50;
        }

        if(moneyLeftToDispense >= 20){
        twenties = parseInt(money / 20);
        moneyLeftToDispense = money % 20;
        }

        if(moneyLeftToDispense >= 10){
        tens = parseInt(money / 10);
        moneyLeftToDispense = money % 10;
        }

        if(moneyLeftToDispense >= 5){
        fives = parseInt(money / 5);
        moneyLeftToDispense = money % 5;
        }

        const html=

        `<p><label>100's:&nbsp;</label>${hundreds}</p>
                  <p><label>50's:&nbsp;</label>${fifties}</p>
                  <p><label>20's:&nbsp;</label>${twenties}</p>
                  <p><label>10's:&nbsp;</label>${tens}</p>
                  <p><label>5's:&nbsp;</label>${fives}</p>`

        document.write(html);**/



    } else {
        alert("We can't dispense that amount");
    }



    keepWithdrawing = prompt("Do you want to keep withdrawing?", "y").toLowerCase();
}while(keepWithdrawing != "n")