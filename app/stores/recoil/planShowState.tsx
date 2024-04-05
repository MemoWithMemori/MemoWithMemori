import { atom } from 'recoil';

export const planShowState = atom({
  key: 'planShow', // 고유한 키
  default: {
    plan6_shown: false,
    plan6_1_shown: false,
    plan11_shown: false,
    plan11_1_shown: false,
  }, // 초기 상태 값
});
