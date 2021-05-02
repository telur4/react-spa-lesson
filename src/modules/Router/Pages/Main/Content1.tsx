import React from 'react';

export default class Content1 extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* コンテンツ01 */}
            <div className="py-4">
                <section id="news">
                    <div className="container">
                        <div className="row">
                            {/* 左側カラム（画面幅md以上） */}
                            <div className="col-md-2">
                                <h3>News</h3>
                            </div>

                            {/* 右側カラム（画面幅md以上） */}
                            <div className="col-md-10">
                                <dl className="row">
                                    <dt className="col-md-3">2020年○月○日</dt>
                                    <dd className="col-md-9">ランチクーポン配布中です</dd>
                                    <dt className="col-md-3">2020年○月○日</dt>
                                    <dd className="col-md-9">季節限定メニューを追加しました</dd>
                                    <dt className="col-md-3">2020年○月○日</dt>
                                    <dd className="col-md-9">新しい雑貨さん入荷しました</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* /コンテンツ01 */}
            </>
        );
    }
}