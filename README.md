# ytp
Mananda のサンプルとして作った簡単なYouTubeプレイヤー

#### 使い方
1. Mananda DeveloperサイトのMananda OAuth API Betaページを参考にアプリケーション登録を行う  
<https://mananda.jp/developer/index2.html>
2. 登録の際発行されたクライアントID, シークレット及び各エンドポイント情報を控えておく  
※画面上では「キー」と表記されている
3. git clone https://github.com/dkstanaka/ytp.git
4. cd ytp
5. js/splustar-conf.js の編集  
 * client_id: クライアントID
 * secret: シークレット
 * redirect_uri: アプリケーション登録時に設定したリダイレクトURL
 アプリケーションのURL  
 例 "http://example.jp/ytp/"
 * scope: アプリケーション登録時に設定したスコープ  
 例 "statements/read/mine,statements/write"  
 * state: ※プログラムが動的に生成
 * actIdPrefix: アクティビティIDのプレフィクス  
 世界中で一意となるようにすること。通常は自身のドメイン名＋パス名  
 例 "http://example.jp/xapi/activity/ytp/"  
 * my_scheme: verb, object, context の id プレフィックスに使用する文字列
 世界中で一意となるようにすること。通常は自身のドメイン名＋パス名  
 例 "http://example.jp/xapi/"  
 * access_token_key: アクセストークンの保存に使うキー文字列
 * refresh_token_key: リフレッシュトークンの保存に使うキー文字列
6. js/splustar-appspec.js の編集  
 * line 6: this.origin
 アプリケーションのオリジン。

#### デモ
http://splustar.com/~ubuntu/taskapp/ytp

---
#### 注記
Safari では動きません
