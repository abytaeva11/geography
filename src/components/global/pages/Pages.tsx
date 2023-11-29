import React, { Component, RefObject } from 'react';
import "./Pages.scss"
import ReactPageFlip from 'react-pageflip';

import Pages1 from "./AllPages/Pages1";
import Pages2 from "./AllPages/Pages2";
import Pages3 from "./AllPages/Pages3";
import Pages4 from "./AllPages/Pages4";
import Pages5 from "./AllPages/Pages5";
import Pages6 from "./AllPages/Pages6";
import Pages7 from "./AllPages/Pages7";
import Pages9 from "./AllPages/Pages9";
import Pages8 from "./AllPages/Pages8";
import Pages10 from "./AllPages/Pages10";
import Pages11 from "./AllPages/Pages11";
import Pages12 from "./AllPages/Pages12";
import Pages13 from "./AllPages/Pages13";
import Pages14 from "./AllPages/Pages14";
import Pages15 from "./AllPages/Pages15";
import Pages16 from "./AllPages/Pages16";
import Pages17 from "./AllPages/Pages17";
import Pages18 from "./AllPages/Pages18";
import Pages19 from "./AllPages/Pages19";
import Pages20 from "./AllPages/Pages20";
import Pages21 from "./AllPages/Pages21";
import Pages22 from "./AllPages/Pages22";
import Pages23 from "./AllPages/Pages23";
import Pages24 from "./AllPages/Pages24";
import Pages25 from "./AllPages/Pages25";

interface PagesState {
    currentPage: number;
    totalPages: number;
}

class Pages extends Component<{}, PagesState> {
    private flip: RefObject<any>;

    constructor(props: {}) {
        super(props);

        this.state = {
            currentPage: 0,
            totalPages: 143,
        };

        this.flip = React.createRef();
    }

    handlePageChange(newPage: number) {
        this.setState({ currentPage: newPage });
    }

    nextPage = () => {
        if (this.state.currentPage < this.state.totalPages - 1) {
            this.handlePageChange(this.state.currentPage + 1);
            if (this.flip.current) {
                this.flip.current.turnNext();
            }
        }
    };

    prevPage = () => {
        if (this.state.currentPage > 0) {
            this.handlePageChange(this.state.currentPage - 1);
            if (this.flip.current) {
                this.flip.current.turnPrev();
            }
        }
    };

    onPageChange = (e: { data: { page: number } }) => {
        this.setState({ currentPage: e.data.page });
    };

    render() {
        const { currentPage, totalPages } = this.state;

        return (
            <div className="pages">
                <ReactPageFlip
                    width={1000}
                    height={900}
                    className="stage"
                    //@ts-ignore
                    onPageChange={this.onPageChange}
                    ref={this.flip}
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <div className="page" key={i}>

                            {i === 0 && <Pages1 />}
                            {i === 1 && <Pages2 />}
                            {i === 2 && <Pages3 />}
                            {i === 3 && <Pages4 />}
                            {i === 4 && <Pages5 />}
                            {i === 5 && <Pages6 />}
                            {i === 6 && <Pages7 />}
                            {i === 7 && <Pages8 />}
                            {i === 8 && <Pages9 />}
                            {i === 9 && <Pages10 />}
                            {i === 10 && <Pages11 />}
                            {i === 11 && <Pages12 />}
                            {i === 12 && <Pages13 />}
                            {i === 13 && <Pages14 />}
                            {i === 14 && <Pages15 />}
                            {i === 15 && <Pages16 />}
                            {i === 16 && <Pages17 />}
                            {i === 17 && <Pages18 />}
                            {i === 18 && <Pages19 />}
                            {i === 19 && <Pages20/>}
                            {i === 20 && <Pages21/>}
                            {i === 21 && <Pages22/>}
                            {i === 22 && <Pages23/>}
                            {i === 23 && <Pages24/>}
                            {i === 24 && <Pages25/>}
                        </div>
                    ))}
                </ReactPageFlip>
            </div>
        );
    }
}

export default Pages;