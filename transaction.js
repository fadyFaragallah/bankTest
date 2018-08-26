export let balance = 100000;
let isIn = true;
let transactions =[];

export const fillArr = (arr,who,In,val) => {
	if(In) balance+=val;
	else balance-=val;
	arr.push({
		'who':who,
		'in':In,
		'val':val,
		'after':balance
	});
}
let i=0;
const randFill = ()=>{
	for(i=0;i<10;i++){
	fillArr(transactions,"transaction: "+i ,isIn,Math.floor((Math.random() * 3000) + 1000));
	isIn = !isIn;
	}
}

randFill();

export const addTrans =(In,val)=>{
	if(In) balance+=Number(val);
	else balance-=Number(val);
	newTrans={
		'who':"transaction: "+i,
		'In':In,
		'val':val,
		'after':balance
	}
	transactions=[...transactions,newTrans];
	i++;
}
export default transactions;