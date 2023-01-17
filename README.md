1.1
Сколько записей вернет запрос следующий запрос?
- select * from Table_A inner join Table_B - Вернет все, что есть в обоих таблицах (mysql)

Сколько записей вернет следующий запрос?
- select * from Table_A a inner join Table_B b on a.ID=b.Id_A -Вернет все записи из первой и второй таблицы где соединение таблицы совпадает a.ID=b.Id_A

чем отличаются следующие запросы?
-select * from Table_A a inner join Table_B b on a.ID=b.Id_A - Вернет все записи из первой и второй таблицы где соединение таблицы совпадает a.ID=b.Id_A
-select * from Table_A a left join Table_B b on a.ID=b.Id_A - Верент все записи из первой таблицы и если есть данные в второй (Table_B) таблицы то вернет по условию соединения и из второй

const arr = [
  {id: 1, parentId: 0},
  {id: 2, parentId: 0},
  {id: 3, parentId: 1},
  {id: 4, parentId: 1},
  {id: 5, parentId: 2},
  {id: 6, parentId: 4},
  {id: 7, parentId: 5}
];

console.log(buildStructure(arr));

function buildStructure(arr) {
  let arrMap = new Map(arr.map(item => [item.id, item]));
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item.parentId) {
      let parentItem = arrMap.get(item.parentId);
      if (parentItem) {
        let { children } = parentItem;
        if (children) {
          parentItem.children.push(item);
        } else {
          parentItem.children = [item];
        }
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

1.3
Текущий github проект 

