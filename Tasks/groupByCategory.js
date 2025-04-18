function groupByCategory(items, categoryKey) {
    const group={};
    for(let item of items){
        let key=item[categoryKey];
        if(!group[key]){
            group[key]=[];
        }
        group[key].push(item);
    }
    return group;
}
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "T-Shirt", category: "Apparel", price: 25 },
  { name: "Mouse", category: "Electronics", price: 30 },
  { name: "Jeans", category: "Apparel", price: 70 },
];
const grouped = groupByCategory(products, "category");
console.log(grouped)