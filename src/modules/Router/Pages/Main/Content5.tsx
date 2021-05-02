import React from 'react';
import TableBody from './Content/TableBody'

export default class Content5 extends React.Component {
    render(): Element | any {
        return (
            <>
            {/* コンテンツ05 */}
            <div className="py-4">
                <section id="information">
                    <div className="container">
                        <h3 className="mb-3">Information</h3>
                        <p>カフェ Mr. M COFFEE（ミスターエムコーヒー）は、○○県の○○市の山の中にあります。大自然に囲まれて、こだわりのコーヒーを飲みながら、美味しい空気と美しい景色をご堪能ください。</p>
                        <div className="row">
                            {/* 左側セクション */}
                            <div className="col-md-6">
                                <section id="shop">
                                    <h4 className="mb-3">Shop</h4>
                                    {/* 店舗情報の表 */}
                                    <table className="table table-hover">
                                        <TableBody
                                            content={[
                                                ["店名", "Mr. M COFFEE"],
                                                ["住所", "〒000-0000 ○○県○○市○○町1-2-3"],
                                                ["電話番号", "000-000-0000"],
                                                ["営業時間", "8:00〜18:00"],
                                                ["モーニング", "8:00〜11:00"],
                                                ["ランチタイム", "11:30〜14:00"],
                                                ["ラストオーダー", "17:30"],
                                                ["定休日", "水曜日、不定休"],
                                                ["クレジットカード", "利用不可"],
                                                ["禁煙席", "喫煙席あり"],
                                                ["駐車場", "駐車場あり"],
                                            ]}
                                        />
                                    </table>
                                    {/* /店舗情報の表 */}
                                </section>
                            </div>
                            {/* /左側セクション */}

                            {/* 右側セクション */}
                            <div className="col-md-6">
                                <section id="access">
                                    <h4 className="mb-3">Access</h4>
                                    {/* アクセスマップ */}
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.3328068554265!2d139.735574!3d35.693427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c5e412329bb%3A0x7db38e6732953dc!2z44CSMTYyLTA4NDYg5p2x5Lqs6YO95paw5a6_5Yy65biC6LC35bem5YaF55S677yS77yR4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1518974506558" frameBorder={0} width={800} height={600} style={{border: 0}} allowFullScreen />
                                    </div>
                                    {/* /アクセスマップ */}
                                    <p>○○駅から徒歩12分（950m）、駐車場あり</p>
                                </section>
                            </div>
                            {/* /右側セクション */}
                        </div>
                    </div>
                </section>
            </div>
            {/* /コンテンツ05 */}
            </>
        );
    }
}