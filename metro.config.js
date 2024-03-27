const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  // Node.js 코어 모듈 폴리필 설정을 추가합니다.
  const extraNodeModules = {
    crypto: require.resolve('crypto-browserify'),
    // 필요에 따라 여기에 다른 Node.js 코어 모듈 폴리필을 추가하세요.
    // 예: stream: require.resolve('stream-browserify'),
    // 예: http: require.resolve('stream-http'),
  };

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules, // Node.js 코어 모듈 폴리필을 추가한 설정
    },
  };
})();
