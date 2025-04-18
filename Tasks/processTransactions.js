function processTransactions(transactions){
    let deposits=0;
    let withdraws=0;
    let finalBalance=0;
    for(let transaction of transactions){
        if(transaction.type === 'deposit'){
            deposits+=transaction.amount;
            finalBalance+=transaction.amount;
        }else{
            withdraws+=transaction.amount;
            finalBalance-=transaction.amount;
        }
    }
    return ({
        finalBalance:`${finalBalance}`,
        deposits:`+${deposits}`,
        withdraws:`-${withdraws}`,
    });
}

const transactions = [
    { type: 'deposit', amount: 1000 },
    { type: 'withdrawal', amount: 200 },
    { type: 'deposit', amount: 500 },
    { type: 'withdrawal', amount: 100 },
    { type: 'deposit', amount: 800 },
    { type: 'withdrawal', amount: 50 },
    { type: 'deposit', amount: 600 },
    { type: 'withdrawal', amount: 250 },
    { type: 'deposit', amount: 450 },
    { type: 'withdrawal', amount: 180 },
    { type: 'deposit', amount: 100 }
];


let statement=processTransactions(transactions);
for(let x in statement){
    console.log(x+" : "+statement[x]);
}