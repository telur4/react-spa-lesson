import React from 'react';

export default class Content4 extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* コンテンツ04 */}
            <div className="py-4 bg-light">
                <section id="coupon">
                    <div className="container">
                        <h3 className="text-center mb-3">Coupon</h3>
                        {/* カード */}
                        <div className="card text-center text-dark w-75 mx-auto">
                            <div className="card-header bg-success text-while">
                                Mr. M COFFEEランチクーポン
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">食後のコーヒープラス100円にてご提供</h5>
                                <p className="card-text text-justify">ワンプレートランチ（限定数20食）ご注文のお客様に、プラス100円で食後のコーヒーをご提供。お会計の際に、このクーポン画面をスタッフに見せてください。</p>
                            </div>
                            <div className="card-footer bg-success text-white">
                                クーポンコード：HAPPYLUNCH
                            </div>
                        </div>
                        {/* /カード */}
                    </div>
                </section>
            </div>
            {/* /コンテンツ04 */}
            </>
        );
    }
}