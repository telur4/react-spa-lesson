import React from 'react';

export default class ContactHome extends React.Component {
    render(): Element | any {
        return (
            <>
      {/* メイン */}
      <main>
        <div className="container">
          <h2>Contact</h2>
          <p>カフェ Mr. M COFFEE（ミスターエムコーヒー）へのお問合せ、こちらのフォームをご利用ください。</p>
        </div>
        {/* お問合せフォーム */}
        <div className="py-3">
          <div className="container">
            <h3 className="mb-3">お問合せフォーム</h3>
            {/* フォーム */}
            <form action="" method="POST">
              {/* お名前 */}
              <div className="form-group row">
                <label htmlFor="your_name" className="col-md-3 col-form-label">
                  お名前 <span className="badge badge-warning">必須</span>
                </label>
                <div className="col-md-9">
                  {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                  <input type="text" name="your_name" id="your_name" className="form-control" required defaultValue="" />
                </div>
              </div>
              {/* メールアドレス */}
              <div className="form-group row">
                <label htmlFor="email" className="col-md-3 col-form-label">
                  メールアドレス <span className="badge badge-warning">必須</span>
                </label>
                <div className="col-md-9">
                  {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                  <input type="email" id="email" className="form-control" required name="email" defaultValue="" />
                </div>
              </div>
              {/* きっかけ */}
              <fieldset className="form-group">
                <div className="row">
                  <label htmlFor="radio" className="col-md-3 col-form-label">
                    Mr. M COFFEEを知ったきっかけ
                  </label>
                  <div className="col-md-9">
                    <div className="form-check form-check-inline">
                      {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                      <input type="radio" name="questionnaire" id="radio radio1" className="form-check-input" defaultValue="answer1" />
                      <label htmlFor="radio1" className="form-check-label">口コミ</label>
                    </div>
                    <div className="form-check form-check-inline">
                      {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                      <input type="radio" name="questionnaire" id="radio radio2" className="form-check-input" defaultValue="answer2" />
                      <label htmlFor="radio2" className="form-check-label">検索エンジン</label>
                    </div>
                    <div className="form-check form-check-inline">
                      {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                      <input type="radio" name="questionnaire" id="radio radio3" className="form-check-input" defaultValue="answer3" />
                      <label htmlFor="radio3" className="form-check-label">広告</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              {/* 種類 */}
              <div className="form-group row">
                <label htmlFor="category" className="col-md-3 col-form-label">
                  お問い合わせ種類 <span className="badge badge-warning">必須</span>
                </label>
                <div className="col-md-9">
                  <select name="category" id="category" className="form-control">
                    <option value="">選択してください</option>
                    {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                    <option value={1}>ご予約について</option>
                    {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                    <option value={2}>委託販売について</option>
                    {/* 該当する入力値(POSTパラメータ)が空じゃない場合のみ、入力値をvalue属性にセット */}
                    <option value={3}>その他のお問い合わせ</option>
                  </select>
                </div>
              </div>
              {/* 内容 */}
              <div className="form-group row">
                <label htmlFor="contact" className="col-md-3 col-form-label">
                  お問い合わせ内容 <span className="badge badge-warning">必須</span>
                </label>
                <div className="col-md-9">
                  <textarea name="contact" id="contact" rows={8} className="form-control" defaultValue="" />
                </div>
              </div>
              {/* 確認ボタン */}
              <div className="form-group row justify-content-end">
                <div className="col-md-9">
                  <input type="submit" name="btn_confilm" className="btn btn-primary" defaultValue="確認する" />
                </div>
              </div>
            </form>
            {/* /フォーム */}
          </div>
        </div>
        {/* /お問合せフォーム */}
      </main>
      {/* /メイン */}
            </>
        );
    }
}