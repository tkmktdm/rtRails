# README

[rails react typescript構築参考記事](https://qiita.com/Hayato-7812/items/115312f0e6cfaac30c77)

rails newする際にオプションをつける
--javascript=esbuild

$ yarn add react react-dom

Gemfileに`gem 'jsbundling-rails'`があるか確認

`bundle install`

esbuildをインストールする
`rails javascript:install:esbuild`

追記されていることを確認

``` js
"scripts": {
"build": "esbuild app/javascript/*.* --bundle --sourcemap --outdir=app/assets/builds --public-path=assets --target=esnext --loader:.png=file --loader:.js=jsx --loader:.ts=tsx",
},

    "esbuild": "^0.19.1",
```

Reactの反映

`yarn build --watch`
