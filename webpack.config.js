const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    filename: './src/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  /**
   * devtool: "source-map" - это настройка в конфигурации webpack,
   * которая указывает на использование Source Maps в процессе сборки вашего проекта.
   * Source Maps - это инструмент, который позволяет отображать ошибки и проблемы в исходном коде,
   * а не в скомпилированном или транслированном коде.
   * Это особенно полезно при отладке сложных проектов, где код распределен по множеству файлов и папок.
   */
  devtool: "source-map",

  module: {
    rules: [
      /**
       * Основная функция Babel - транспиляция, что означает преобразование современного кода JavaScript
       * в обратную совместимую версию, которую можно запустить на более старых или менее продвинутых платформах.
       */
      {
        /**
         * test: /\.js$/:
         *    это условие говорит webpack, что мы хотим транспилировать все файлы JavaScript в нашем проекте.
         *
         * include: path.resolve(\_\_dirname, 'src/js'):
         *    это условие говорит webpack, что мы хотим транспилировать только JavaScript файлы,
         *    которые находятся в папке 'src/js'.
         *
         * exclude: /node_modules/:
         *    это условие говорит webpack, что мы не хотим транспилировать JavaScript файлы,
         *    которые находятся в папке 'node_modules'.
         *    Это важно, потому что 'node_modules' содержит файлы, которые уже были транспилированы
         *    и не нуждаются в дальнейшей обработке.
         *
         * use: {
         *   loader: 'babel-loader',
         *   options: {
         *     presets: ['@babel/preset-env'],
         *   }
         * }:
         *    предоставляем опции для Babel,
         *    которые говорят ему использовать пресет '@babel/preset-env',
         *    чтобы преобразовать современный JavaScript в обратную совместимую версию,
         *    которую можно использовать в браузере.
         */
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        /**
         * test: /\.scss$/:
         *    это условие говорит webpack'ыть, что мы хотим обработать все файлы .scss в нашем проекте.
         *
         * MiniCssExtractPlugin.loader:
         *    этот загрузчик используется для извлечения CSS из сборки и сохранения его в отдельном файле.
         *    Он используется в сочетании с другими загрузчиками, чтобы убедиться, что весь CSS находится
         *    в одном месте и может быть легко подключаться к проекту.
         *
         * css-loader:
         *    этот загрузчик преобразует CSS в CommonJS модуль, который может быть включен в сборку проекта.
         *    Он позволяет использовать CSS-файлы как зависимости и управлять их порядком загрузки.
         *
         * postcss-loader:
         *    этот загрузчик используется для разбора CSS и применения префиксов вендоров к правилам CSS.
         *    Это обеспечивает совместимость с различными браузерами и платформами, и гарантирует,
         *    что CSS правильно применяется.
         *
         * sass-loader:
         *    этот загрузчик используется для компиляции Sass в CSS.
         *    Он использует Node Sass, который является исполнением Sass на Node.js,
         *    чтобы скомпилировать Sass-файлы в CSS, который может быть использован в проекте.
         */
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // извлекает CSS в отдельный файл
          'css-loader', // переводит CSS в CommonJS
          'postcss-loader', // анализирует CSS и добавляет префиксы поставщиков в правила CSS
          'sass-loader', // компилирует Sass в CSS, используя виртуальную машину Dart
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./font/TTLakes/[name].[ext]'
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },

  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    // Кладем стили в отдельный файл
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/img',
        to: 'img',
      },
    ])
  ],
};
