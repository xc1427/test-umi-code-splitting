import { IConfig } from 'umi-types';

const version = {
  react: '16.12.0'
};

// ref: https://umijs.org/config/
const config: IConfig =  {
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: false,
      },
    });
  },
  externals: {
    "react": "window.React",
    "react-dom": "window.ReactDOM"
  },
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      // dynamicImport: false,
      title: 'test-umi-code-splitting',
      dll: false,
      headScripts: [
        `https://gw.alipayobjects.com/os/lib/react/${version.react}/umd/react.production.min.js`,
        `https://gw.alipayobjects.com/os/lib/react-dom/${version.react}/umd/react-dom.production.min.js`,
      ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
