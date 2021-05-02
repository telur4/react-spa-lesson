import React from 'react';

type ThisProps = Readonly<{id: string, title: string, img_src: string, text: string}>;
type ThisState = Readonly<{}>;

export default class Modal extends React.Component<ThisProps, ThisState> {
    constructor(props: ThisProps) {
        super(props);
    }

    render(): Element | any {
        return (
            <>
            {/* モーダル */}
            <div className="modal fade" id={this.props.id} tabIndex={-1} role="dialog" aria-labelledby={this.props.id + "-label"} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={this.props.id + "-label"}>{this.props.title}</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">
                                <img src={this.props.img_src} alt="#" className="img-fluid" />
                            </p>
                            <p>{this.props.text}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}