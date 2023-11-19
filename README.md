# README

## 導入

[rails react typescript構築参考記事](https://qiita.com/Hayato-7812/items/115312f0e6cfaac30c77)

rails newする際にオプションをつける
--javascript=esbuild

`yarn add react react-dom`

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

## typescript・react系ライブラリ追加

`yarn add @types/react @types/react-dom`

- Reactの反映

`yarn build --watch`










## bootstrap5導入

[公式サイト](https://getbootstrap.jp/docs/5.3/components/button-group/)

[Footer作成](https://miyacle.com/2020/05/bootstrap%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E3%81%A8%E3%83%95%E3%83%83%E3%82%BF%E3%83%BC%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F%E8%A9%B1/)

## bootstrap・scss系ライブラリ追加

- Gemfileに`gem 'cssbundling-rails'`を追加

``` sh
yarn add sass
yarn add bootstrap
bundle install
bundle exec rails css:install:sass
```

`app/assets/stylesheets/application.scss`ファイルが存在することを確認します。もし存在しない場合は、application.cssからscssに書き換える。

再起動する。








## auth0導入

- auth0とは
Auth0 統合認証プラットフォーム
Auth0はWebアプリやモバイル、APIなどに対して認証・認可のサービスをクラウドで提供している、いわゆるIDaaS (Identity as a Service)ベンダー。
企業がもつWebアプリケーションやAPI, Native Mobile Appなどでユーザー認証や認可、セキュリティを組み込みたいけれでも実装が難しい・・・という方にオススメのソリューションを提供しています。

[公式サイト](https://manage.auth0.com/dashboard)

公式サイトを参考に行ったがログインのURLを押した際にエラーが発生した。
エラーの原因は`bundle update`, `docker-compose restart`を行っていなかったためだった。

``` web
error:
No route matches [POST] “/auth/auth0”
```

[質問回答](https://community.auth0.com/t/no-route-matches-post-auth-auth0/87485/4)

## Rspec導入

- Gemfileの`group :development, :test do`の内部に追記

``` gemfile
  gem "rspec-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "rubocop", require: false
  gem "rubocop-rspec", require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
```

- `config/application.rb`のAPP内に追記

``` rb
    config.generators do |g|
      g.test_framework :rspec
    end
```

- インストールする

`bundle install`

- 初期設定ファイルを作成する

`bundle exec rubocop --auto-gen-config`

- `.rubocop.yml`に追記

``` yml
require:
  - rubocop-factory_bot
  - rubocop-rails
  - rubocop-rspec
```

### テスト確認

`bundle exec rubocop`

参考サイト[1](https://blog.to-ko-s.com/rspec-introduction/) [2](https://blog.to-ko-s.com/rubocop-setting/)
