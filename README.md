# karmia-utility-array
Karmia utility array module

## Usage
```JavaScript
const karmia_utility_array = require('karmia-utility-array'),
    karray = new karmia_utility_array();
```

### unique
- list ```<Array>```

Removes duplicate values from an array


### count
- list ```<Array>```
- item ```<*>```

Count item in list


### range
- start ```<number>```
- stop ```<number>```
- step ```<number>``` Default: 1

Get array of integer from start to end

```JavaScript
karray.range(5);
// => [0, 1, 2, 3, 4]

karray.range(5, 10);
// => [5, 6, 7, 8, 9]

karray.range(3, 10, 3);
// => [3, 6, 9]
```


### flip
- list ```<Array>```

Get object that exchanges index with their value

```JavaScript
karray.flip(['a', 'b', 'c', 'd', 'e']);
// => {a: 0, b: 1, c: 2, d: 3, e: 4}
```


### intersection
- list1 ```<Array>```
- list2 ```<Array>```

Get intersection of two arrays

```javascript
const list1 = ['a', 'b', 'b', 'c', 'c', 'c'],
    list2 = ['a', 'b'];

console.log(karray.difference(list1, list2));
// => ['a', 'b']
```


### difference
- list1 ```<Array>```
- list2 ```<Array>```

Get difference of two arrays

```javascript
const list1 = ['a', 'b', 'b', 'c', 'c', 'c'],
    list2 = ['a', 'b'];

console.log(karray.difference(list1, list2));
// => ['c', 'c', 'c']
```
