import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import ReadHistory from '../src/ReadHistory';
import uniqid from 'uniqid';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1ded0;
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div>
            <ReadHistory
                news={[{
                    uuid: uniqid(),
                    dateTime: `11:18`,
                    isRead: true,
                    title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
                    url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
                }, {
                    uuid: uniqid(),
                    dateTime: `11:15`,
                    title: `Luchtvaartbedrijf Germania valt om`,
                    url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
                }, {
                    uuid: uniqid(),
                    dateTime: `11:10`,
                    title: `Britse dienstensector krijgt harde tik van brexit`,
                    url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
                }, {
                    uuid: uniqid(),
                    dateTime: `11:00`,
                    title: `DNB: Bovag-garantie toch geen verzekering`,
                    url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
                }]}
            />
        </div>
    </>,
    document.getElementById('root'));
