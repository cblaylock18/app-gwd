const variants = {
  development: 'com.chris.quizgame.dev',
  preview: 'com.chris.quizgame.preview',
  production: 'com.chris.quizgame'
};

const variant = process.env.APP_VARIANT || 'production';

export default {
  expo: {
    name: variant === 'production' ? 'Quiz Game' : `Quiz Game (${variant})`,
    slug: 'app-gwd',
    version: '1.0.0',
    scheme: 'quiz-game',
    bundleIdentifier: variants[variant],
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    backgroundColor: '#ffd240',
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffd240'
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: variants[variant]
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffd240'
      },
      edgeToEdgeEnabled: true,
      package: variants[variant],
      versionCode: 1
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      eas: {
        projectId: 'd3557fdb-2f3b-40a3-b829-c09ae7d0ffd5'
      }
    }
  }
};