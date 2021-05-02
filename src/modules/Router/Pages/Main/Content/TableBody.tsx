import React from 'react';

type ThisProps = Readonly<{content: string[][]}>;
type ThisState = Readonly<{}>;

export default class TableBody extends React.Component<ThisProps, ThisState> {
    constructor(props: ThisProps) {
        super(props);
    }

    render(): Element | any {
        return (
            <>
            <tbody>
                {this.props.content.map((data) => {
                    return (
                        <tr>
                            <th>{data[0]}</th>
                            <td>{data[1]}</td>
                        </tr>
                    );
                })}
            </tbody>
            </>
        );
    }
}