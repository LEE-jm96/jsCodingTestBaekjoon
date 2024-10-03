function solution(A) {
    const set = new Set();
    
    for (let num of A) {
        if (num > 0) {
            set.add(num);
        }
    }
    
    let answer = 1;
    while (set.has(answer)) {
        answer++;
    }
    
    return answer;
}

/*
주어진 N개의 정수로 이루어진 배열 A가 있을 때, 
배열 A에 등장하지 않는 가장 작은 양의 정수(0보다 큰)를 반환하는 함수를 작성하라는 문제입니다.

이 문제는 배열 A에서 찾을 수 없는 가장 작은 양의 정수를 찾아내는 것에 중점을 두고 있습니다. 
예를 들어, 배열 A가 [1, 3, 6, 4, 1, 2]인 경우, 배열에 없는 가장 작은 양의 정수는 5입니다. 배열 A가 [-3, -1]인 경우, 배열에 없는 가장 작은 양의 정수는 1입니다.
*/
