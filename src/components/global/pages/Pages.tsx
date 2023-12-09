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
import Pages26 from "src/components/global/pages/AllPages/Pages26";
import Pages27 from "src/components/global/pages/AllPages/Pages27";
import Pages28 from "src/components/global/pages/AllPages/Pages28";
import Pages29 from "src/components/global/pages/AllPages/Pages29";
import Pages30 from "src/components/global/pages/AllPages/Pages30";
import Pages31 from "src/components/global/pages/AllPages/Pages31";
import Pages32 from "src/components/global/pages/AllPages/Pages32";
import Pages33 from "src/components/global/pages/AllPages/Pages33";
import Pages34 from "src/components/global/pages/AllPages/Pages34";
import Pages35 from "src/components/global/pages/AllPages/Pages35";
import Pages36 from "src/components/global/pages/AllPages/Pages36";
import Pages37 from "src/components/global/pages/AllPages/Pages37";
import Pages38 from "src/components/global/pages/AllPages/Pages38";
import Pages40 from "src/components/global/pages/AllPages/Pages40";
import Pages41 from "src/components/global/pages/AllPages/Pages41";
import Pages42 from "src/components/global/pages/AllPages/Pages42";
import Pages43 from "src/components/global/pages/AllPages/Pages43";
import Pages46 from "src/components/global/pages/AllPages/Pages46";
import Pages45 from "src/components/global/pages/AllPages/Pages45";
import Pages48 from "src/components/global/pages/AllPages/Pages48";
import Pages44 from "src/components/global/pages/AllPages/Pages44";
import Pages47 from "src/components/global/pages/AllPages/Pages47";
import Pages49 from "src/components/global/pages/AllPages/Pages49";
import Pages50 from "src/components/global/pages/AllPages/Pages50";
import Pages51 from "src/components/global/pages/AllPages/Pages51";
import Pages52 from "src/components/global/pages/AllPages/Pages52";
import Pages53 from "src/components/global/pages/AllPages/Pages53";
import Pages54 from "src/components/global/pages/AllPages/Pages54";
import Pages55 from "src/components/global/pages/AllPages/Pages55";
import Pages56 from "src/components/global/pages/AllPages/Pages56";
import Pages58 from "src/components/global/pages/AllPages/Pages58";
import Pages57 from "src/components/global/pages/AllPages/Pages57";
import Pages60 from "src/components/global/pages/AllPages/Pages60";
import Pages59 from "src/components/global/pages/AllPages/Pages59";
import Pages61 from "src/components/global/pages/AllPages/Pages61";
import Pages62 from "src/components/global/pages/AllPages/Pages62";
import Pages63 from "src/components/global/pages/AllPages/Pages63";
import Pages64 from "src/components/global/pages/AllPages/Pages64";
import Pages66 from "src/components/global/pages/AllPages/Pages66";
import Pages68 from "src/components/global/pages/AllPages/Pages68";
import Pages69 from "src/components/global/pages/AllPages/Pages69";
import Pages65 from "src/components/global/pages/AllPages/Pages65";
import Pages70 from "src/components/global/pages/AllPages/Pages70";
import Pages67 from "src/components/global/pages/AllPages/Pages67";
import Pages39 from "src/components/global/pages/AllPages/Pages39";

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
                    width={1050}
                    height={1100}
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
                            {i === 25 && <Pages26/>}
                            {i === 26 && <Pages27/>}
                            {i === 27 && <Pages28/>}
                            {i === 28 && <Pages29/>}
                            {i === 29 && <Pages30/>}
                            {i === 30 && <Pages31/>}
                            {i === 31 && <Pages32/>}
                            {i === 32 && <Pages33/>}
                            {i === 33 && <Pages34/>}
                            {i === 34 && <Pages35/>}
                            {i === 35 && <Pages36/>}
                            {i === 36 && <Pages37/>}
                            {i === 37 && <Pages38/>}
                            {i === 38 && <Pages39/>}
                            {i === 39 && <Pages40/>}
                            {i === 40 && <Pages41/>}
                            {i === 41 && <Pages42/>}
                            {i === 42 && <Pages43/>}
                            {i === 43 && <Pages44/>}
                            {i === 44 && <Pages45/>}
                            {i === 45 && <Pages46/>}
                            {i === 46 && <Pages47/>}
                            {i === 47 && <Pages48/>}
                            {i === 48 && <Pages49/>}
                            {i === 49 && <Pages50/>}
                            {i === 50 && <Pages51/>}
                            {i === 51 && <Pages52/>}
                            {i === 52 && <Pages53/>}
                            {i === 53 && <Pages54/>}
                            {i === 54 && <Pages55/>}
                            {i === 55 && <Pages56/>}
                            {i === 56 && <Pages57/>}
                            {i === 57 && <Pages58/>}
                            {i === 58 && <Pages59/>}
                            {i === 59 && <Pages60/>}
                            {i === 60 && <Pages61/>}
                            {i === 61 && <Pages62/>}
                            {i === 62 && <Pages63/>}
                            {i === 63 && <Pages64/>}
                            {i === 64 && <Pages65/>}
                            {i === 65 && <Pages66/>}
                            {i === 66 && <Pages67/>}
                            {i === 67 && <Pages68/>}
                            {i === 68 && <Pages69/>}
                            {i === 69 && <Pages70/>}

















                        </div>
                    ))}
                </ReactPageFlip>
            </div>
        );
    }
}

export default Pages;