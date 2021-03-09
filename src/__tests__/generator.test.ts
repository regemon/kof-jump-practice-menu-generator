import generate from '../generator';
import { mockRandom, resetMockRandom } from 'jest-mock-random';

describe('ジャンプ', () => {
  it('前方', () => {
    mockRandom([0.2, 0.3, 0.4, 0.3, 0.6, 0.4, 0.8, 0.4]);
    const strArray = generate(4);
    const expected = ['前方ノーマルジャンプ', '前方小ジャンプ', '前方中ジャンプ', '前方大ジャンプ']
    expect(strArray).toEqual(expected);
    resetMockRandom();
  });
  it('後方', () => {
    mockRandom([0.2, 0.4, 0.4, 0.4, 0.6, 0.6, 0.8, 0.6]);
    const strArray = generate(4);
    const expected = ['後方ノーマルジャンプ', '後方小ジャンプ', '後方中ジャンプ', '後方大ジャンプ']
    expect(strArray).toEqual(expected);
    resetMockRandom();
  });
  it('垂直', () => {
    mockRandom([0.2, 0.8, 0.4, 0.8]);
    const strArray = generate(4);
    const expected = ['垂直ノーマルジャンプ', '垂直小ジャンプ', '垂直ノーマルジャンプ', '垂直小ジャンプ']
    expect(strArray).toEqual(expected);
    resetMockRandom();
  });
});
