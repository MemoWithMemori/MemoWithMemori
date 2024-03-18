module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'babel-plugin-styled-components' 플러그인 설정 추가 (설정이 필요한 경우)
    ['babel-plugin-styled-components', {/* 여기에 설정 객체를 추가할 수 있습니다. 예: { "displayName": true } */}],
    // 'module-resolver' 플러그인과 그 설정을 별도의 항목으로 분리
    ['module-resolver', {
      root: ['./app'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '@': './app',
        '@components': './app/components',
        '@screens': './app/screens',
        '@assets': './app/assets',
      },
    }],
  ],
};
