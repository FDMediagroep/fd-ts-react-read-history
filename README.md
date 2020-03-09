[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-read-history.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-read-history)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-read-history/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-read-history?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-read-history.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-read-history)


# fd-read-history
FD-themed read-history.

# Installation
* Run `npm i -D @fdmg/fd-read-history`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/read-history/demo.html)

# Usage
```
import ReadHistory from '@fdmg/fd-read-history';
...
<ReadHistory
    news={[{
        uuid: '1',
        dateTime: `11:18`,
        title: `Provinciale lijsttrekkers CDA: stop met 'drammen en dromen' over klimaat`,
        url: `https://fd.nl/economie-politiek/1288207/provinciale-lijsttrekkers-cda-stop-met-drammen-en-dromen-over-klimaat`
    }, {
        uuid: '2',
        dateTime: `11:15`,
        title: `Luchtvaartbedrijf Germania valt om`,
        url: `https://fd.nl/ondernemen/1288215/luchtvaartbedrijf-germania-valt-om`
    }, {
        uuid: '3',
        dateTime: `11:10`,
        title: `Britse dienstensector krijgt harde tik van brexit`,
        url: `https://fd.nl/economie-politiek/1288213/britse-dienstensector-krijgt-harde-tik-van-brexit`
    }, {
        uuid: '4',
        dateTime: `11:00`,
        title: `DNB: Bovag-garantie toch geen verzekering`,
        url: `https://fd.nl/ondernemen/1288299/dnb-bovag-garantie-toch-geen-verzekering`
    }]}
/>
```
