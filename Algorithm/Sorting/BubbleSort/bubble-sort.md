# Bubble Sort

Bubble sort is one of the very basic sorting algorithm, here we compare two consecutive elements if the next item is smaller than current one, if next one happens to be smaller then swap those.

>Time Complexity: O(n^2) |
>Space Complexity: O(1)

Pseudocode for this
```JS
for (let i = 1; i < length; i++) {
    for (let ii = 0; ii < length - 1; ii++) {
        if(arr[ii] > arr[ii+1]){
            swapInArray(ii, ii + 1, arr);
        }
    }
}
```

here is the dry run for the following sample
```JS
const array = [21, 92, 13, 4, 5, 2];
```

1st iteration
```JS
[ 21, 92, 13, 4, 5, 2 ]
```
2nd iteration
```JS
[ 13, 21, 92, 4, 5, 2 ]
```
3rd iteration
```JS
[ 4, 13, 21, 92, 5, 2 ]
```
4th iteration
```JS
[ 4, 5, 13, 21, 92, 2 ]
```
5th iteration
```JS
[ 2, 4, 5, 13, 21, 92 ]
```
6th iteration
```JS
[ 2, 4, 5, 13, 21, 92 ]
```

if there is only one swap needed still it will run for n^2 times, like for following exapmle

```JS
const array = [11, 2, 13, 14, 15, 22];
```
lets optimize this with little flag

```JS
for (let i = 1; i < length; i++) {
    let swapped = false;
    for (let ii = 0; ii < length - 1; ii++) {
        if(arr[ii] > arr[ii+1]){
            swapInArray(ii, ii + 1, arr);
            swapped = true;
        }
    }
    if(!swapped) break;
}
```

Run the program
```bash
node Algorithm/Sorting/BubbleSort/bubble-sort.js
```