import React, { PureComponent } from "react";
import Card, { CardStyle } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import { createGlobalStyle } from "styled-components";

interface NewsItem {
    uuid: string;
    dateTime: string;
    isRead?: boolean;
    target?: string;
    title: string;
    url: string;
}

export interface Props {
    className?: string;
    news: NewsItem[];
    title?: string;
}

export default class ReadHistory extends PureComponent<Props, any> {

    render() {
        return (
            <>
                <GlobalStyle/>
                <Card className={`fd-card-read-history${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <TypoGraphy className="h-read-history" textStyle='card-h'><h3>{this.props.title ? this.props.title : 'Recent gelezen'}</h3></TypoGraphy>
                    <nav>
                        {
                            this.props.news.map((newsItem) => {
                                return (
                                    <a key={newsItem.uuid} href={newsItem.url} target={newsItem.target}>
                                        <time>{newsItem.dateTime}</time>
                                        <span className={newsItem.isRead ? 'is-read' : undefined}>{newsItem.title}</span>
                                    </a>
                                );
                            })
                        }
                    </nav>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-card-read-history {
    .h-read-history,
    > a,
    nav > a {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    > a,
    nav > a {
        display: block;
        font-family: 'ProximaNovaRegular', sans-serif;
        border-top: 1px solid rgba(0,0,0,0.1);
        line-height: 1.2em;
        color: #191919;
        .is-read {
            opacity: 0.6;
        }
        &:hover {
            color: #49a4a2;
            .icon-chevron-right {
                color: #49a4a2;
            }
        }
        text-decoration: none;
        font-size: 16px;
        @media only screen and (min-width: 641px) {
            font-size: 17px;
        }
    }

    time {
        color: #677381;
        display: block;
        font-size: 13px;
        @media only screen and (min-width: 641px) {
            font-size: 14px;
        }
    }
}
`;

export const ReadHistoryStyle = createGlobalStyle`
    ${(CardStyle as any).globalStyle.rules}
    ${getAllTextStyles(['card-h']).globalStyle.rules}
    ${(GlobalStyle as any).globalStyle.rules}
`;
