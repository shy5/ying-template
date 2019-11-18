// export const RandomList: DefalutListType = [9, 8, 7, 4, 5, 3, 1, 5, 0, 78, 30, 12, 34]

// export const SortedList: DefalutListType = [0, 1, 3, 4, 5, 5, 7, 8, 9, 12, 30, 34, 78]

// export enum Compare {
//     LESS_THAN = -1,
//     BIGGER_THAN = 1,
//     EQUALS = 0
// }

// export function Swap(array: any[], a: number, b: number) {
//     [array[a], array[b]] = [array[b], array[a]]
// }
// type DefalutListType = number[]
import {
    DefalutListType
} from './global.d'
import {
    Swap
} from './utils'

export const BubbleSort = (list: DefalutListType): DefalutListType => {
    const len: number = list.length - 1
    for (let i: number = 0; i < len; ++i) {
        for (let j: number = 0; j < len - i; ++j) {
            if (list[j] > list[j + 1]) {
                Swap(list, j, j + 1)
            }
        }
    }
    return list
}