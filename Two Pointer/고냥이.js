const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")

const Solution = (input) => {
    const alphabetCnt = Number(input[0]);
    const str = input[1];
    let left = 0; // 슬라이딩 윈도우의 시작점
    let answer = 0;
    let compareObj = {};

    for (let right = 0; right < str.length; right++) {
        // 현재 오른쪽 문자를 슬라이딩 윈도우에 추가
        compareObj[str[right]] = compareObj[str[right]] ? compareObj[str[right]] + 1 : 1;
        while (Object.keys(compareObj).length > alphabetCnt) {
            compareObj[str[left]] -= 1;
            if (compareObj[str[left]] === 0) {
                delete compareObj[str[left]];
            }
            left++; // 윈도우의 시작점을 한 칸 오른쪽으로 이동
        }

        // 현재 윈도우 크기 계산 및 최대값 갱신
        answer = Math.max(answer, right - left + 1);
    }
    
    console.log(answer);
}

Solution(input);

/*
문제
고양이는 너무 귀엽다. 사람들은 고양이를 너무 귀여워했고, 결국 고양이와 더욱 가까워지고 싶어 고양이와의 소통을 위한 고양이 말 번역기를 발명하기로 했다. 
이 번역기는 사람의 언어를 고양이의 언어로, 고양이의 언어를 사람의 언어로 바꾸어 주는 희대의 발명품이 될 것이다.

현재 고양이말 번역기의 베타버전이 나왔다. 그러나 이 베타버전은 완전 엉망진창이다. 베타버전의 번역기는 문자열을 주면 그 중에서 최대 N개의 종류의 알파벳을 가진 연속된 문자열밖에 인식하지 못한다. 
굉장히 별로지만 그나마 이게 최선이라고 사람들은 생각했다. 그리고 문자열이 주어졌을 때 이 번역기가 인식할 수 있는 최대 문자열의 길이는 얼마인지가 궁금해졌다.

고양이와 소통할 수 있도록 우리도 함께 노력해보자.

입력
첫째 줄에는 인식할 수 있는 알파벳의 종류의 최대 개수 N이 입력된다. (1 < N ≤ 26)

둘째 줄에는 문자열이 주어진다. (1 ≤ 문자열의 길이 ≤ 100,000) 단, 문자열에는 알파벳 소문자만이 포함된다.

출력
첫째 줄에 번역기가 인식할 수 있는 문자열의 최대길이를 출력한다.
*/
