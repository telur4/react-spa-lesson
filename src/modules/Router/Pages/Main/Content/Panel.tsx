import React from 'react';

type ThisProps = Readonly<{id: string, title: string, active: boolean, content: (string | number)[][], img_src: string, img_alt: string}>;
type ThisState = Readonly<{}>;

export default class Panel extends React.Component<ThisProps, ThisState> {
    constructor(props: ThisProps) {
        super(props);
    }
    render(): Element | any {
        return (
            <>
            {/* パネル */}
            <div className={"tab-pane fade show border border-top-0" + (this.props.active ? " active" : "")} id={"panel-" + this.props.id} role="tabpanel" aria-labelledby={"tab-" + this.props.id}>
                <div className="row p-3">
                    <div className="col-md-7 order-md-2">
                        <h4>{this.props.title}</h4>
                        <table className="table table-striped">
                            <tbody>
                                {this.props.content.map((data) => {
                                    return (
                                        <tr>
                                            <th>{data[0]}</th>
                                            <td>{String(data[1]) + "円（税別）"}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5">
                        <img src={this.props.img_src} alt={this.props.img_alt} className="img-fluid" />
                    </div>
                </div>
            </div>
            </>
        );
    }
}