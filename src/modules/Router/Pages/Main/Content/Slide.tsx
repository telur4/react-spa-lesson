import React from 'react';

type ThisProps = Readonly<{
    active: boolean,
    img_src: string,
    img_alt: string,
    title: string,
    text: string
}>;
type ThisState = Readonly<{}>;

export default class Slide extends React.Component<ThisProps, ThisState> {
    constructor(props: ThisProps) {
        super(props);
    }

    render(): Element | any {
        return (
            <>
            {/* スライド */}
            <div className={"carousel-item" + (this.props.active ? " active" : "")}>
                <img src={this.props.img_src} alt={this.props.img_alt} className="img-fluid" />
                <div className="carousel-caption d-none d-md-block">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
            {/* /スライド */}
            </>
        );
    }
}