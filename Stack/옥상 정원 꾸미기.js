const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...building] = input.map(Number);
const stack = [];
let answer = 0;

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] <= building[i]) {
        stack.pop();
    }
    
    answer += stack.length;
    stack.push(building[i]);
}

console.log(answer);

/*
문제
도시에는 N개의 빌딩이 있다.

빌딩 관리인들은 매우 성실 하기 때문에, 다른 빌딩의 옥상 정원을 벤치마킹 하고 싶어한다.

i번째 빌딩의 키가 hi이고, 모든 빌딩은 일렬로 서 있고 오른쪽으로만 볼 수 있다.

i번째 빌딩 관리인이 볼 수 있는 다른 빌딩의 옥상 정원은 i+1, i+2, .... , N이다.

그런데 자신이 위치한 빌딩보다 높거나 같은 빌딩이 있으면 그 다음에 있는 모든 빌딩의 옥상은 보지 못한다.

예) N=6, H = {10, 3, 7, 4, 12, 2}인 경우

             = 
 =           = 
 =     -     = 
 =     =     =        -> 관리인이 보는 방향
 =  -  =  =  =   
 =  =  =  =  =  = 
10  3  7  4  12 2     -> 빌딩의 높이
[1][2][3][4][5][6]    -> 빌딩의 번호
1번 관리인은 2, 3, 4번 빌딩의 옥상을 확인할 수 있다.
2번 관리인은 다른 빌딩의 옥상을 확인할 수 없다.
3번 관리인은 4번 빌딩의 옥상을 확인할 수 있다.
4번 관리인은 다른 빌딩의 옥상을 확인할 수 없다.
5번 관리인은 6번 빌딩의 옥상을 확인할 수 있다.
6번 관리인은 마지막이므로 다른 빌딩의 옥상을 확인할 수 없다.
따라서, 관리인들이 옥상정원을 확인할 수 있는 총 수는 3 + 0 + 1 + 0 + 1 + 0 = 5이다.

입력
첫 번째 줄에 빌딩의 개수 N이 입력된다.(1 ≤ N ≤ 80,000)
두 번째 줄 부터 N+1번째 줄까지 각 빌딩의 높이가 hi 입력된다. (1 ≤ hi ≤ 1,000,000,000)

출력
각 관리인들이 벤치마킹이 가능한 빌딩의 수의 합을 출력한다.
*/
