import React from 'react';

type ThisProps = Readonly<{img_src: string, card_title: string, data_target: string}>;
type ThisState = Readonly<{}>;

export default class Card extends React.Component<ThisProps, ThisState> {
    constructor(props: ThisProps) {
        super(props);
    }

    render(): Element | any {
        return (
            <>
            {/* カード */}
            <div className="col-md-4">
                <div className="card mb-3">
                    <img src={this.props.img_src} alt="" className="img-fluid" />
                    {/* カード本文エリア */}
                    <div className="card-body d-flex justify-content-between">
                        <h4 className="card-title">{this.props.card_title}</h4>
                        <button className="btn btn-secondary" type="button" data-toggle="modal" data-target={this.props.data_target}>
                            詳しく見る
                        </button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}