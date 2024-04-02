import { atom } from 'recoil';

export const planState = atom({
  key: 'plans', // 고유한 키
  default: {
    plan1: null,
    plan2: null,
    plan3: null,
    plan4: null,
    plan5: null,
    plan6: null,
    plan6_1: null,
    plan6_2: null,
    plan7: null,
    plan8: null,
    plan9: null,
    plan10: null,
    plan11: null,
    plan11_1: null,
    plan11_2: null,
    plan12: null,
  }, // 초기 상태 값
});
