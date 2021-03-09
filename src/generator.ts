
const jump = ['ノーマル', '小', '中', '大']
const direction = ['前方', '後方', '垂直']

const generate = (iteration: number): string[] => {
  const arr: string[] = [];
  for (let i: number = 0; i < iteration; i++) {
    const jumpIdx: number = Math.floor(Math.random() * 4);
    const directionIdx: number = jumpIdx <= 1
      ? Math.floor(Math.random() * 3)
      : Math.floor(Math.random() * 2);
     arr.push(`${direction[directionIdx]}${jump[jumpIdx]}ジャンプ`);
  }
  return arr
}

export default generate;
